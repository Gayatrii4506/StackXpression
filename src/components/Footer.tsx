import Image from "next/image";
import React from "react";
import { REPO_LINK } from "src/shared";
import ExternalLink from "./ExternalLink";
import SocialIcon from "./SocialIcon";

/**
 * Enhanced Footer Component
 * Modern footer with improved spacing and styling
 * Preserved colors: green (#22c55e, #059669), gray variants
 * Features: responsive grid layout, smooth transitions, improved typography
 * All links and content preserved
 */
const Footer: React.FC = () => {
    const imgPath = "https://ajayliu.com/img";
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-white border-t border-gray-200 mt-16 sm:mt-20 md:mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">
                
                {/* Main Footer Content - responsive grid layout */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-start text-center md:text-left mb-8">
                    
                    {/* Company Info - preserved content */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
                            StackXpression
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
                            Professional mathematical notation services for educational institutions and enterprise clients.
                        </p>
                    </div>

                    {/* GitHub Contribution - enhanced card with preserved green theme */}
                    <div className="flex justify-center">
                        <ExternalLink href="https://github.com/Gayatrii4506/StackXpression">
                            <div className="inline-flex items-center space-x-3 px-6 py-3.5 bg-green-50 hover:bg-green-100 border-2 border-green-200 hover:border-green-400 rounded-xl transition-all duration-300 transform hover:scale-105 group shadow-sm hover:shadow-md">
                                {/* GitHub icon - preserved green color */}
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm sm:text-base font-semibold text-green-700 group-hover:text-green-800 transition-colors duration-300">
                                    Open Source Project
                                </span>
                            </div>
                        </ExternalLink>
                    </div>

                    {/* Quick Links - preserved green theme */}
                    <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
                        <ExternalLink href="https://github.com/Gayatrii4506/StackXpression">
                            <span className="text-gray-600 hover:text-green-600 font-medium text-sm sm:text-base transition-colors duration-300">About</span>
                        </ExternalLink>
                        <ExternalLink href="https://github.com/Gayatrii4506/StackXpression">
                            <span className="text-gray-600 hover:text-green-600 font-medium text-sm sm:text-base transition-colors duration-300">GitHub</span>
                        </ExternalLink>
                        <ExternalLink href="https://github.com/Gayatrii4506/StackXpression/issues">
                            <span className="text-gray-600 hover:text-green-600 font-medium text-sm sm:text-base transition-colors duration-300">Support</span>
                        </ExternalLink>
                    </div>
                </div>

                {/* Copyright Section - improved typography and spacing */}
                <div className="border-t border-gray-200 pt-6 sm:pt-8">
                    <div className="text-center">
                        <p className="text-gray-500 text-sm sm:text-base">
                            © {currentYear} StackXpression. Professional Mathematical Solutions.
                        </p>
                        <p className="mt-2 text-sm sm:text-base">
                            <ExternalLink href="https://github.com/Gayatrii4506/StackXpression">
                                <span className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300">
                                    View on GitHub →
                                </span>
                            </ExternalLink>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
