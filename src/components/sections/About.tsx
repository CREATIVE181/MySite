import React from 'react';
import { Flame } from 'lucide-react';
import { Lang } from '../../types';

interface AboutProps {
  lang: Lang;
  content: any;
}

export const About: React.FC<AboutProps> = ({ lang, content }) => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
            <Flame className="text-red-500" />
            {content[lang].skills}
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {content[lang].skillsList.map((skill: string, index: number) => (
              <span 
                key={index}
                className="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500/10 rounded-full border border-red-500/20 hover:bg-red-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{content[lang].experience}</h2>
          <div className="space-y-4 sm:space-y-6">
            {content[lang].experienceList.map((exp: { company: string; position: string }, index: number) => (
              <div 
                key={index}
                className="p-4 sm:p-6 bg-gray-900/50 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-bold text-red-500 mb-2">{exp.company}</h3>
                <p className="text-sm sm:text-base text-gray-400">{exp.position}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{content[lang].education}</h2>
          <p className="text-sm sm:text-base text-gray-400">{content[lang].educationText}</p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{content[lang].hobbies}</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {content[lang].hobbiesList.map((hobby: string, index: number) => (
              <span 
                key={index}
                className="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-500/10 rounded-full border border-yellow-500/20 hover:bg-yellow-500/20 transition-colors"
              >
                {hobby}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{content[lang].languages}</h2>
          <div className="flex flex-wrap gap-3">
            {content[lang].languagesList.map((language: string, index: number) => (
              <span 
                key={index}
                className="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 rounded-full"
              >
                {language}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};