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
            <div className="container mx-auto px-4 py-6 sm:py-8 max-w-7xl">
                
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
                                ← Back
                            </button>
                        </Link>
                        <Link href="/stack">
                            <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                Stack Service →
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Beautiful Layout: Visualizer centered, info on sides */}
                <div className="grid lg:grid-cols-12 gap-6 mb-12">
                    
                    {/* Left Sidebar - Information */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-8 space-y-6">
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-100 shadow-xl p-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></span>
                                    About Expression Trees
                                </h2>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Expression trees are binary trees where parent nodes are operators and child nodes are operands. They're fundamental to compiler design and mathematical expression parsing.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-5">
                                <h3 className="font-bold text-sm text-gray-900 mb-3">Traversal Types</h3>
                                <div className="space-y-3">
                                    <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
                                        <div className="font-semibold text-blue-700 text-xs mb-1">PREORDER</div>
                                        <div className="text-xs text-gray-600">Root → Left → Right</div>
                                    </div>
                                    <div className="bg-green-50 rounded-xl p-3 border border-green-200">
                                        <div className="font-semibold text-green-700 text-xs mb-1">INORDER</div>
                                        <div className="text-xs text-gray-600">Left → Root → Right</div>
                                    </div>
                                    <div className="bg-purple-50 rounded-xl p-3 border border-purple-200">
                                        <div className="font-semibold text-purple-700 text-xs mb-1">POSTORDER</div>
                                        <div className="text-xs text-gray-600">Left → Right → Root</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center - Visualizer */}
                    <div className="lg:col-span-8">
                        <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-3xl border-2 border-blue-100 shadow-2xl p-6 md:p-8">
                            
                            {/* Visualizer Title */}
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Interactive Tree Visualizer
                                </h2>
                                <p className="text-sm text-gray-500">
                                    Explore binary expression trees in real-time
                                </p>
                            </div>
                            
                            {/* TreeVisualizer component - all logic preserved */}
                            <TreeVisualizer initialExpression="8 2 3 * - 7 +" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TreePage;
