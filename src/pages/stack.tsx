import Layout from "@components/Layout";
import StackVisualizer from "@components/StackVisualizer";
import Link from "next/link";

const StackPage: React.FC = () => {
  return (
    <Layout title="Stack Analysis Service - StackXpression">
      <div className="container mx-auto px-4 py-8">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-emerald-500 via-green-600 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-emerald-600 to-green-600 bg-clip-text text-transparent">
              Stack Analysis
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Evaluate prefix and postfix expressions using stack-based algorithms
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/">
              <button className="px-6 py-3 bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                Back
              </button>
            </Link>
            <Link href="/tree">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold shadow-sm hover:shadow-md transition-all duration-200">
                Tree
              </button>
            </Link>
          </div>
        </div>

        {/* Main content: full-width Stack Visualizer */}
        <div className="w-full">
          <StackVisualizer
            initialPostfixExpression="8 2 3 * - 7 +"
            initialPrefixExpression="+ - 8 * 2 3 7"
          />
        </div>
      </div>
    </Layout>
  );
};

export default StackPage;
