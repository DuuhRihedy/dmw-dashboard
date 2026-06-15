"use client";

import { useSession } from '../../src/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Login from '../../src/components/auth/Login';

export default function LoginPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && session) {
      router.push('/');
    }
  }, [isPending, session, router]);

  if (isPending) return null;
  if (session) return null;

  return <Login />;
}
