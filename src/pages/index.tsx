import ExternalLink from "@components/ExternalLink";
import Layout from "@components/Layout";
import ParagraphHeader from "@components/ParagraphHeader";
import StackVisualizer from "@components/StackVisualizer";
import TextPanel from "@components/TextPanel";
import TreeVisualizer from "@components/TreeVisualizer";
import Image from "next/image";
import Link from "next/link";

/**
 * Enhanced Home Page - StackXpression
 * Modern, professional landing page with preserved color scheme
 * 
 * Color Scheme (Preserved):
 * - Primary Green: #22c55e (green-500), #059669 (emerald-600)
 * - Accent Colors: #3b82f6 (blue-500), #1d4ed8 (blue-700)
 * - Neutral: Gray variants for text and backgrounds
 * 
 * Features:
 * - Responsive hero section with call-to-action buttons
 * - Service cards with hover effects and animations
 * - Live demonstration components (TreeVisualizer, StackVisualizer)
 * - Educational content panels with modern styling
 * - Fully responsive design (mobile, tablet, desktop)
 * 
 * All component functionality and business logic preserved
 */
const Home: React.FC = () => {
    return (
        <Layout title="StackXpression - Professional Mathematical Solutions">
            {/* Hero Section - Modern landing with preserved green theme */}
            <section className="relative py-16 sm:py-20 md:py-24 px-4">
                <div className="container mx-auto text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                            Professional Mathematical <span className="text-green-600">Notation Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                            Enterprise-grade visualization solutions for mathematical notation conversion and evaluation
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/tree" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                                    Tree Visualization Service
                                </button>
                            </Link>
                            <Link href="/stack" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 border-2 border-green-600 hover:border-green-700 text-green-600 hover:text-green-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Stack Analysis Service
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Dashboard */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                        Our Professional Services
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Comprehensive mathematical notation solutions designed for educational institutions and enterprise clients
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Tree Visualization Service */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Tree Visualization</h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                Advanced expression tree visualization service for educational institutions. Visualize complex mathematical structures with interactive tree diagrams.
                            </p>
                            <Link href="/tree" className="block w-full">
                                <button className="w-full py-3 bg-green-50 hover:bg-green-100 border border-green-200 hover:border-green-300 rounded-lg transition-all duration-200 text-green-700 font-medium">
                                    Access Service →
                                </button>
                            </Link>
                        </div>

                        {/* Stack Analysis Service */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Stack Analysis</h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                Professional stack-based evaluation service with step-by-step algorithmic analysis. Perfect for computer science education and training.
                            </p>
                            <Link href="/stack" className="block w-full">
                                <button className="w-full py-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 hover:border-emerald-300 rounded-lg transition-all duration-200 text-emerald-700 font-medium">
                                    Access Service →
                                </button>
                            </Link>
                        </div>

                        {/* Consulting Services */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Educational Consulting</h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                Comprehensive educational consulting services with interactive learning modules, curriculum development, and training programs.
                            </p>
                            <Link href="https://github.com/Gayatrii4506/StackXpression" className="block w-full">
                                <button className="w-full py-3 bg-green-50 hover:bg-green-100 border border-green-200 hover:border-green-300 rounded-lg transition-all duration-200 text-green-700 font-medium">
                                    Learn More →
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Documentation */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                        Technical Documentation
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Comprehensive technical specifications for mathematical notation systems
                    </p>
                    <div className="flex justify-center items-start flex-col gap-8 lg:flex-row max-w-7xl mx-auto">
                        <div className="lg:w-3/5 space-y-6">
                            <TextPanel
                                header={"Mathematical Notation Systems Overview"}
                            >
                                <ParagraphHeader>Operators vs Operands</ParagraphHeader>
                                <p className="text-sm">
                                    <strong>Operators</strong> are symbols like +, -, *,
                                    /, ^, anything that operates on... <br />
                                    <strong>Operands</strong>, which are values like 8,
                                    21; things to be operated on.
                                </p>
                                <ParagraphHeader>The Three Notation Systems</ParagraphHeader>
                                <div className="text-sm">
                                    <strong>Infix: </strong> When we say 9+10, that is{" "}
                                    <strong>infix notation </strong>- that is, the
                                    operator is <em>in</em> between the operands. It's
                                    the one we're all familiar with.
                                    <br />
                                    Ex:
                                    <ul className="ml-4 list-disc list-inside">
                                        <li>24 / 7</li>
                                        <li>8 - 2 * 3 + 7</li>
                                    </ul>
                                </div>
                                <div className="mt-2 text-sm">
                                    <strong>Prefix: </strong> also known as{" "}
                                    <strong>Polish notation</strong>- is where the
                                    operator sits <em>before</em> the operands.
                                    <br />
                                    Ex:
                                    <ul className="ml-4 list-disc list-inside">
                                        <li>/ 24 7</li>
                                        <li>+ - 8 * 2 3 7</li>
                                    </ul>
                                </div>
                                <div className="mt-2 text-sm">
                                    <strong>Postfix: </strong> also known as{" "}
                                    <strong>Reverse Polish Notation</strong> or RPN- is
                                    where the operator sits <em>after</em> the operands.
                                    <br />
                                    Ex:
                                    <ul className="ml-4 list-disc list-inside">
                                        <li>24 7 /</li>
                                        <li>8 2 3 * - 7 +</li>
                                    </ul>
                                </div>
                                <ParagraphHeader>
                                    Enterprise Implementation Benefits
                                </ParagraphHeader>
                                <p className="text-sm">
                                    Notice how in the second example, 8 - 2 * 3 + 7, we
                                    had to evaluate the multiplication before the
                                    subtraction and finally the addition? This is
                                    inconvenient for computers to evaluate as
                                    parentheses need to be applied according to the
                                    order of operations. However, prefix and postfix
                                    notation don't suffer from this ambiguity and follow
                                    an easy and consistent set of instructions to
                                    evaluate, making it very suitable for computers!
                                </p>
                            </TextPanel>
                        </div>
                        <div className="lg:w-2/5 flex justify-center">
                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xl">
                                <Image
                                    src={"/img/diagram.jpg"}
                                    width={300}
                                    height={300}
                                    alt={"Prefix, infix, postfix explanation diagram"}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Service Demonstrations */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                        Live Service Demonstrations
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Interactive demonstrations of our professional visualization services
                    </p>
                    <div className="space-y-16 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl">
                            <h3 className="text-2xl font-semibold mb-6 text-center text-green-600">Tree Visualization Service Demo</h3>
                            <TreeVisualizer initialExpression="8 2 3 * - 7 +" />
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl">
                            <h3 className="text-2xl font-semibold mb-6 text-center text-emerald-600">Stack Analysis Service Demo</h3>
                            <StackVisualizer
                                initialPostfixExpression="8 2 3 * - 7 +"
                                initialPrefixExpression="+ - 8 * 2 3 7"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Resources */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <TextPanel header="Additional Resources & Documentation">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-600 mb-4">Educational video demonstration of our services:</p>
                                    <div className="bg-gray-100 p-4 rounded-xl border border-gray-200">
                                        <div className="aspect-w-16 aspect-h-9">
                                            <iframe
                                                src="https://www.youtube.com/embed/3RhLATMb7OI"
                                                title="What is Prefix, Infix, Postfix Notation | Introductory Computer Science | StackXpression"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="rounded-lg w-full h-64"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-600 mb-3">
                                        Technical reference materials and academic resources for mathematical notation systems:
                                    </p>
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                        <ExternalLink href="https://sites.cs.ucsb.edu/~mikec/cs12/slides/week08c.pdf">
                                            UCSB CS12 Mathematical Notation Reference Guide
                                        </ExternalLink>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link href="https://github.com/Gayatrii4506/StackXpression" className="inline-block">
                                        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 font-medium">
                                            View Project Documentation →
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </TextPanel>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
