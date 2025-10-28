import Layout from "@components/Layout";
import TreeVisualizer from "@components/TreeVisualizer";
import Link from "next/link";

/**
 * Beautiful Tree Visualization Service Page
 * Stunning modern design with preserved colors and functionality
 */
const TreePage: React.FC = () => {
    return (
        <Layout title="Tree Visualization Service - StackXpression">
            <div className="container mx-auto px-4 py-6 sm:py-8">
                
                {/* Elegant Page Header */}
                <div className="text-center mb-8 sm:mb-12">
                    {/* Animated icon with gradient */}
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                        <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                    </div>
                    
                    {/* Large title with gradient text */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
                        <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Tree Visualization
                        </span>
                    </h1>
                    
                    {/* Elegant description */}
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                        Visualize binary expression trees and explore traversal algorithms in real-time
                    </p>
                    
                    {/* Stylish navigation */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                        <Link href="/">
                            <button className="px-6 py-3 bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                                Back
                            </button>
                        </Link>
                        <Link href="/stack">
                            <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-semibold shadow-sm hover:shadow-md transition-all duration-200">
                                Stack
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Main content: full-width Tree Visualizer */}
                <div className="w-full">
                    <TreeVisualizer initialExpression="8 2 3 * - 7 +" />
                </div>
            </div>
        </Layout>
    );
};

export default TreePage;
