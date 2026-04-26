'use client';

import { initializeApp, getApps } from 'firebase/app';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    serverTimestamp
} from 'firebase/firestore';
import { firebaseConfig } from './config';
import type { UserProfile, ProgressEntry } from '@/lib/words';

// Initialize Firebase App (only if not already initialized)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Get Firestore instance
export const db = getFirestore(app);

/**
 * Get user progress from Firestore
 */
export async function getCloudProgress(userId: string): Promise<UserProfile | null> {
    try {
        const docRef = doc(db, 'users', userId, 'data', 'progress');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data() as UserProfile;
        }
        return null;
    } catch (error) {
        console.error('Error fetching cloud progress:', error);
        return null;
    }
}

/**
 * Save user progress to Firestore
 */
export async function saveCloudProgress(userId: string, data: UserProfile): Promise<boolean> {
    try {
        const docRef = doc(db, 'users', userId, 'data', 'progress');
        await setDoc(docRef, {
            ...data,
            updatedAt: serverTimestamp()
        }, { merge: true });
        return true;
    } catch (error) {
        console.error('Error saving cloud progress:', error);
        return false;
    }
}

/**
 * Merge two progress objects - latest date wins for each key
 */
export function mergeProgress(
    local: { [key: string]: ProgressEntry } | undefined,
    cloud: { [key: string]: ProgressEntry } | undefined
): { [key: string]: ProgressEntry } {
    const merged: { [key: string]: ProgressEntry } = {};

    // Get all unique keys
    const allKeys = new Set([
        ...Object.keys(local || {}),
        ...Object.keys(cloud || {})
    ]);

    for (const key of allKeys) {
        const localEntry = local?.[key];
        const cloudEntry = cloud?.[key];

        if (!localEntry && cloudEntry) {
            merged[key] = cloudEntry;
        } else if (localEntry && !cloudEntry) {
            merged[key] = localEntry;
        } else if (localEntry && cloudEntry) {
            // Compare dates - latest wins
            const localDate = new Date(localEntry.date).getTime();
            const cloudDate = new Date(cloudEntry.date).getTime();
            merged[key] = localDate >= cloudDate ? localEntry : cloudEntry;
        }
    }

    return merged;
}

/**
 * Delete user progress from Firestore
 */
export async function deleteCloudProgress(userId: string): Promise<boolean> {
    try {
        const docRef = doc(db, 'users', userId, 'data', 'progress');
        await setDoc(docRef, {
            spellingProgress: {},
            grammarProgress: {},
            updatedAt: serverTimestamp()
        });
        return true;
    } catch (error) {
        console.error('Error deleting cloud progress:', error);
        return false;
    }
}
