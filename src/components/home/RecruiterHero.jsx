import { Link } from 'react-router-dom';
import { IconDownload, IconMail, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { BIO, STATS } from '@/data/profile';

/**
 * The recruiter-mode hero: everything a hiring manager needs above the fold,
 * zero animation, zero WebGL. Swapped in for the cinematic stage.
 */
const RecruiterHero = () => (
  <section className="rhero container">
    <p className="eyebrow">Senior Full-Stack Engineer — Geneva, CH</p>
    <h1 className="rhero__name display">Hassan Shahzad</h1>
    <p className="rhero__bio">{BIO[0]}</p>

    <div className="rhero__actions">
      <a
        href="/assets/resume/hassan_resume.pdf"
        download="hassan_resume.pdf"
        className="btn btn--primary btn--lg"
      >
        <IconDownload size={18} />
        <span>Download résumé</span>
      </a>
      <Link to="/contact" className="btn btn--ghost btn--lg">
        <IconMail size={18} />
        <span>Contact</span>
      </Link>
      <a
        href="https://www.linkedin.com/in/hassan-shahzad-2a6617212/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--ghost btn--lg"
      >
        <IconBrandLinkedin size={18} />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/HxnDev"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--ghost btn--lg"
      >
        <IconBrandGithub size={18} />
        <span>GitHub</span>
      </a>
    </div>

    <dl className="rhero__stats">
      {STATS.map(s => (
        <div key={s.label} className="rhero__stat">
          <dt className="rhero__label">{s.label}</dt>
          <dd className="rhero__value display">{s.value}</dd>
        </div>
      ))}
    </dl>

    <style>{`
      .rhero {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.2rem;
        padding-block: 10rem 4rem;
      }
      .rhero__name {
        font-size: clamp(2.6rem, 7vw, 4.6rem);
        margin: 0;
        letter-spacing: -0.03em;
      }
      .rhero__bio {
        max-width: 68ch;
        color: var(--ink-dim);
        font-size: 1.05rem;
        line-height: 1.7;
        margin: 0;
      }
      .rhero__actions {
        display: flex;
        gap: 0.7rem;
        flex-wrap: wrap;
        margin-top: 0.4rem;
      }
      .rhero__stats {
        display: grid;
        grid-template-columns: repeat(4, minmax(120px, 1fr));
        gap: 1rem;
        width: 100%;
        margin: 1.6rem 0 0;
        padding: 1.4rem 0 0;
        border-top: 1px solid var(--line);
      }
      .rhero__stat { display: flex; flex-direction: column-reverse; gap: 0.2rem; }
      .rhero__value { font-size: clamp(1.7rem, 4vw, 2.4rem); color: var(--ink); margin: 0; }
      .rhero__label {
        font-family: var(--font-mono);
        font-size: 0.74rem;
        color: var(--ink-mute);
        letter-spacing: 0.06em;
      }
      @media (max-width: 720px) {
        .rhero__stats { grid-template-columns: repeat(2, 1fr); }
      }
    `}</style>
  </section>
);

export default RecruiterHero;
