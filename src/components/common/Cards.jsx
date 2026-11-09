import {
  IconArrowUpRight,
  IconCertificate,
  IconCode,
  IconCpu,
  IconSchool,
  IconQuote,
} from '@tabler/icons-react';

export function ExperienceCard({ experience, index = 0, full = false }) {
  const Icon = [IconCpu, IconSchool, IconCode][index % 3];
  const summaries = [
    'Robotics interfaces, real-time data and reusable components.',
    'Research platforms and cloud data infrastructure.',
    'Microservices, delivery pipelines and team leadership.',
  ];
  const tags = [
    ['React', 'TypeScript', 'Go'],
    ['React', 'AWS', 'APIs'],
    ['Java', 'Kafka', 'AWS'],
  ];
  return (
    <article className="card experience-card" data-reveal>
      <span className="icon-tile">
        <Icon size={25} stroke={1.5} />
      </span>
      <h3>{experience.role}</h3>
      <p className="company">{experience.company}</p>
      {full ? (
        <>
          <p className="meta">
            {experience.date} · {experience.location}
          </p>
          <ul>
            {experience.points.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="muted">{summaries[index]}</p>
      )}
      {!full && (
        <div className="tags">
          {tags[index].map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </article>
  );
}

export function RecommendationCard({ recommendation, excerpt = '' }) {
  const initials = recommendation.name
    .split(' ')
    .slice(0, 2)
    .map(word => word[0])
    .join('');
  return (
    <figure className="card quote-card" data-reveal>
      <IconQuote className="quote-mark" size={25} stroke={1.5} aria-hidden="true" />
      <blockquote>{excerpt || recommendation.quote}</blockquote>
      <figcaption>
        <span className="avatar">{initials}</span>
        <div>
          <strong>{recommendation.name}</strong>
          <span className="meta">{recommendation.title}</span>
          {!excerpt && <span className="meta">{recommendation.relation}</span>}
        </div>
      </figcaption>
    </figure>
  );
}

export function CertificationCard({ certification }) {
  const Tag = certification.url ? 'a' : 'article';
  const props = certification.url
    ? { href: certification.url, target: '_blank', rel: 'noreferrer' }
    : {};
  return (
    <Tag {...props} className="card credential-card" data-reveal>
      <span className="icon-tile">
        <IconCertificate size={24} stroke={1.5} />
      </span>
      <div>
        <h3>{certification.title}</h3>
        <p className="meta">
          {certification.issuer} · {certification.date}
        </p>
      </div>
      {certification.url && (
        <IconArrowUpRight size={18} className="credential-arrow" aria-hidden="true" />
      )}
    </Tag>
  );
}
