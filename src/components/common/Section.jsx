import { Link } from 'react-router-dom';
import { IconArrowUpRight } from '@tabler/icons-react';
import Reveal from './Reveal';

export function MoreLink({ to, children }) {
  return (
    <Link className="more-link" to={to}>
      {children}
      <IconArrowUpRight size={17} />
    </Link>
  );
}

export default function Section({
  id,
  title,
  eyebrow = '',
  children,
  to = '',
  linkLabel = '',
  className = '',
}) {
  return (
    <section
      id={id}
      tabIndex={-1}
      className={'section-band ' + className}
      aria-labelledby={`${id}-title`}
    >
      <div className="container section-inner">
        <Reveal>
          <div className="section-heading">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 id={`${id}-title`}>{title}</h2>
          </div>
        </Reveal>
        {children}
        {to && <MoreLink to={to}>{linkLabel}</MoreLink>}
      </div>
    </section>
  );
}
