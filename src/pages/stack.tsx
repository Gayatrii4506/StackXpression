import Layout from "@components/Layout";
import StackVisualizer from "@components/StackVisualizer";
import Link from "next/link";

const StackPage: React.FC = () => {
    return (
        <Layout title="Stack Visualizer - Notation Visualizer">
            <div className="container mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Stack Analysis <span className="text-indigo-600">Service</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Professional stack-based evaluation service with comprehensive algorithmic analysis. Enterprise-grade solution for computer science education.
                    </p>
                    <div className="flex justify-center mt-6 space-x-4">
                        <Link href="/">
                            <button className="px-6 py-2 bg-white hover:bg-gray-50 border border-gray-300 hover:border-indigo-500 rounded-lg transition-all duration-200 text-gray-700">
                                ← Back to Services
                            </button>
                        </Link>
                        <Link href="/tree">
                            <button className="px-6 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-400 rounded-lg transition-all duration-200 text-blue-700">
                                Tree Visualization Service →
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Visualizer Container */}
                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-2xl">
                    <StackVisualizer
                        initialPostfixExpression="8 2 3 * - 7 +"
                        initialPrefixExpression="+ - 8 * 2 3 7"
                    />
                </div>

                {/* Service Information */}
                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900">Algorithm Analysis</h3>
                        <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-600">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3 text-base">Postfix Evaluation Process</h4>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li>Left-to-right expression scanning</li>
                                    <li>Operand stack management</li>
                                    <li>Dual operand extraction per operator</li>
                                    <li>Result stack reintegration</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3 text-base">Prefix Evaluation Process</h4>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li>Right-to-left expression scanning</li>
                                    <li>Operand stack management</li>
                                    <li>Dual operand extraction per operator</li>
                                    <li>Result stack reintegration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default StackPage;
