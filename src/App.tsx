import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Contacts } from './components/sections/Contacts';
import { content } from './data/content';
import { Lang } from './types';

function App() {
  const [currentSection, setCurrentSection] = useState<'home' | 'about' | 'contacts'>('home');
  const [lang, setLang] = useState<Lang>('ru');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation
        currentSection={currentSection}
        lang={lang}
        isMenuOpen={isMenuOpen}
        setCurrentSection={setCurrentSection}
        setLang={setLang}
        setIsMenuOpen={setIsMenuOpen}
        content={content}
      />

      <main className="pt-20">
        {currentSection === 'home' && (
          <Home
            lang={lang}
            content={content}
            setCurrentSection={setCurrentSection}
          />
        )}

        {currentSection === 'about' && (
          <About
            lang={lang}
            content={content}
          />
        )}

        {currentSection === 'contacts' && (
          <Contacts
            lang={lang}
            content={content}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;