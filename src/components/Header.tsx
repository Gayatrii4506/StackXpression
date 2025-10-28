import Image from "next/image";
import Link from "next/link";
import { ImageData } from "src/types";
import InternalLink from "./InternalLink";
import Navbar from "./Navbar";

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 py-4 w-full bg-white/95 border-b border-gray-200 backdrop-blur-lg shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <InternalLink href={"/"}>
                        <div className="flex items-center hover:scale-105 transition-all duration-300 cursor-pointer group">
                            <div className="mr-3 p-3 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    StackXpression
                                </h1>
                                <p className="text-xs text-green-600 hidden sm:block font-medium">Professional Mathematical Solutions</p>
                            </div>
                        </div>
                    </InternalLink>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/">
                            <span className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">Home</span>
                        </Link>
                        <Link href="/tree">
                            <span className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">Tree Service</span>
                        </Link>
                        <Link href="/stack">
                            <span className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">Stack Service</span>
                        </Link>
                        <Link href="https://github.com/Gayatrii4506/StackXpression">
                            <span className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">About</span>
                        </Link>
                        <Link href="https://github.com/Gayatrii4506/StackXpression">
                            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 font-medium text-sm shadow-sm">
                                GitHub
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
