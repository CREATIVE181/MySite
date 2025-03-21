import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-red-500/20 py-4 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} CREATIVE_tg1
    </footer>
  );
};