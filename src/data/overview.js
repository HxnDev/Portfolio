import { CERTIFICATIONS } from './certifications';

export const SKILL_GROUPS = [
  { name: 'Frontend', skills: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { name: 'Backend', skills: ['Java', 'Go', 'Node.js', 'Python', 'Rust', 'Spring Boot'] },
  { name: 'Cloud', skills: ['AWS', 'Docker', 'Kubernetes', 'Git'] },
  { name: 'Engineering', skills: ['Testing', 'CI/CD', 'System design'] },
];

export const FEATURED_CERTIFICATIONS = [
  'Deep Learning Specialization',
  'AWS Cloud Technical Essentials',
  'Cloud Core',
]
  .map(title => CERTIFICATIONS.find(cert => cert.title === title))
  .filter(Boolean);
