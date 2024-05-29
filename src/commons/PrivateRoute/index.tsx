import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Layout from '../Layout';
import Routes from '@/utils/Route';
import { RootState } from '@/utils/types';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn && typeof window !== 'undefined') {
      router.push(Routes.Login);
    }
  }, [isLoggedIn, router]);

  return <Layout>{children}</Layout>;
};

export default PrivateRoute;
