import { useState } from 'react';
import "tailwindcss"
export default function Header({ toggleDark, isDark }) {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Kadappa Savalagi
                </h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 relative group"
                        >
                            {link.label}
                            <span className="block h-0.5 bg-indigo-500 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
                        </a>
                    ))}
                    <button
                        onClick={toggleDark}
                        className="ml-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition"
                        aria-label="Toggle theme"
                    >
                        {isDark ? '🌞' : '🌙'}
                    </button>
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
                <div className="md:hidden bg-white dark:bg-gray-800 rounded-b-xl shadow-xl mx-4 mt-2 px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg font-medium text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        onClick={toggleDark}
                        className="w-full bg-gray-200 dark:bg-gray-700 text-center p-2 rounded-md"
                    >
                        {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
                    </button>
                </div>
            )}
        </header>
    );
}