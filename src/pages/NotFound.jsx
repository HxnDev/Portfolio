import { Link, useLocation } from 'react-router-dom';
import { IconHome, IconBriefcase, IconMail } from '@tabler/icons-react';
import Magnetic from '@/components/core/Magnetic';
import { useUIMode } from '@/components/core/uiModeContext';

const NotFound = () => {
  const { pathname } = useLocation();
  const { recruiter } = useUIMode();

  return (
    <section className="nf">
      <div className="container nf__inner">
        <p className="eyebrow" data-reveal>
          Error 404 — lost in the aurora
        </p>
        <h1 className="nf__code display" data-reveal aria-hidden="true">
          4<span className="nf__orb" />4
        </h1>
        <h2 className="nf__title display" data-reveal>
          This page drifted <span className="gradient-text--aurora">off orbit.</span>
        </h2>
        <p className="nf__sub" data-reveal>
          <code className="nf__path">{pathname}</code> doesn&rsquo;t exist — or it got caught in play
          mode and never came back. Either way, the good stuff is this way.
        </p>
        <div className="nf__actions" data-reveal>
          <Magnetic strength={0.35}>
            <Link to="/" className="btn btn--primary btn--lg">
              <span>Back home</span>
              <IconHome size={18} />
            </Link>
          </Magnetic>
          <Link to="/projects" className="btn btn--ghost btn--lg">
            <span>See the work</span>
            <IconBriefcase size={18} />
          </Link>
          <Link to="/contact" className="btn btn--ghost btn--lg">
            <span>Say hello</span>
            <IconMail size={18} />
          </Link>
        </div>
        {!recruiter && (
          <p className="nf__hint" data-reveal>
            Pro tip: type <kbd>play</kbd> anywhere to turn this site into a game.
          </p>
        )}
      </div>

      <style>{`
        .nf {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .nf__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.1rem;
          padding-block: 8rem 5rem;
        }
        .nf__code {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: clamp(6rem, 22vw, 13rem);
          line-height: 0.9;
          letter-spacing: -0.05em;
          background: var(--grad-aurora);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          margin: 0;
        }
        .nf__orb {
          width: clamp(4.4rem, 15vw, 9rem);
          height: clamp(4.4rem, 15vw, 9rem);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #fff, var(--cyan) 45%, rgba(91,233,255,0.05) 72%);
          box-shadow: 0 0 70px rgba(91, 233, 255, 0.5);
          animation: nf-drift 5s ease-in-out infinite;
        }
        @keyframes nf-drift {
          0%, 100% { transform: translateY(-6%) scale(1); }
          50% { transform: translateY(6%) scale(1.05); }
        }
        .nf__title {
          font-size: clamp(1.6rem, 4.5vw, 2.6rem);
          margin: 0;
        }
        .nf__sub {
          max-width: 46ch;
          color: var(--ink-dim);
          line-height: 1.65;
        }
        .nf__path {
          font-family: var(--font-mono);
          font-size: 0.86em;
          color: var(--amber);
          background: rgba(255, 184, 77, 0.08);
          border: 1px solid rgba(255, 184, 77, 0.25);
          border-radius: 8px;
          padding: 0.1rem 0.5rem;
        }
        .nf__actions {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.8rem;
        }
        .nf__hint {
          margin-top: 1.4rem;
          font-size: 0.85rem;
          color: var(--ink-mute);
          font-family: var(--font-mono);
        }
        .nf__hint kbd {
          padding: 0.12rem 0.45rem;
          border-radius: 6px;
          border: 1px solid var(--line-strong);
          background: rgba(255, 255, 255, 0.04);
          color: var(--cyan);
        }
        @media (prefers-reduced-motion: reduce) {
          .nf__orb { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default NotFound;
