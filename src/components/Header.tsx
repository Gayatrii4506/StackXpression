import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { ImageData } from "src/types";
import InternalLink from "./InternalLink";

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (path: string) => {
        return router.pathname === path;
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo & Branding */}
                    <InternalLink href={"/"}>
                        <div className="flex items-center hover:scale-105 transition-all duration-300 cursor-pointer group">
                            <div className="mr-3 p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg group-hover:shadow-emerald-500/25 group-hover:from-emerald-600 group-hover:to-green-700 transition-all duration-300">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                                    StackXpression
                                </h1>
                                <p className="text-xs text-gray-500 hidden md:block font-medium uppercase tracking-wide">
                                    Professional Mathematical Solutions
                                </p>
                            </div>
                        </div>
                    </InternalLink>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/">
                            <span className={`text-sm font-medium transition-colors duration-200 hover:text-emerald-600 ${
                                isActive('/') ? 'text-emerald-600 font-semibold' : 'text-gray-700'
                            }`}>
                                Home
                            </span>
                        </Link>
                        <Link href="/tree">
                            <span className={`text-sm font-medium transition-colors duration-200 hover:text-emerald-600 ${
                                isActive('/tree') ? 'text-emerald-600 font-semibold' : 'text-gray-700'
                            }`}>
                                Tree
                            </span>
                        </Link>
                        <Link href="/stack">
                            <span className={`text-sm font-medium transition-colors duration-200 hover:text-emerald-600 ${
                                isActive('/stack') ? 'text-emerald-600 font-semibold' : 'text-gray-700'
                            }`}>
                                Stack
                            </span>
                        </Link>
                        <Link href="https://github.com/Gayatrii4506/StackXpression">
                            <span className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200">
                                About
                            </span>
                        </Link>
                        <Link href="https://github.com/Gayatrii4506/StackXpression">
                            <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
                                GitHub
                            </button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-lg">
                        <nav className="py-4 space-y-3">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className={`block px-4 py-3 text-base font-medium transition-colors duration-200 hover:text-emerald-600 hover:bg-gray-50 rounded-lg ${
                                    isActive('/') ? 'text-emerald-600 font-semibold bg-emerald-50' : 'text-gray-700'
                                }`}>
                                    Home
                                </span>
                            </Link>
                            <Link href="/tree" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className={`block px-4 py-3 text-base font-medium transition-colors duration-200 hover:text-emerald-600 hover:bg-gray-50 rounded-lg ${
                                    isActive('/tree') ? 'text-emerald-600 font-semibold bg-emerald-50' : 'text-gray-700'
                                }`}>
                                    Tree
                                </span>
                            </Link>
                            <Link href="/stack" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className={`block px-4 py-3 text-base font-medium transition-colors duration-200 hover:text-emerald-600 hover:bg-gray-50 rounded-lg ${
                                    isActive('/stack') ? 'text-emerald-600 font-semibold bg-emerald-50' : 'text-gray-700'
                                }`}>
                                    Stack
                                </span>
                            </Link>
                            <Link href="https://github.com/Gayatrii4506/StackXpression" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                                    About
                                </span>
                            </Link>
                            <div className="px-4 pt-2">
                                <Link href="https://github.com/Gayatrii4506/StackXpression" onClick={() => setIsMobileMenuOpen(false)}>
                                    <button className="w-full px-5 py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300">
                                        GitHub
                                    </button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
