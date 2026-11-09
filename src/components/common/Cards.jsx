import { IconArrowUpRight, IconCertificate, IconQuote } from '@tabler/icons-react';
import Reveal from './Reveal';

export function ExperienceCard({ experience, index = 0 }) {
  const logos = {
    AICA: 'aica-supplied.png',
    EPFL: 'epfl.svg',
    IBM: 'ibm-blue.svg',
    'Shanghai Zixel': 'zixel.jpeg',
    'Think Vision': 'think-vision.png',
  };
  return (
    <Reveal>
      <article className="card experience-card">
        <div className="experience-top">
          {logos[experience.company] ? (
            <span className="company-logo">
              <img
                src={'/logos/' + logos[experience.company]}
                alt={experience.company}
                width="85"
                height="40"
                loading="lazy"
              />
            </span>
          ) : (
            <strong className="company-wordmark">{experience.company}</strong>
          )}
          <span className="date-chip">{experience.date}</span>
        </div>
        <h3>{experience.role}</h3>
        <p className="company">
          {experience.company}
          <span> · {experience.location}</span>
        </p>
        <ul>
          {experience.points.map(point => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {index < 3 && (
          <div className="tags">
            {[
              ['React', 'TypeScript', 'Go'],
              ['React', 'AWS', 'APIs'],
              ['Java', 'Kafka', 'AWS'],
            ][index].map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </article>
    </Reveal>
  );
}

export function RecommendationCard({ recommendation, excerpt = '' }) {
  const initials = recommendation.name
    .split(' ')
    .slice(0, 2)
    .map(word => word[0])
    .join('');
  return (
    <Reveal>
      <figure className="card quote-card">
        <figcaption>
          <span className="avatar">{initials}</span>
          <div>
            <strong>{recommendation.name}</strong>
            <span className="meta">{recommendation.title}</span>
            <span className="meta">{recommendation.relation}</span>
          </div>
        </figcaption>
        <IconQuote className="quote-mark" size={25} stroke={1.5} aria-hidden="true" />
        <blockquote>{excerpt || recommendation.quote}</blockquote>
      </figure>
    </Reveal>
  );
}

export function CertificationCard({ certification }) {
  const Tag = certification.url ? 'a' : 'article';
  const props = certification.url
    ? { href: certification.url, target: '_blank', rel: 'noreferrer' }
    : {};
  return (
    <Reveal>
      <Tag {...props} className="card credential-card">
        <span className="certificate-label">Certificate of completion</span>
        <span className="icon-tile certificate-seal">
          <IconCertificate size={24} stroke={1.5} />
        </span>
        <div>
          <h3>{certification.title}</h3>
          <p className="meta">
            {certification.issuer} · {certification.date}
          </p>
          <p className="credential-description">{certification.description}</p>
        </div>
        <span className="certificate-signature" aria-hidden="true">
          Hassan Shahzad
        </span>
        {certification.url && (
          <IconArrowUpRight size={18} className="credential-arrow" aria-hidden="true" />
        )}
      </Tag>
    </Reveal>
  );
}

export function EducationCard({ education }) {
  return (
    <Reveal>
      <article className="card education-feature">
        <div className="education-top">
          <h3>{education.degree}</h3>
          <span className="date-chip">{education.date}</span>
        </div>
        <div className="education-school">
          <div className="education-identity">
            <img
              src={'/logos/' + education.logo}
              alt={education.shortName}
              width="86"
              height="55"
              loading="lazy"
            />
          </div>
          <div>
            <p className="muted">{education.school}</p>
            <p className="meta">{education.location}</p>
          </div>
        </div>
        <ul>
          {education.points.map(point => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}
