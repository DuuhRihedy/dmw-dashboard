import { createAuthClient } from '@neondatabase/auth';
import { useState, useEffect } from 'react';

const authUrl = process.env.NEXT_PUBLIC_NEON_AUTH_URL;

export const authClient = createAuthClient(authUrl);

export const { signIn, signUp, signOut } = authClient;

// Como o cliente vanilla usa NanoStores ou similar internamente:
export function useSession() {
  const [state, setState] = useState(authClient.useSession?.get?.() || { data: null, isPending: true });

  useEffect(() => {
    if (!authClient.useSession?.subscribe) {
      setState({ data: null, isPending: false });
      return;
    }
    
    const unsubscribe = authClient.useSession.subscribe((val) => {
      setState(val);
    });
    
    return () => unsubscribe();
  }, []);

  return state;
}
