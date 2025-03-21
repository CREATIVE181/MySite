import React from 'react';
import { MessageCircle, Github } from 'lucide-react';
import { Lang } from '../../types';

interface ContactsProps {
  lang: Lang;
  content: any;
}

export const Contacts: React.FC<ContactsProps> = ({ lang, content }) => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
          {content[lang].contacts}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <a 
            href="https://t.me/CREATIVE_tg1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-6 bg-gray-900/50 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all hover:-translate-y-1"
          >
            <MessageCircle size={32} className="text-red-500" />
            <span>Telegram</span>
          </a>
          <a 
            href="https://github.com/CREATIVE181"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-6 bg-gray-900/50 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:-translate-y-1"
          >
            <Github size={32} className="text-yellow-500" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};