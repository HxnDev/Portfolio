import { CERTIFICATIONS } from './certifications';

export const SKILL_GROUPS = [
  {
    name: 'Frontend',
    skills: [
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Flowbite',
      'React Router',
      'Mantine',
    ],
  },
  {
    name: 'Backend & data',
    skills: [
      'Java',
      'Go',
      'Node.js',
      'Python',
      'Spring Boot',
      'MongoDB',
      'MySQL',
      'SQL',
      'SQLite',
      'Kafka',
    ],
  },
  {
    name: 'Mobile',
    skills: [
      'React Native',
      'Expo',
      'Flutter',
      'Dart',
      'Firebase Authentication',
      'Cloud Firestore',
      'Firebase Storage',
      'React Native Reanimated',
    ],
  },
  {
    name: 'Cloud & delivery',
    skills: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Git',
      'CI/CD',
      'Google Sheets',
      'Google Drive',
      'Google Apps Script',
      'OAuth 2.0',
      'Vercel',
    ],
  },
];

export const FEATURED_CERTIFICATIONS = [
  'Deep Learning Specialization',
  'AWS Cloud Technical Essentials',
  'Cloud Core',
]
  .map(title => CERTIFICATIONS.find(cert => cert.title === title))
  .filter(Boolean);
