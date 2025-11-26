import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full glass-effect border-b border-gray-100 z-50 shadow-sm">
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-semibold tracking-tight text-gray-900 hover:text-blue-600 transition-colors"
          >
            Samuel Yohannes
          </button>

          <div className="hidden md:flex items-center space-x-1">
            <button onClick={() => scrollToSection('home')} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('skills')} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all"
            >
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-gray-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors mt-2">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
