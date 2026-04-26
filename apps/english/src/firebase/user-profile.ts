'use client';

import type { UserProfile, ProgressEntry } from '@/lib/words';
import { getCloudProgress, saveCloudProgress, mergeProgress, deleteCloudProgress } from './firestore';

const SPELLING_PROGRESS_KEY = 'lingoleap_progress_guest';
const GRAMMAR_PROGRESS_KEY = 'lingoleap_grammar_progress_guest';

/**
 * Get progress from localStorage
 */
function getLocalProgress(): UserProfile {
  if (typeof window === 'undefined') return { spellingProgress: {}, grammarProgress: {} };
  try {
    const s = localStorage.getItem(SPELLING_PROGRESS_KEY);
    const g = localStorage.getItem(GRAMMAR_PROGRESS_KEY);

    const spellingProgress = s ? JSON.parse(s) : {};
    const grammarProgress = g ? JSON.parse(g) : {};

    // Migration logic for old data structure (score only)
    for (const key in spellingProgress) {
      if (typeof spellingProgress[key] === 'number') {
        spellingProgress[key] = { score: spellingProgress[key], date: new Date().toISOString() };
      }
    }
    for (const key in grammarProgress) {
      if (typeof grammarProgress[key] === 'number') {
        grammarProgress[key] = { score: grammarProgress[key], date: new Date().toISOString() };
      }
    }

    return { spellingProgress, grammarProgress };
  } catch (e) {
    console.warn("Local storage parse error", e);
    return { spellingProgress: {}, grammarProgress: {} };
  }
}

/**
 * Save progress to localStorage
 */
function saveLocalProgress(data: UserProfile) {
  if (typeof window === 'undefined') return;
  try {
    if (data.spellingProgress !== undefined) {
      localStorage.setItem(SPELLING_PROGRESS_KEY, JSON.stringify(data.spellingProgress));
    }
    if (data.grammarProgress !== undefined) {
      localStorage.setItem(GRAMMAR_PROGRESS_KEY, JSON.stringify(data.grammarProgress));
    }
  } catch (e) {
    console.error("Local storage save error", e);
  }
}

/**
 * Fetches the user profile (merged local + cloud if logged in)
 */
export async function getUserProfile(userId?: string | null): Promise<UserProfile> {
  const localData = getLocalProgress();

  if (!userId) {
    // Not logged in - use local only
    return localData;
  }

  // Logged in - merge with cloud
  try {
    const cloudData = await getCloudProgress(userId);

    if (!cloudData) {
      // No cloud data - upload local to cloud
      await saveCloudProgress(userId, localData);
      return localData;
    }

    // Merge local and cloud - latest wins
    const mergedSpelling = mergeProgress(localData.spellingProgress, cloudData.spellingProgress);
    const mergedGrammar = mergeProgress(localData.grammarProgress, cloudData.grammarProgress);

    const merged: UserProfile = {
      spellingProgress: mergedSpelling,
      grammarProgress: mergedGrammar
    };

    // Save merged data to both local and cloud
    saveLocalProgress(merged);
    await saveCloudProgress(userId, merged);

    return merged;
  } catch (error) {
    console.error('Cloud sync error, using local:', error);
    return localData;
  }
}

/**
 * Updates the user profile (local + cloud if logged in)
 */
export async function updateUserProfile(data: UserProfile, userId?: string | null) {
  // Always save to local
  saveLocalProgress(data);

  // If logged in, also save to cloud
  if (userId) {
    try {
      await saveCloudProgress(userId, data);
    } catch (error) {
      console.error('Cloud save error:', error);
    }
  }
}

/**
 * Clears all user progress data from local storage (and cloud if userId provided)
 */
export async function clearUserProfile(userId?: string | null) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(SPELLING_PROGRESS_KEY);
    localStorage.removeItem(GRAMMAR_PROGRESS_KEY);

    if (userId) {
      await deleteCloudProgress(userId);
    }
  } catch (e) {
    console.error("Local storage clear error", e);
  }
}

/**
 * Sync local progress to cloud (call after login)
 */
export async function syncProgressOnLogin(userId: string): Promise<UserProfile> {
  return getUserProfile(userId);
}
