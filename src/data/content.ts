import { Content } from '../types';

export const content: Record<'ru' | 'en', Content> = {
  ru: {
    position: 'Junior Python Developer (Backend / Fullstack)',
    description: 'Разрабатываю веб-приложения, Telegram-ботов и автоматизирую процессы. Быстро учусь и стремлюсь к развитию.',
    about: 'О себе',
    contacts: 'Контакты',
    skills: 'Навыки',
    experience: 'Опыт работы',
    education: 'Образование',
    hobbies: 'Хобби',
    languages: 'Языки',
    skillsList: [
      'FastAPI', 'PostgreSQL', 'MongoDB', 'SQLAlchemy', 'Git', 'Docker', 
      'Linux (Ubuntu)', 'React (базовый)', 'Selenium', 'Pytest', 'Jenkins (базовый)'
    ],
    experienceList: [
      {
        company: 'Яндекс',
        position: 'Эксперт разметки данных для беспилотных авто (ML, нейросети)'
      },
      {
        company: 'Фриланс',
        position: 'Разработка веб-приложений, REST API, автоматизация тестирования, парсинг данных, Telegram-боты'
      },
      {
        company: 'Российская таможенная академия',
        position: 'Системный администратор, администратор 1С'
      }
    ],
    educationText: 'Бакалавр, "Таможенное дело, Прикладная информатика" (выпуск 2025)',
    hobbiesList: ['Роллер спорт (фристайл, спидскейтинг)', 'эндуро', 'вейкбординг'],
    languagesList: ['Русский', 'Английский (A2)']
  },
  en: {
    position: 'Junior Python Developer (Backend / Fullstack)',
    description: 'I develop web applications, Telegram bots and automate processes. Fast learner and eager to grow.',
    about: 'About',
    contacts: 'Contacts',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    hobbies: 'Hobbies',
    languages: 'Languages',
    skillsList: [
      'FastAPI', 'PostgreSQL', 'MongoDB', 'SQLAlchemy', 'Git', 'Docker', 
      'Linux (Ubuntu)', 'React (basic)', 'Selenium', 'Pytest', 'Jenkins (basic)'
    ],
    experienceList: [
      {
        company: 'Yandex',
        position: 'Data Markup Expert for Self-Driving Cars (ML, Neural Networks)'
      },
      {
        company: 'Freelance',
        position: 'Web Applications, REST API, Test Automation, Data Parsing, Telegram Bots'
      },
      {
        company: 'Russian Customs Academy',
        position: 'System Administrator, 1C Administrator'
      }
    ],
    educationText: 'Bachelor\'s Degree, "Customs Affairs, Applied Informatics" (Class of 2025)',
    hobbiesList: ['Roller Sports (Freestyle, Speed Skating)', 'Enduro', 'Wakeboarding'],
    languagesList: ['Russian', 'English (A2)']
  }
};