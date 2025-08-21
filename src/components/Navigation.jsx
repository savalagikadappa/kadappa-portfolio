import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };
  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
          <div className="flex items-center space-x-8">
            <div className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">KS</div>
            <div className="hidden md:flex space-x-6">
              {['About','Experience','Projects','Skills','Contact'].map(item => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`text-sm transition-all duration-300 hover:text-white ${activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-400'}`}>{item}</button>
              ))}
            </div>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['About','Experience','Projects','Skills','Contact'].map(item => (
              <button key={item} onClick={() => handleScrollToSection(item.toLowerCase())} className="text-2xl text-white hover:text-blue-400 transition-colors">{item}</button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
