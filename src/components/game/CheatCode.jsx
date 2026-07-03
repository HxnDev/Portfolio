import { useEffect, useRef, useState } from 'react';
import { useGame } from '@/components/game/gameContext';

const WORD = 'play';

/**
 * Dead-simple cheat code: type "play" anywhere (outside an input)
 * and the rocket game launches with a toast.
 */
const CheatCode = () => {
  const [unlocked, setUnlocked] = useState(false);
  const pos = useRef(0);
  const { start } = useGame();

  useEffect(() => {
    const onKey = e => {
      // Ignore while typing in inputs or the command palette.
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.metaKey || e.ctrlKey || e.altKey) return;

      const key = e.key.toLowerCase();
      if (key === WORD[pos.current]) {
        pos.current += 1;
        if (pos.current === WORD.length) {
          pos.current = 0;
          setUnlocked(true);
          start();
          setTimeout(() => setUnlocked(false), 4200);
        }
      } else {
        pos.current = key === WORD[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [start]);

  if (!unlocked) return null;

  return (
    <div className="cheat" role="status">
      <span className="cheat__code">P·L·A·Y</span>
      <span>Cheat code accepted — rocket fueled. Go catch those orbs.</span>
      <style>{`
        .cheat {
          position: fixed;
          left: 50%;
          bottom: 4.4rem;
          transform: translateX(-50%);
          z-index: 9750;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.75rem 1.25rem;
          border-radius: 99px;
          background: rgba(10, 12, 20, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid var(--amber);
          box-shadow: var(--glow-amber);
          color: var(--ink);
          font-size: 0.9rem;
          white-space: nowrap;
          animation: cheat-in 0.45s var(--ease-out) both;
        }
        .cheat__code {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--amber);
          letter-spacing: 0.08em;
        }
        @keyframes cheat-in {
          from { opacity: 0; transform: translate(-50%, 16px) scale(0.94); }
          to { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        @media (max-width: 640px) {
          .cheat { white-space: normal; width: 88vw; justify-content: center; text-align: center; }
        }
      `}</style>
    </div>
  );
};

export default CheatCode;
