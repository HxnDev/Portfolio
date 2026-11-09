import { useEffect, useRef, useState } from 'react';

/** @param {{project: {title: string, media?: {src?: string, kind?: string, orientation?: string, poster?: string}}}} props */
export default function ProjectMedia({ project }) {
  const media = project.media || {};
  const portrait = media.orientation === 'portrait';
  const stage = useRef(null);
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const update = () => setActive(visible && !document.hidden && !preference.matches);
    const observer = new IntersectionObserver(
      entries => {
        visible = entries[0].isIntersecting;
        update();
      },
      { rootMargin: '80px' }
    );
    observer.observe(stage.current);
    preference.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);
  return (
    <div className="project-media" ref={stage}>
      <div className={'recording-device ' + (portrait ? 'recording-phone' : 'recording-browser')}>
        <div className="recording-chrome" aria-hidden="true">
          {portrait ? (
            <span />
          ) : (
            <>
              <i />
              <i />
              <i />
              <span>{project.title}</span>
            </>
          )}
        </div>
        <div className="recording-screen">
          {media.src && !failed ? (
            <img
              className="recording-content"
              src={active ? media.src : media.poster}
              alt={`${project.title} interface preview`}
              decoding="async"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="recording-placeholder">
              <strong>{project.title}</strong>
              <span>Preview unavailable</span>
            </div>
          )}
        </div>
      </div>
      <span className="recording-format">{portrait ? 'Mobile app' : 'Desktop app'}</span>
    </div>
  );
}
