import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconArrowUpRight, IconQuote, IconTerminal2 } from '@tabler/icons-react';
import CinematicStage from '@/components/home/CinematicStage';
import ProjectCard from '@/components/projects/ProjectCard';
import Marquee from '@/components/common/Marquee';
import { useGetProjects } from '@/hooks/useGetProjects';
import { MARQUEE_TECH } from '@/data/skills';
import { RECOMMENDATIONS } from '@/data/recommendations';

const Home = () => {
  const navigate = useNavigate();
  const { projects } = useGetProjects();

  const featured = useMemo(() => projects.filter(p => p.featured).slice(0, 6), [projects]);
  const voices = useMemo(() => RECOMMENDATIONS.slice(0, 3), []);

  const openProject = project => {
    navigate(`/projects?project=${project.id}`);
  };

  return (
    <>
      <CinematicStage />

      <Marquee items={MARQUEE_TECH} />

      {/* Featured work */}
      <section className="section container">
        <div className="section-head">
          <div>
            <span className="section-index" data-reveal>
              Selected work
            </span>
            <h2 className="section-title" data-reveal data-reveal-delay={80}>
              Featured projects
            </h2>
          </div>
          <Link to="/projects" className="btn btn--ghost" data-reveal data-reveal-delay={120}>
            <span>All projects</span>
            <IconArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={openProject} />
          ))}
        </div>
      </section>

      {/* Terminal teaser */}
      <section className="section container">
        <Link to="/terminal" className="term-cta" data-reveal aria-label="Open the interactive terminal">
          <div className="term-cta__demo" aria-hidden="true">
            <div className="term-cta__bar">
              <span className="term-cta__dot term-cta__dot--r" />
              <span className="term-cta__dot term-cta__dot--y" />
              <span className="term-cta__dot term-cta__dot--g" />
              <span className="term-cta__file">guest@hxndev — zsh</span>
            </div>
            <div className="term-cta__lines">
              <p><span className="term-cta__prompt">$</span> sudo hire-me</p>
              <p className="term-cta__ok">[sudo] permission granted — excellent decision.</p>
              <p><span className="term-cta__prompt">$</span> <span className="term-cta__caret" /></p>
            </div>
          </div>
          <div className="term-cta__copy">
            <span className="section-index">Prefer the keyboard?</span>
            <h2 className="term-cta__title display">
              This site has a real, <span className="gradient-text">working shell.</span>
            </h2>
            <p className="term-cta__sub">
              Browse projects, check skills, download the résumé — all from a terminal. Tab
              completion and command history included.
            </p>
            <span className="btn btn--primary term-cta__btn">
              <IconTerminal2 size={18} />
              <span>Launch terminal</span>
            </span>
          </div>
        </Link>
      </section>

      {/* Voices */}
      <section className="section container">
        <div className="section-head">
          <div>
            <span className="section-index" data-reveal>
              Voices
            </span>
            <h2 className="section-title" data-reveal data-reveal-delay={80}>
              What colleagues say
            </h2>
          </div>
          <Link to="/recommendations" className="btn btn--ghost" data-reveal data-reveal-delay={120}>
            <span>All 16 recommendations</span>
            <IconArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid-3">
          {voices.map((rec, i) => (
            <figure className="voice" key={rec.name} data-reveal data-reveal-delay={i * 80}>
              <IconQuote size={26} className="voice__mark" />
              <blockquote className="voice__quote">{rec.quote}</blockquote>
              <figcaption className="voice__who">
                <span className="voice__name">{rec.name}</span>
                <span className="voice__title">{rec.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <style>{`
        .voice {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: clamp(1.4rem, 3vw, 2rem);
          background: var(--bg-elev);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          margin: 0;
          transition: border-color 0.3s ease, transform 0.3s var(--ease-out);
        }
        .voice:hover { border-color: var(--line-strong); transform: translateY(-4px); }
        .voice__mark { color: var(--amber); opacity: 0.8; flex-shrink: 0; }
        .voice__quote {
          margin: 0;
          color: var(--ink-dim);
          font-size: 0.96rem;
          line-height: 1.62;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .voice__who { display: flex; flex-direction: column; gap: 0.15rem; margin-top: auto; }
        .voice__name { font-weight: 600; color: var(--ink); }
        .voice__title { font-family: var(--font-mono); font-size: 0.74rem; color: var(--ink-mute); }

        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.6rem; }
        @media (max-width: 980px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .grid-3 { grid-template-columns: 1fr; } }

        .term-cta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(1.6rem, 4vw, 3.4rem);
          align-items: center;
          padding: clamp(1.6rem, 4vw, 3rem);
          border-radius: var(--radius-lg);
          border: 1px solid var(--line);
          background: var(--bg-elev);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s var(--ease-out);
        }
        .term-cta:hover {
          border-color: var(--cyan);
          box-shadow: 0 24px 70px -30px rgba(91, 233, 255, 0.35);
          transform: translateY(-4px);
        }
        .term-cta__demo {
          border-radius: 14px;
          border: 1px solid var(--line-strong);
          background: rgba(6, 7, 12, 0.9);
          overflow: hidden;
          font-family: var(--font-mono);
          font-size: 0.86rem;
        }
        .term-cta__bar {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.6rem 0.9rem;
          border-bottom: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.02);
        }
        .term-cta__dot { width: 11px; height: 11px; border-radius: 50%; }
        .term-cta__dot--r { background: #ff5f57; }
        .term-cta__dot--y { background: #febc2e; }
        .term-cta__dot--g { background: #28c840; }
        .term-cta__file { margin-left: 0.5rem; font-size: 0.7rem; color: var(--ink-mute); }
        .term-cta__lines { padding: 1.1rem 1.2rem 1.3rem; line-height: 2; }
        .term-cta__lines p { margin: 0; color: var(--ink-dim); }
        .term-cta__prompt { color: var(--amber); margin-right: 0.5rem; }
        .term-cta__ok { color: var(--amber); }
        .term-cta__caret {
          display: inline-block;
          width: 0.55em;
          height: 1.05em;
          vertical-align: text-bottom;
          background: var(--cyan);
          animation: term-cta-blink 0.9s steps(1) infinite;
        }
        @keyframes term-cta-blink { 50% { opacity: 0; } }
        .term-cta__copy {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          align-items: flex-start;
        }
        .term-cta__title { font-size: clamp(1.5rem, 3.4vw, 2.3rem); margin: 0; line-height: 1.12; }
        .term-cta__sub { color: var(--ink-dim); line-height: 1.65; margin: 0; max-width: 42ch; }
        .term-cta__btn { margin-top: 0.4rem; pointer-events: none; }
        @media (max-width: 860px) {
          .term-cta { grid-template-columns: 1fr; }
          .term-cta__demo { order: 2; }
        }
        @media (prefers-reduced-motion: reduce) {
          .term-cta__caret { animation: none; }
        }
      `}</style>
    </>
  );
};

export default Home;
