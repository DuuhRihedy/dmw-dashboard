import { createAuthClient } from '@neondatabase/auth';
import { useState, useEffect } from 'react';

const authUrl = process.env.NEXT_PUBLIC_NEON_AUTH_URL;

export const authClient = createAuthClient(authUrl);

export const { signIn, signUp, signOut } = authClient;

// Como o cliente vanilla usa NanoStores ou similar internamente:
export function useSession() {
  const [session, setSession] = useState(authClient.useSession?.get?.() || null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    if (!authClient.useSession?.subscribe) {
      setIsPending(false);
      return;
    }
    
    // Subscribe to store changes
    const unsubscribe = authClient.useSession.subscribe((val) => {
      setSession(val);
      setIsPending(false);
    });
    
    return () => unsubscribe();
  }, []);

  // Format to match expected { data: session, isPending }
  return { data: session, isPending };
}
