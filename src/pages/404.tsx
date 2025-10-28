import InternalLink from "@components/InternalLink";
import Layout from "@components/Layout";

const FourOhFour: React.FC = () => {
    return (
        <Layout title="Page Not Found :(">
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="max-w-md mx-auto bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-2xl p-8">
                    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                        404 - Page Not Found!
                    </h1>
                    <p className="text-slate-300 mb-8">
                        Oops! The page you're looking for doesn't exist.
                    </p>
                    <InternalLink href={"/"}>
                        <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-200">
                            Return to Home
                        </div>
                    </InternalLink>
                </div>
            </div>
        </Layout>
    );
};
export default FourOhFour;
