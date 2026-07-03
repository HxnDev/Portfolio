import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Each step lands with a small random delay so the boot feels real.
const STEPS = [
  { text: 'loading design tokens', ms: 260 },
  { text: 'compiling GLSL shaders', ms: 340 },
  { text: 'waking the 3D world', ms: 380 },
  { text: 'calibrating cursor physics', ms: 300 },
  { text: 'fueling the rocket', ms: 260 },
];

/**
 * Terminal boot intro: a small shell window runs through a fake boot log,
 * then the curtain splits away to reveal the site. Calls onDone when finished.
 */
const Preloader = ({ onDone }) => {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timer;

    const advance = i => {
      if (cancelled) return;
      if (i > STEPS.length) {
        timer = setTimeout(() => !cancelled && setDone(true), 620);
        return;
      }
      setStep(i);
      const wait = i < STEPS.length ? STEPS[i].ms + Math.random() * 120 : 420;
      timer = setTimeout(() => advance(i + 1), wait);
    };

    timer = setTimeout(() => advance(1), 420);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  const booted = step > STEPS.length - 1 && step !== 0;
  const pct = Math.min(100, Math.round((step / STEPS.length) * 100));

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!done && (
        <motion.div className="preloader" initial={{ opacity: 1 }} exit={{ opacity: 1 }}>
          <motion.div
            className="preloader__panel"
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: 'top' }}
          />
          <motion.div
            className="preloader__term"
            exit={{ opacity: 0, y: -18, transition: { duration: 0.3 } }}
          >
            <div className="preloader__bar">
              <span className="preloader__dot preloader__dot--r" />
              <span className="preloader__dot preloader__dot--y" />
              <span className="preloader__dot preloader__dot--g" />
              <span className="preloader__title">hxndev — zsh</span>
              <span className="preloader__pct">{pct}%</span>
            </div>
            <div className="preloader__body">
              <p className="preloader__line">
                <span className="preloader__prompt">$</span> npx hxndev@latest boot
              </p>
              {STEPS.slice(0, step).map((s, i) => (
                <motion.p
                  key={s.text}
                  className="preloader__line"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <span className="preloader__mark">◆</span> {s.text}
                  <span className="preloader__ok">
                    {i < step - 1 || booted ? ' ok' : ' …'}
                  </span>
                </motion.p>
              ))}
              {booted && (
                <motion.p
                  className="preloader__line preloader__ready"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✔ ready — welcome to hxndev.com
                </motion.p>
              )}
              <p className="preloader__line">
                <span className="preloader__prompt">$</span>
                <span className="preloader__caret" />
              </p>
            </div>
          </motion.div>

          <style>{`
            .preloader {
              position: fixed;
              inset: 0;
              z-index: 100000;
              display: grid;
              place-items: center;
              overflow: hidden;
            }
            .preloader__panel {
              position: absolute;
              inset: 0;
              background: var(--bg);
            }
            .preloader__term {
              position: relative;
              z-index: 1;
              width: min(92vw, 520px);
              border-radius: 14px;
              border: 1px solid var(--line-strong);
              background: rgba(10, 12, 20, 0.85);
              box-shadow: 0 30px 90px -30px rgba(0, 0, 0, 0.9), 0 0 60px rgba(91, 233, 255, 0.06);
              overflow: hidden;
              font-family: var(--font-mono);
            }
            .preloader__bar {
              display: flex;
              align-items: center;
              gap: 0.45rem;
              padding: 0.65rem 0.9rem;
              border-bottom: 1px solid var(--line);
              background: rgba(255, 255, 255, 0.02);
            }
            .preloader__dot { width: 11px; height: 11px; border-radius: 50%; }
            .preloader__dot--r { background: #ff5f57; }
            .preloader__dot--y { background: #febc2e; }
            .preloader__dot--g { background: #28c840; }
            .preloader__title {
              margin-left: 0.6rem;
              font-size: 0.72rem;
              color: var(--ink-mute);
              letter-spacing: 0.04em;
            }
            .preloader__pct {
              margin-left: auto;
              font-size: 0.72rem;
              color: var(--cyan);
            }
            .preloader__body {
              padding: 1.1rem 1.2rem 1.3rem;
              min-height: 218px;
              font-size: 0.84rem;
              line-height: 1.9;
            }
            .preloader__line { color: var(--ink-dim); margin: 0; }
            .preloader__prompt { color: var(--amber); margin-right: 0.55rem; }
            .preloader__mark { color: var(--cyan); margin-right: 0.35rem; }
            .preloader__ok { color: var(--amber); }
            .preloader__ready { color: var(--ink); }
            .preloader__caret {
              display: inline-block;
              width: 0.55em;
              height: 1.05em;
              margin-left: 0.15em;
              vertical-align: text-bottom;
              background: var(--cyan);
              animation: caret-blink 0.9s steps(1) infinite;
            }
            @keyframes caret-blink {
              50% { opacity: 0; }
            }
            @media (prefers-reduced-motion: reduce) {
              .preloader__caret { animation: none; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
