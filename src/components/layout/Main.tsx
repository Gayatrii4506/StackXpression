import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
  className?: string;
}

const Main = ({ children, className = '' }: MainProps) => {
  return (
    <main className={`min-h-screen relative ${className}`}>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </main>
  );
};

export default Main;
