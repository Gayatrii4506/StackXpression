import Layout from "@components/Layout";
import TreeVisualizer from "@components/TreeVisualizer";
import Link from "next/link";

const TreePage: React.FC = () => {
    return (
        <Layout title="Tree Visualization Service - StackXpression">
            <div className="container mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Tree Visualization <span className="text-blue-600">Service</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Professional expression tree visualization for educational institutions. Interactive binary tree representations of mathematical expressions.
                    </p>
                    <div className="flex justify-center mt-6 space-x-4">
                        <Link href="/">
                            <button className="px-6 py-2 bg-white hover:bg-gray-50 border border-gray-300 hover:border-blue-500 rounded-lg transition-all duration-200 text-gray-700">
                                ← Back to Services
                            </button>
                        </Link>
                        <Link href="/stack">
                            <button className="px-6 py-2 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 hover:border-indigo-400 rounded-lg transition-all duration-200 text-indigo-700">
                                Stack Analysis Service →
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Visualizer Container */}
                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-2xl">
                    <TreeVisualizer initialExpression="8 2 3 * - 7 +" />
                </div>

                {/* Service Information */}
                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900">Service Features</h3>
                        <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-600">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3 text-base">Input Specifications</h4>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li>Postfix notation input format</li>
                                    <li>Space-separated operators and operands</li>
                                    <li>Full operator support: +, -, *, /, ^</li>
                                    <li>Example: "8 2 3 * - 7 +"</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3 text-base">Professional Features</h4>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li>Interactive tree visualization</li>
                                    <li>Expression evaluation order display</li>
                                    <li>Multi-notation conversion support</li>
                                    <li>Step-by-step construction process</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TreePage;
