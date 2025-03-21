import React from 'react';
import { Languages, Menu, X } from 'lucide-react';
import { Lang } from '../types';

interface NavigationProps {
  currentSection: string;
  lang: Lang;
  isMenuOpen: boolean;
  setCurrentSection: (section: 'home' | 'about' | 'contacts') => void;
  setLang: (lang: Lang) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
  content: any;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  lang,
  isMenuOpen,
  setCurrentSection,
  setLang,
  setIsMenuOpen,
  content
}) => {
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-red-500/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
          CREATIVE_tg1
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="text-red-500" size={24} />
          ) : (
            <Menu className="text-red-500" size={24} />
          )}
        </button>

        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setCurrentSection('home')}
            className={`hover:text-red-500 transition-colors ${currentSection === 'home' ? 'text-red-500' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentSection('about')}
            className={`hover:text-red-500 transition-colors ${currentSection === 'about' ? 'text-red-500' : ''}`}
          >
            {content[lang].about}
          </button>
          <button 
            onClick={() => setCurrentSection('contacts')}
            className={`hover:text-red-500 transition-colors ${currentSection === 'contacts' ? 'text-red-500' : ''}`}
          >
            {content[lang].contacts}
          </button>
          <button 
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
          >
            <Languages size={20} />
            {lang.toUpperCase()}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-red-500/20">
          <div className="flex flex-col items-center gap-4 py-4">
            <button 
              onClick={() => {
                setCurrentSection('home');
                closeMenu();
              }}
              className={`hover:text-red-500 transition-colors ${currentSection === 'home' ? 'text-red-500' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => {
                setCurrentSection('about');
                closeMenu();
              }}
              className={`hover:text-red-500 transition-colors ${currentSection === 'about' ? 'text-red-500' : ''}`}
            >
              {content[lang].about}
            </button>
            <button 
              onClick={() => {
                setCurrentSection('contacts');
                closeMenu();
              }}
              className={`hover:text-red-500 transition-colors ${currentSection === 'contacts' ? 'text-red-500' : ''}`}
            >
              {content[lang].contacts}
            </button>
            <button 
              onClick={() => {
                setLang(lang === 'ru' ? 'en' : 'ru');
                closeMenu();
              }}
              className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
            >
              <Languages size={20} />
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};