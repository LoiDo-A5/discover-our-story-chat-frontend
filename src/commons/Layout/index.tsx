import React, { ReactNode } from 'react';
import HeaderPage from '../HeaderPage';

interface LayoutProps {
    children: ReactNode;
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <HeaderPage />
      <main>{children}</main>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Layout;
