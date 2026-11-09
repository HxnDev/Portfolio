import { cloneElement, useLayoutEffect, useRef } from 'react';

/** @param {{children: import('react').ReactElement<any>}} props */
export default function Reveal({ children }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;
    const setup = () => {
      observer?.disconnect();
      node.classList.remove('reveal-pending', 'revealed');
      if (media.matches) return;
      node.classList.add('reveal-pending');
      observer = new IntersectionObserver(
        entries => {
          if (!entries[0].isIntersecting) return;
          node.classList.remove('reveal-pending');
          node.classList.add('revealed');
          observer.disconnect();
        },
        { threshold: 0, rootMargin: '0px 0px -55px 0px' }
      );
      observer.observe(node);
    };
    setup();
    media.addEventListener('change', setup);
    return () => {
      observer?.disconnect();
      media.removeEventListener('change', setup);
    };
  }, []);
  return cloneElement(children, { ref, 'data-reveal': true });
}
