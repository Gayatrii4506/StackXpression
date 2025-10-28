import Head from 'next/head';
import { ReactNode } from 'react';
import { REPO_LINK, WEBSITE_LINK } from 'src/shared';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

interface LayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Enhanced Layout Component
 * Main layout wrapper with improved background and structure
 * Preserved colors: green (#22c55e, #059669), emerald, gray variants
 * Features: modern gradient background, subtle patterns, responsive structure
 * All page structure and meta tags preserved
 */
const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description = 'An interactive website to visualize how Infix, Prefix (Polish), and Postfix (Reverse Polish) notation are converted and evaluated.',
  className = '',
}) => {
  return (
    <>
      {/* Head section - preserved all meta tags and SEO */}
      <Head>
        <title>{title} | StackXpression</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook - preserved social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={WEBSITE_LINK} />
        <meta property="og:title" content={`${title} | StackXpression`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${WEBSITE_LINK}/img/calculator.png`} />

        {/* Twitter - preserved social sharing */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={WEBSITE_LINK} />
        <meta property="twitter:title" content={`${title} | StackXpression`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${WEBSITE_LINK}/img/calculator.png`} />
      </Head>

      {/* Main container - enhanced gradient background with preserved green theme */}
      <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80 text-gray-900 flex flex-col relative ${className}`}>
        
        {/* Subtle dot pattern background - preserved green color (#22c55e) */}
        <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.12) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        {/* Animated gradient orbs - preserved green/emerald colors with improved positioning */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Top-left orb - preserved green (#22c55e) */}
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/6 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '8s' }}
          ></div>
          
          {/* Bottom-right orb - preserved emerald (#059669) */}
          <div 
            className="absolute top-2/3 right-1/4 w-96 h-96 bg-emerald-500/6 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '10s', animationDelay: '2s' }}
          ></div>
          
          {/* Additional subtle orb for depth */}
          <div 
            className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-400/4 rounded-full blur-3xl"
          ></div>
        </div>

        {/* Header - sticky navigation */}
        <Header />
        
        {/* Main content area - proper z-index for content above background */}
        <Main>
          {children}
        </Main>
        
        {/* Footer - preserved structure */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
