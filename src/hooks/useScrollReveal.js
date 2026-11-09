import { useEffect } from 'react';

// Progressive enhancement: content remains visible if observers are unavailable.
export default function useScrollReveal(route) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;
    function setup() {
      observer?.disconnect();
      document
        .querySelectorAll('[data-reveal]')
        .forEach(node => node.classList.remove('reveal-pending'));
      if (media.matches) return;
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('reveal-pending');
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.08 }
      );
      document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(node => {
        // Never hide content already in view or currently focused.
        if (
          node.getBoundingClientRect().top < window.innerHeight ||
          node.contains(document.activeElement)
        )
          return;
        node.classList.add('reveal-pending');
        observer.observe(node);
      });
    }
    setup();
    media.addEventListener('change', setup);
    return () => {
      observer?.disconnect();
      media.removeEventListener('change', setup);
      document
        .querySelectorAll('.reveal-pending')
        .forEach(node => node.classList.remove('reveal-pending'));
    };
  }, [route]);
}
