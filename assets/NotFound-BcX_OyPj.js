import{j as e}from"./motion-BCcaUrQT.js";import{c as r,k as s,f as i,M as o,L as a,b as l}from"./index-Ck62fvnP.js";import"./r3f-O0cwfIJe.js";import"./three-C3Zk3Umg.js";/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9",key:"svg-0"}],["path",{d:"M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2",key:"svg-1"}],["path",{d:"M12 12l0 .01",key:"svg-2"}],["path",{d:"M3 13a20 20 0 0 0 18 0",key:"svg-3"}]],d=r("outline","briefcase","Briefcase",c);/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6",key:"svg-2"}]],h=r("outline","home","Home",m),b=()=>{const{pathname:n}=s(),{recruiter:t}=i();return e.jsxs("section",{className:"nf",children:[e.jsxs("div",{className:"container nf__inner",children:[e.jsx("p",{className:"eyebrow","data-reveal":!0,children:"Error 404 — lost in the aurora"}),e.jsxs("h1",{className:"nf__code display","data-reveal":!0,"aria-hidden":"true",children:["4",e.jsx("span",{className:"nf__orb"}),"4"]}),e.jsxs("h2",{className:"nf__title display","data-reveal":!0,children:["This page drifted ",e.jsx("span",{className:"gradient-text--aurora",children:"off orbit."})]}),e.jsxs("p",{className:"nf__sub","data-reveal":!0,children:[e.jsx("code",{className:"nf__path",children:n})," doesn’t exist — or it got caught in play mode and never came back. Either way, the good stuff is this way."]}),e.jsxs("div",{className:"nf__actions","data-reveal":!0,children:[e.jsx(o,{strength:.35,children:e.jsxs(a,{to:"/",className:"btn btn--primary btn--lg",children:[e.jsx("span",{children:"Back home"}),e.jsx(h,{size:18})]})}),e.jsxs(a,{to:"/projects",className:"btn btn--ghost btn--lg",children:[e.jsx("span",{children:"See the work"}),e.jsx(d,{size:18})]}),e.jsxs(a,{to:"/contact",className:"btn btn--ghost btn--lg",children:[e.jsx("span",{children:"Say hello"}),e.jsx(l,{size:18})]})]}),!t&&e.jsxs("p",{className:"nf__hint","data-reveal":!0,children:["Pro tip: type ",e.jsx("kbd",{children:"play"})," anywhere to turn this site into a game."]})]}),e.jsx("style",{children:`
        .nf {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .nf__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.1rem;
          padding-block: 8rem 5rem;
        }
        .nf__code {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: clamp(6rem, 22vw, 13rem);
          line-height: 0.9;
          letter-spacing: -0.05em;
          background: var(--grad-aurora);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          margin: 0;
        }
        .nf__orb {
          width: clamp(4.4rem, 15vw, 9rem);
          height: clamp(4.4rem, 15vw, 9rem);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #fff, var(--cyan) 45%, rgba(91,233,255,0.05) 72%);
          box-shadow: 0 0 70px rgba(91, 233, 255, 0.5);
          animation: nf-drift 5s ease-in-out infinite;
        }
        @keyframes nf-drift {
          0%, 100% { transform: translateY(-6%) scale(1); }
          50% { transform: translateY(6%) scale(1.05); }
        }
        .nf__title {
          font-size: clamp(1.6rem, 4.5vw, 2.6rem);
          margin: 0;
        }
        .nf__sub {
          max-width: 46ch;
          color: var(--ink-dim);
          line-height: 1.65;
        }
        .nf__path {
          font-family: var(--font-mono);
          font-size: 0.86em;
          color: var(--amber);
          background: rgba(255, 184, 77, 0.08);
          border: 1px solid rgba(255, 184, 77, 0.25);
          border-radius: 8px;
          padding: 0.1rem 0.5rem;
        }
        .nf__actions {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.8rem;
        }
        .nf__hint {
          margin-top: 1.4rem;
          font-size: 0.85rem;
          color: var(--ink-mute);
          font-family: var(--font-mono);
        }
        .nf__hint kbd {
          padding: 0.12rem 0.45rem;
          border-radius: 6px;
          border: 1px solid var(--line-strong);
          background: rgba(255, 255, 255, 0.04);
          color: var(--cyan);
        }
        @media (prefers-reduced-motion: reduce) {
          .nf__orb { animation: none; }
        }
      `})]})};export{b as default};
//# sourceMappingURL=NotFound-BcX_OyPj.js.map
