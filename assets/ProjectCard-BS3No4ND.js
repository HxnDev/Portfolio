import{a as d,j as e}from"./motion-BCcaUrQT.js";import{r as f}from"./paths-Bu_35hHc.js";import{I as c,e as v}from"./index-C2qrGZY6.js";const k=({project:r,index:p=0,onOpen:t})=>{const o=d.useRef(null),[m,_]=d.useState(!1),g=m?r.fallbackImage||"https://placehold.co/800x600/0f121c/5be9ff?text=Project":r.image?f(r.image):r.fallbackImage,h=a=>{const s=o.current;if(!s)return;const i=s.getBoundingClientRect(),l=(a.clientX-i.left)/i.width-.5,n=(a.clientY-i.top)/i.height-.5;s.style.setProperty("--rx",`${-n*8}deg`),s.style.setProperty("--ry",`${l*10}deg`),s.style.setProperty("--mx",`${(l+.5)*100}%`),s.style.setProperty("--my",`${(n+.5)*100}%`)},x=()=>{const a=o.current;a&&(a.style.setProperty("--rx","0deg"),a.style.setProperty("--ry","0deg"))};return e.jsxs("article",{ref:o,className:"pcard","data-reveal":!0,"data-reveal-delay":p%3*90,"data-cursor-label":"Open",onMouseMove:h,onMouseLeave:x,onClick:()=>t==null?void 0:t(r),children:[e.jsxs("div",{className:"pcard__inner",children:[e.jsxs("div",{className:"pcard__media",children:[e.jsx("img",{src:g,alt:r.title,loading:"lazy",decoding:"async",onError:()=>_(!0)}),e.jsx("div",{className:"pcard__shine"}),e.jsxs("div",{className:"pcard__badges",children:[r.featured&&e.jsx("span",{className:"tag tag--accent",children:"Featured"}),r.date&&e.jsx("span",{className:"tag",children:r.date})]}),e.jsx("div",{className:"pcard__open",children:e.jsx(c,{size:22})})]}),e.jsxs("div",{className:"pcard__body",children:[e.jsx("h3",{className:"pcard__title",children:r.title}),e.jsx("p",{className:"pcard__desc",children:r.description}),e.jsx("div",{className:"pcard__tech",children:(r.technologies||[]).slice(0,4).map(a=>e.jsx("span",{className:"pcard__chip",children:a},a))}),e.jsxs("div",{className:"pcard__foot",children:[r.githubUrl&&e.jsxs("a",{href:r.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"pcard__link",onClick:a=>a.stopPropagation(),"aria-label":"GitHub repository",children:[e.jsx(v,{size:18})," Code"]}),r.liveUrl&&e.jsxs("a",{href:r.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"pcard__link pcard__link--accent",onClick:a=>a.stopPropagation(),children:["Live ",e.jsx(c,{size:16})]})]})]})]}),e.jsx("style",{children:`
        .pcard {
          --rx: 0deg;
          --ry: 0deg;
          --mx: 50%;
          --my: 50%;
          perspective: 1000px;
          cursor: pointer;
        }
        .pcard__inner {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          border: 1px solid var(--line);
          background: var(--bg-elev);
          overflow: hidden;
          transform: rotateX(var(--rx)) rotateY(var(--ry));
          transform-style: preserve-3d;
          transition: transform 0.4s var(--ease-out), border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .pcard:hover .pcard__inner {
          border-color: var(--line-strong);
          box-shadow: 0 30px 60px -25px rgba(91, 233, 255, 0.25);
        }
        .pcard__media {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .pcard__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s var(--ease-out);
        }
        .pcard:hover .pcard__media img {
          transform: scale(1.07);
        }
        .pcard__shine {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at var(--mx) var(--my),
            rgba(91, 233, 255, 0.22),
            transparent 45%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          mix-blend-mode: screen;
        }
        .pcard:hover .pcard__shine {
          opacity: 1;
        }
        .pcard__badges {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          gap: 0.5rem;
        }
        .pcard__open {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(6, 7, 11, 0.6);
          backdrop-filter: blur(6px);
          color: var(--ink);
          transform: translateY(-8px) scale(0.8);
          opacity: 0;
          transition: all 0.4s var(--ease-out);
        }
        .pcard:hover .pcard__open {
          transform: none;
          opacity: 1;
          color: var(--cyan);
        }
        .pcard__body {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.5rem;
          flex: 1;
        }
        .pcard__title {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .pcard__desc {
          color: var(--ink-dim);
          font-size: 0.92rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pcard__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
        }
        .pcard__chip {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--ink-mute);
          padding: 0.25rem 0.55rem;
          border-radius: 7px;
          border: 1px solid var(--line);
        }
        .pcard__foot {
          display: flex;
          gap: 1.2rem;
          padding-top: 0.5rem;
          border-top: 1px solid var(--line);
          margin-top: 0.4rem;
        }
        .pcard__link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--ink-dim);
          padding-top: 0.8rem;
          transition: color 0.25s ease;
        }
        .pcard__link:hover {
          color: var(--ink);
        }
        .pcard__link--accent:hover {
          color: var(--cyan);
        }
      `})]})};export{k as P};
//# sourceMappingURL=ProjectCard-BS3No4ND.js.map
