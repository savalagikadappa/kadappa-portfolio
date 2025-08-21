export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 relative z-10">
            <div className="container mx-auto px-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <p className="text-gray-400">© {new Date().getFullYear()} Kadappa Savalagi</p>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                </div>
                <p className="text-gray-500 text-sm">Built with React & Tailwind CSS</p>
            </div>
        </footer>
    );
}