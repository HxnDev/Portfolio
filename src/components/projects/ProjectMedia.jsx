import { useEffect, useRef, useState } from 'react';
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconDeviceMobile,
  IconBrowser,
} from '@tabler/icons-react';

/** @param {{project: {title: string, media?: {src?: string, kind?: string, orientation?: string, poster?: string}}}} props */
export default function ProjectMedia({ project }) {
  const media = project.media || {};
  const portrait = media.orientation === 'portrait';
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);
  const stage = useRef(null);
  const video = useRef(null);
  const isGif = media.kind === 'gif' || /\.gif(?:$|\?)/i.test(media.src || '');
  useEffect(() => {
    setActive(false);
    setFailed(false);
  }, [media.src]);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const pause = () => {
      video.current?.pause();
      setActive(false);
    };
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) pause();
    });
    observer.observe(stage.current);
    const visibility = () => {
      if (document.hidden) pause();
    };
    document.addEventListener('visibilitychange', visibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', visibility);
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
            isGif ? (
              <>
                {active ? (
                  <img
                    className="recording-content"
                    src={media.src}
                    alt={`${project.title} screen recording`}
                    onError={() => setFailed(true)}
                  />
                ) : (
                  <div className="recording-placeholder">
                    {media.poster && (
                      <img className="recording-content" src={media.poster} alt="" />
                    )}
                    {!media.poster && <strong>{project.title}</strong>}
                  </div>
                )}
              </>
            ) : (
              <video
                ref={video}
                className="recording-content"
                controls
                playsInline
                muted
                loop
                preload="none"
                poster={media.poster}
                aria-label={`${project.title} screen recording`}
                onError={() => setFailed(true)}
              >
                <source src={media.src} />
              </video>
            )
          ) : (
            <div className="recording-placeholder">
              <span className="recording-app-icon">
                {portrait ? (
                  <IconDeviceMobile size={25} stroke={1.2} />
                ) : (
                  <IconBrowser size={25} stroke={1.2} />
                )}
              </span>
              <strong>{project.title}</strong>
              <span>{failed ? 'Preview unavailable' : 'Screen recording coming soon'}</span>
              <div className="recording-wireframe" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          )}
        </div>
      </div>
      {isGif && media.src && !failed && (
        <button
          className="recording-pause"
          aria-label={`${active ? 'Pause' : 'Play'} ${project.title} recording`}
          onClick={() => setActive(!active)}
        >
          {active ? <IconPlayerPause size={14} /> : <IconPlayerPlay size={14} />}
          {active ? 'Pause preview' : 'Play preview'}
        </button>
      )}
      {!isGif && media.src && !failed && (
        <a className="recording-open" href={media.src} target="_blank" rel="noreferrer">
          Open full size ↗<span className="sr-only"> {project.title} recording</span>
        </a>
      )}
      <span className="recording-format">{portrait ? 'Mobile app' : 'Desktop app'}</span>
    </div>
  );
}
