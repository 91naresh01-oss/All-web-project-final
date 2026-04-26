'use client';

import { initializeApp, getApps } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    User
} from 'firebase/auth';
import { firebaseConfig } from './config';

// Initialize Firebase App (only if not already initialized)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Get Auth instance
export const auth = getAuth(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

/**
 * Sign in with Google popup
 */
export async function signInWithGoogle(): Promise<User | null> {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error: any) {
        console.error('Google Sign-In Error:', error.message);
        return null;
    }
}

/**
 * Sign out user
 */
export async function signOutUser(): Promise<boolean> {
    try {
        await signOut(auth);
        return true;
    } catch (error: any) {
        console.error('Sign-Out Error:', error.message);
        return false;
    }
}

/**
 * Subscribe to auth state changes
 */
export function subscribeToAuthState(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}

export type { User };
