import { Link } from 'react-router-dom';
import { IconArrowUpRight } from '@tabler/icons-react';

export function MoreLink({ to, children }) {
  return (
    <Link className="more-link" to={to}>
      {children}
      <IconArrowUpRight size={17} />
    </Link>
  );
}

export default function Section({ id, title, eyebrow = '', children, to = '', linkLabel = '' }) {
  return (
    <section id={id} tabIndex={-1} className="container section" aria-labelledby={`${id}-title`}>
      <div className="section-heading" data-reveal>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      {children}
      {to && <MoreLink to={to}>{linkLabel}</MoreLink>}
    </section>
  );
}
