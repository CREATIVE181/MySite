import React from "react";
import { Lang } from "../../types";

interface HomeProps {
  lang: Lang;
  content: any;
  setCurrentSection: (section: "home" | "about" | "contacts") => void;
}

export const Home: React.FC<HomeProps> = ({ lang, content, setCurrentSection }) => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-8 group">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-red-500 to-yellow-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop"
          alt="Profile"
          className="w-32 h-32 sm:w-48 sm:h-48 rounded-full relative z-10 border-4 border-red-500"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent h-[70px]">
        CREATIVE_tg1
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 px-4">
        {content[lang].position}
      </h2>
      <p className="max-w-2xl text-sm sm:text-base text-gray-400 mb-8 px-4">
        {content[lang].description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
        <button
          onClick={() => setCurrentSection("about")}
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-full hover:from-red-500 hover:to-red-400 transition-colors"
        >
          {content[lang].about}
        </button>
        <button
          onClick={() => setCurrentSection("contacts")}
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full hover:from-yellow-500 hover:to-yellow-400 transition-colors"
        >
          {content[lang].contacts}
        </button>
      </div>
    </div>
  );
};
