import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ scrollY, scrollToSection }) {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-8" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Kadappa</span><br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Savalagi</span>
                    </h1>
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-20" />
                        <p className="text-xl text-gray-300 font-light">Software Developer</p>
                        <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-20" />
                    </div>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Crafting innovative digital experiences with cutting-edge technology. Passionate about solving complex problems through elegant code.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => scrollToSection('projects')} className="group bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
                            View Projects
                            <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                        </Button>
                        <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm">
                            Get In Touch
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </div>
        </section>
    );
}
