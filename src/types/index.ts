export type Lang = 'ru' | 'en';

export interface Experience {
  company: string;
  position: string;
}

export interface Content {
  position: string;
  description: string;
  about: string;
  contacts: string;
  skills: string;
  experience: string;
  education: string;
  hobbies: string;
  languages: string;
  skillsList: string[];
  experienceList: Experience[];
  educationText: string;
  hobbiesList: string[];
  languagesList: string[];
}