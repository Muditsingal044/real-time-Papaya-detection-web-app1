import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function WithAuth(props: P) {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (!isAuthenticated) {
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
} 