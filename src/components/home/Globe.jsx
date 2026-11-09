import { useEffect, useRef, useState } from 'react';
import { IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react';
// Natural Earth 1:110m land outlines (public domain), rounded to two decimals.
import LAND from '../../data/globe-land.json';

export default function Globe() {
  const canvas = useRef(null);
  const orientation = useRef(-0.2);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const node = canvas.current;
    const context = node.getContext('2d');
    if (!context) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0,
      last = 0,
      angle = orientation.current,
      visible = false,
      size = 0;
    let targetX = 0,
      targetY = 0,
      pointerX = 0,
      pointerY = 0;
    let dark = document.documentElement.dataset.theme !== 'light';
    const project = (longitude, latitude, rotation) => {
      const lon = (longitude * Math.PI) / 180 + rotation;
      const lat = (latitude * Math.PI) / 180;
      const x = Math.cos(lat) * Math.sin(lon);
      const y = -Math.sin(lat);
      const z = Math.cos(lat) * Math.cos(lon);
      return [size / 2 + x * size * 0.37, size / 2 + (y * 0.98 + z * 0.15) * size * 0.37, z];
    };
    const draw = () => {
      context.clearRect(0, 0, size, size);
      const rotation = angle + pointerX;
      const line = (points, color, width = 0.7) => {
        context.strokeStyle = color;
        context.lineWidth = width;
        context.beginPath();
        let started = false;
        points.forEach(([lon, lat]) => {
          const [x, y, z] = project(lon, lat + pointerY, rotation);
          if (z < -0.05) {
            started = false;
            return;
          }
          if (started) context.lineTo(x, y);
          else context.moveTo(x, y);
          started = true;
        });
        context.stroke();
      };
      const grid = dark ? 'rgba(173,164,210,.24)' : 'rgba(100,89,141,.23)';
      for (let lat = -75; lat <= 75; lat += 15)
        line(
          Array.from({ length: 121 }, (_, i) => [i * 3 - 180, lat]),
          grid
        );
      for (let lon = -180; lon < 180; lon += 15)
        line(
          Array.from({ length: 61 }, (_, i) => [lon, i * 3 - 90]),
          grid
        );
      LAND.forEach(points =>
        line(points, dark ? 'rgba(197,187,236,.8)' : 'rgba(94,78,144,.75)', 1.25)
      );
      context.strokeStyle = grid;
      context.beginPath();
      context.arc(size / 2, size / 2, size * 0.37, 0, Math.PI * 2);
      context.stroke();
      context.save();
      context.translate(size / 2, size / 2);
      context.rotate(-0.38);
      context.strokeStyle = dark ? 'rgba(193,175,245,.55)' : 'rgba(111,86,174,.5)';
      context.beginPath();
      context.ellipse(0, 0, size * 0.47, size * 0.15, 0, 0, Math.PI * 2);
      context.stroke();
      context.restore();
      [
        [6, 46],
        [-74, 40],
        [73, 33],
        [139, 36],
        [18, -33],
      ].forEach(([lon, lat]) => {
        const [x, y, z] = project(lon, lat, rotation);
        if (z < 0) return;
        context.fillStyle = dark ? '#c3b1f5' : '#7960b5';
        context.beginPath();
        context.arc(x, y, 3, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = dark ? 'rgba(195,177,245,.25)' : 'rgba(121,96,181,.2)';
        context.beginPath();
        context.arc(x, y, 7, 0, Math.PI * 2);
        context.stroke();
      });
    };
    const tick = time => {
      if (time - last >= 33) {
        angle += Math.min(time - last, 50) * 0.000045;
        pointerX += (targetX - pointerX) * 0.06;
        pointerY += (targetY - pointerY) * 0.06;
        last = time;
        draw();
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      setReduced(media.matches);
      draw();
      if (visible && !document.hidden && !media.matches && !paused) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };
    const resize = new ResizeObserver(entries => {
      size = entries[0].contentRect.width;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      node.width = Math.round(size * dpr);
      node.height = Math.round(size * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    });
    resize.observe(node);
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    });
    observer.observe(node);
    const theme = new MutationObserver(() => {
      dark = document.documentElement.dataset.theme !== 'light';
      draw();
    });
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const pointer = event => {
      const rect = node.getBoundingClientRect();
      targetX = ((event.clientX - rect.left - rect.width / 2) / rect.width) * 0.6;
      targetY = ((event.clientY - rect.top - rect.height / 2) / rect.height) * 6;
    };
    const reset = () => {
      targetX = 0;
      targetY = 0;
    };
    node.addEventListener('pointermove', pointer);
    node.addEventListener('pointerleave', reset);
    media.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => {
      orientation.current = angle;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      theme.disconnect();
      node.removeEventListener('pointermove', pointer);
      node.removeEventListener('pointerleave', reset);
      media.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, [paused]);
  return (
    <div className="globe-wrap">
      <canvas
        ref={canvas}
        className="globe"
        role="img"
        aria-label="A wireframe globe connecting places around the world"
      />
      {!reduced && (
        <button
          className="globe-control"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? 'Play globe animation' : 'Pause globe animation'}
        >
          {paused ? <IconPlayerPlay size={13} /> : <IconPlayerPause size={13} />}
          <span>{paused ? 'Play' : 'Pause'}</span>
        </button>
      )}
    </div>
  );
}
