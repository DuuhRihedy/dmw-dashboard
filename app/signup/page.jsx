"use client";

import { useSession } from '../../src/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import SignUp from '../../src/components/auth/SignUp';

export default function SignUpPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && session) {
      router.push('/');
    }
  }, [isPending, session, router]);

  if (isPending) return null;
  if (session) return null;

  return <SignUp />;
}
