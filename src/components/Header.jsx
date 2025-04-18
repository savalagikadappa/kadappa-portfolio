import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
                    Kadappa Savalagi
                </h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-gray-700 font-medium hover:text-indigo-600 relative group"
                        >
                            {link.label}
                            <span className="block h-0.5 bg-indigo-500 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-7 h-7 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white rounded-b-xl shadow-xl mx-4 mt-2 px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-700 font-medium hover:text-indigo-600 relative"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
