import { useEffect, useRef } from 'react';

// Canvas-only network: precomputed geometry, no 3D framework or permanent render loop.
const RINGS = 18,
  SEGMENTS = 30;
const sphere = Array.from({ length: RINGS + 1 }, (_, ring) =>
  Array.from({ length: SEGMENTS }, (_, segment) => {
    const latitude = (ring / RINGS - 0.5) * Math.PI;
    const longitude = ((segment + (ring % 2) * 0.5) / SEGMENTS) * Math.PI * 2;
    return [
      Math.cos(latitude) * Math.sin(longitude),
      Math.sin(latitude),
      Math.cos(latitude) * Math.cos(longitude),
    ];
  })
);
const particles = Array.from({ length: 58 }, (_, index) => ({
  x: ((index * 79 + 17) % 997) / 997,
  y: ((index * 137 + 83) % 991) / 991,
  phase: index * 1.7,
}));

export default function Globe() {
  const canvas = useRef(null);
  useEffect(() => {
    const node = canvas.current;
    const ctx = node.getContext('2d');
    if (!ctx) return;
    const host = node.parentElement;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0,
      height = 0,
      frame = 0,
      visible = false,
      dark = true;
    let pointerX = 0,
      pointerY = 0,
      targetX = 0,
      targetY = 0,
      scroll = 0;
    let enteredAt = 0,
      intro = 0,
      lastInteraction = 0;
    const paint = now => {
      frame = 0;
      if (!width || !height) return;
      const reduced = media.matches;
      const progress = reduced ? 0 : scroll;
      if (!reduced) {
        pointerX += (targetX - pointerX) * 0.085;
        pointerY += (targetY - pointerY) * 0.085;
      } else {
        pointerX = 0;
        pointerY = 0;
      }
      const elapsed = enteredAt ? Math.min((now - enteredAt) / 4200, 1) : 0;
      intro = reduced ? 1 : 1 - Math.pow(1 - elapsed, 3);
      const rgb = dark ? '224,224,224' : '35,35,35';
      const color = alpha => 'rgba(' + rgb + ',' + alpha + ')';
      ctx.clearRect(0, 0, width, height);
      const drift = reduced ? 0 : intro * 16;
      const dots = particles.map(p => [
        p.x * width + Math.sin(p.phase + intro) * drift + pointerX * (p.x - 0.5) * 20,
        p.y * height + Math.cos(p.phase + intro) * drift - progress * 35 * p.x,
      ]);
      dots.forEach(([x, y], index) => {
        dots.slice(index + 1).forEach(([endX, endY]) => {
          const distance = Math.hypot(x - endX, y - endY);
          const reach = width < 600 ? 140 : 220;
          if (distance > reach) return;
          ctx.strokeStyle = color((1 - distance / reach) * (dark ? 0.21 : 0.18));
          ctx.lineWidth = 0.65;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(endX, endY);
          ctx.stroke();
        });
        ctx.fillStyle = color(0.34);
        ctx.beginPath();
        ctx.arc(x, y, 1.3, 0, Math.PI * 2);
        ctx.fill();
      });
      const mobile = width < 760;
      const radius = mobile ? Math.min(width * 0.4, 190) : Math.min(width * 0.235, height * 0.34);
      const centerX = width * (mobile ? 0.5 : 0.76);
      const centerY = (mobile ? height - radius - 48 : height * 0.48) - progress * 25;
      const rotation = -0.5 + intro * 0.65 + pointerX * 0.65 + progress * 0.85;
      const tilt = -0.15 + pointerY * 0.16;
      /** @param {number[]} point @param {number} [scale] */
      const project = (point, scale = 1) => {
        const [x, y, z] = point;
        const nx = x * Math.cos(rotation) + z * Math.sin(rotation);
        const nz = z * Math.cos(rotation) - x * Math.sin(rotation);
        const ny = y * Math.cos(tilt) - nz * Math.sin(tilt);
        const depth = nz * Math.cos(tilt) + y * Math.sin(tilt);
        return [centerX + nx * radius * scale, centerY + ny * radius * scale, depth];
      };
      const points = sphere.map(ring => ring.map(point => project(point)));
      const glow = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.4,
        0,
        centerX,
        centerY,
        radius * 1.1
      );
      glow.addColorStop(0, color(dark ? 0.035 : 0.018));
      glow.addColorStop(1, color(0));
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.06, 0, Math.PI * 2);
      ctx.fill();
      const line = (a, b) => {
        const depth = (a[2] + b[2]) / 2;
        ctx.strokeStyle = color(depth < 0 ? 0.035 : 0.12 + depth * 0.19);
        ctx.lineWidth = depth < 0 ? 0.45 : 0.7;
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
        ctx.stroke();
      };
      points.forEach((ring, ri) =>
        ring.forEach((point, si) => {
          line(point, ring[(si + 1) % SEGMENTS]);
          if (ri < RINGS) {
            line(point, points[ri + 1][si]);
            line(point, points[ri + 1][(si + (ri % 2 ? 1 : SEGMENTS - 1)) % SEGMENTS]);
          }
          if (point[2] > 0) {
            ctx.fillStyle = color(0.2 + point[2] * 0.45);
            ctx.beginPath();
            ctx.arc(point[0], point[1], si % 9 === 0 ? 1.8 : 0.7, 0, Math.PI * 2);
            ctx.fill();
          }
        })
      );
      for (let i = 0; i < 2; i++) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(i ? 0.65 : -0.4);
        ctx.strokeStyle = color(i ? 0.12 : 0.24);
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          radius * (1.19 + i * 0.07),
          radius * (0.32 + i * 0.14),
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();
        const travel = intro * 1.8 + progress + i * 2.7;
        const sx = Math.cos(travel) * radius * (1.19 + i * 0.07),
          sy = Math.sin(travel) * radius * (0.32 + i * 0.14);
        ctx.fillStyle = color(0.8);
        ctx.beginPath();
        ctx.arc(sx, sy, 2.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      for (let i = 0; i < 16; i++) {
        const a = i * 2.4 + rotation * 0.8;
        const r = radius * (1.07 + (i % 3) * 0.055);
        ctx.fillStyle = color(0.28);
        ctx.font = '9px monospace';
        ctx.fillText(
          i % 2 ? '1' : '0',
          centerX + Math.cos(a) * r,
          centerY + Math.sin(a) * r * 0.94
        );
      }
      if (
        !reduced &&
        visible &&
        !document.hidden &&
        (elapsed < 1 ||
          now - lastInteraction < 550 ||
          Math.abs(targetX - pointerX) > 0.002 ||
          Math.abs(targetY - pointerY) > 0.002)
      )
        frame = requestAnimationFrame(paint);
    };
    const request = () => {
      if (!visible || document.hidden || frame) return;
      frame = requestAnimationFrame(paint);
    };
    const onScroll = () => {
      const rect = host.getBoundingClientRect();
      scroll = Math.max(0, Math.min(-rect.top / height, 1));
      lastInteraction = performance.now();
      request();
    };
    const onPointer = event => {
      const rect = host.getBoundingClientRect();
      targetX = (event.clientX - rect.left) / width - 0.5;
      targetY = (event.clientY - rect.top) / height - 0.5;
      lastInteraction = performance.now();
      request();
    };
    const reset = () => {
      targetX = 0;
      targetY = 0;
      lastInteraction = performance.now();
      request();
    };
    const resize = new ResizeObserver(entries => {
      width = entries[0].contentRect.width;
      height = entries[0].contentRect.height;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      node.width = Math.round(width * dpr);
      node.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      request();
    });
    resize.observe(host);
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible) {
        if (!enteredAt) enteredAt = performance.now();
        request();
      } else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    observer.observe(host);
    const updateTheme = () => {
      dark = document.documentElement.dataset.theme !== 'light';
      request();
    };
    const theme = new MutationObserver(updateTheme);
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    updateTheme();
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else request();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    host.addEventListener('pointermove', onPointer, { passive: true });
    host.addEventListener('pointerleave', reset);
    document.addEventListener('visibilitychange', visibility);
    media.addEventListener('change', request);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      theme.disconnect();
      window.removeEventListener('scroll', onScroll);
      host.removeEventListener('pointermove', onPointer);
      host.removeEventListener('pointerleave', reset);
      document.removeEventListener('visibilitychange', visibility);
      media.removeEventListener('change', request);
    };
  }, []);
  return (
    <canvas
      ref={canvas}
      className="hero-network"
      role="img"
      aria-label="Interactive three-dimensional network globe"
    />
  );
}
