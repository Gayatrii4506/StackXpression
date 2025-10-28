import Head from "next/head";
import Footer from "@components/Footer";
import Header from "@components/Header";
import { ReactNode } from "react";
import GithubCorner from "react-github-corner";
import { REPO_LINK, WEBSITE_LINK } from "src/shared";

interface Props {
    children: ReactNode;
    title: string;
}

const Layout: React.FC<Props> = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="Description"
                    content="An interactive website to visualize how Infix, Prefix (Polish), and Postfix (Reverse Polish) notation are converted and evaluated."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta property="og:title" content="StackXpression" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={WEBSITE_LINK} />
                <meta
                    property="og:image"
                    content={`${WEBSITE_LINK}/img/calculator.png`}
                />
                <meta
                    property="og:description"
                    content="Professional mathematical notation visualization service for developers and students."
                />
            </Head>
            <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 text-gray-900 overflow-x-hidden">
                {/* Background Pattern */}
                <div className="fixed inset-0 opacity-30">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.1) 1px, transparent 0)`,
                        backgroundSize: '24px 24px'
                    }}></div>
                </div>

                <Header />

                <main className="min-h-screen relative">
                    {/* Subtle background elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
                        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10">{props.children}</div>
                </main>

                <Footer />
                <GithubCorner href="https://github.com/Gayatrii4506/StackXpression" />
            </div>
        </>
    );
};

export default Layout;
