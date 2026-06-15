"use client";

import { useSession } from '../src/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import App from '../src/App';

export default function Page() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login');
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#0a0a0f]">
        <div className="text-blue-400 text-xl animate-pulse">Carregando...</div>
      </div>
    );
  }

  if (!session) return null;

  return <App />;
}
