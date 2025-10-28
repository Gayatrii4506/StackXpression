import InternalLink from "./InternalLink";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
    const router = useRouter();

    const navItems = [
        { href: "/", label: "Home", icon: "🏠" },
        { href: "/tree", label: "Tree", icon: "🌳" },
        { href: "/stack", label: "Stack", icon: "📚" }
    ];

    return (
        <nav className="md:hidden max-w-2xl mx-auto mt-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-2 shadow-lg">
                <ul className="flex justify-center items-center space-x-2">
                    {navItems.map((item) => {
                        const isActive = router.pathname === item.href;
                        return (
                            <li key={item.href}>
                                <InternalLink href={item.href}>
                                    <div className={`
                                        px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2
                                        ${isActive
                                            ? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg transform scale-105'
                                            : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-green-300 hover:transform hover:scale-105 text-gray-700'
                                        }
                                    `}>
                                        <span className="text-lg">{item.icon}</span>
                                        <span className="hidden sm:inline text-sm">{item.label}</span>
                                        <span className="sm:hidden text-sm">{item.label.split(' ')[0]}</span>
                                    </div>
                                </InternalLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
