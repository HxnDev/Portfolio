import { useEffect, useRef } from 'react';

/**
 * A single morphing cursor: a crisp dot that tracks the pointer 1:1 (zero lag),
 * grows into a thin ring over interactive elements, and becomes a labelled disc
 * over elements with `data-cursor-label`. Hidden while a native <dialog> is open
 * (the top layer renders above everything, so we fall back to the system cursor).
 * Disabled on touch / coarse pointers.
 */
const CustomCursor = () => {
  const elRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;

    document.body.classList.add('has-custom-cursor');

    const el = elRef.current;
    const label = labelRef.current;

    const move = e => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    // mouseover bubbles on every element entered, so the current mode is
    // derived purely from the element under the pointer.
    const over = e => {
      const labelEl = e.target.closest('[data-cursor-label]');
      const interactive = e.target.closest('a, button, input, textarea, [data-cursor="hover"]');
      if (labelEl) {
        label.textContent = labelEl.getAttribute('data-cursor-label');
        el.classList.add('is-label');
        el.classList.remove('is-hover');
      } else if (interactive) {
        el.classList.add('is-hover');
        el.classList.remove('is-label');
        label.textContent = '';
      } else {
        el.classList.remove('is-hover', 'is-label');
        label.textContent = '';
      }
    };

    const down = () => el.classList.add('is-down');
    const up = () => el.classList.remove('is-down');
    const leave = () => (el.style.opacity = '0');
    const enter = () => (el.style.opacity = '1');

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, []);

  return (
    <>
      <div ref={elRef} className="cursor" aria-hidden="true">
        <span ref={labelRef} className="cursor__label" />
      </div>
      <style>{`
        .cursor {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 99999;
          display: grid;
          place-items: center;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 14px rgba(91, 233, 255, 0.55);
          pointer-events: none;
          will-change: transform;
          transition:
            width 0.22s var(--ease-out),
            height 0.22s var(--ease-out),
            background 0.22s ease,
            border-color 0.22s ease,
            box-shadow 0.22s ease,
            opacity 0.3s ease;
          border: 1.5px solid transparent;
        }
        .cursor.is-hover {
          width: 34px;
          height: 34px;
          background: rgba(91, 233, 255, 0.08);
          border-color: var(--cyan);
          box-shadow: 0 0 22px rgba(91, 233, 255, 0.3);
        }
        .cursor.is-down {
          scale: 0.8;
        }
        .cursor.is-label {
          width: 78px;
          height: 78px;
          background: var(--cyan);
          border-color: transparent;
          box-shadow: 0 0 34px rgba(91, 233, 255, 0.45);
        }
        .cursor__label {
          font-family: var(--font-mono);
          font-size: 0.64rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #07080d;
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.2s ease, transform 0.2s var(--ease-out);
        }
        .cursor.is-label .cursor__label {
          opacity: 1;
          transform: scale(1);
        }
        /* A native <dialog> top layer paints above everything, so hand the
           pointer back to the OS while one is open. */
        body.dialog-open .cursor { opacity: 0 !important; }
        @media (hover: none), (pointer: coarse) {
          .cursor { display: none; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
