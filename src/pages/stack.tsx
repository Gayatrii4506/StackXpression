import Layout from "@components/Layout";
import StackVisualizer from "@components/StackVisualizer";
import Link from "next/link";

const StackPage: React.FC = () => {
  return (
    <Layout title="Stack Analysis Service - StackXpression">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
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
                ← Back
              </button>
            </Link>
            <Link href="/tree">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Tree Service →
              </button>
            </Link>
          </div>
        </div>

        {/* Main content: flexible two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Content & Cards */}
          <div className="flex-1 space-y-6">
            {/* Algorithm Cards */}
            <div className="grid gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl border border-emerald-100 shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full mr-3"></span>
                  Stack Evaluation
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Stack-based evaluation is a LIFO data structure method that efficiently computes mathematical expressions in prefix and postfix notations.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-base text-gray-900 mb-4">Algorithm Types</h3>
                <div className="space-y-3">
                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                    <div className="font-semibold text-emerald-700 text-sm mb-1">POSTFIX</div>
                    <div className="text-xs text-gray-600">Evaluate left → right</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <div className="font-semibold text-green-700 text-sm mb-1">PREFIX</div>
                    <div className="text-xs text-gray-600">Evaluate right → left</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stack Visualizer */}
          <div className="flex-1 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/30 rounded-3xl border-2 border-emerald-100 shadow-2xl p-8 md:p-10 lg:p-12 flex flex-col justify-between">
            
            <div className="mb-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Stack Visualizer
              </h2>
              <p className="text-sm text-gray-500">
                Step-by-step expression evaluation
              </p>
            </div>

            <div className="flex-grow">
              <StackVisualizer
                initialPostfixExpression="8 2 3 * - 7 +"
                initialPrefixExpression="+ - 8 * 2 3 7"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StackPage;
