import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';

/**
 * Enhanced Header Component
 * Modern navigation header with sticky behavior and glass effect
 * Preserved colors: green-600 (#059669), green-50, gray variants
 * Features: sticky positioning, backdrop blur, smooth transitions, responsive mobile menu
 * All navigation logic and routing preserved
 */
const Header = () => {
  /* State management - preserved original functionality */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  /* Scroll detection for header styling - preserved functionality */
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  /* Navigation items - preserved structure */
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tree Visualization', path: '/tree' },
    { name: 'Stack Analysis', path: '/stack' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo - enhanced with preserved green color (#059669) */}
          <Link href="/">
            <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group">
              {/* Logo icon - gradient background with preserved green */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                SX
              </div>
              {/* Logo text - responsive sizing */}
              <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                StackXpression
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                passHref
              >
                <span
                  className={`px-4 py-2 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                    router.pathname === item.path
                      ? 'text-green-600 bg-green-50 shadow-sm'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50/70'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* GitHub link - desktop only */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Gayatrii4506/StackXpression"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors duration-300"
              aria-label="View on GitHub"
            >
              <FaIcons.FaGithub className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">{isMenuOpen ? 'Close' : 'Open'} main menu</span>
              {isMenuOpen ? (
                <FaIcons.FaTimes className="block h-6 w-6" />
              ) : (
                <FaIcons.FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - enhanced with smooth animations */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              passHref
            >
              <div
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer ${
                  router.pathname === item.path
                    ? 'bg-green-50 text-green-700 shadow-sm'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </div>
            </Link>
          ))}
          
          {/* GitHub link in mobile menu */}
          <a
            href="https://github.com/Gayatrii4506/StackXpression"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaIcons.FaGithub className="h-5 w-5" />
            <span className="font-medium">View on GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
