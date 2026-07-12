import{a as i,j as e}from"./motion-BCcaUrQT.js";import{R as t,I as g}from"./recommendations-D8KYx8lt.js";import{c}from"./index-DTFXFKDR.js";import"./r3f-O0cwfIJe.js";import"./three-C3Zk3Umg.js";/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4l4 -6",key:"svg-0"}]],u=c("outline","crown","Crown",h);/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1",key:"svg-1"}],["path",{d:"M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-2"}],["path",{d:"M17 10h2a2 2 0 0 1 2 2v1",key:"svg-3"}],["path",{d:"M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-4"}],["path",{d:"M3 13v-1a2 2 0 0 1 2 -2h2",key:"svg-5"}]],x=c("outline","users-group","UsersGroup",v),b=r=>r.split(" ").map(n=>n[0]).slice(0,2).join(""),l=[{id:"managers",label:"Managers",icon:u,lead:"See what Hassan’s managers say about him — the people who hired him, set the bar, and reviewed the results."},{id:"colleagues",label:"Colleagues",icon:x,lead:"See what Hassan’s colleagues say about him — teammates, cross-team partners, and engineers he mentored."}],N=()=>{const[r,n]=i.useState("managers"),o=i.useMemo(()=>{const a=t.filter(s=>s.group==="managers");return{managers:a,colleagues:t.filter(s=>!a.includes(s))}},[]),m=l.find(a=>a.id===r),d=o[r];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"aurora","aria-hidden":"true"}),e.jsxs("section",{className:"section container page-top",children:[e.jsxs("div",{className:"page-head",children:[e.jsxs("span",{className:"eyebrow","data-reveal":!0,children:["Kind words — ",t.length," recommendations"]}),e.jsx("h1",{className:"page-title display","data-reveal":!0,"data-reveal-delay":80,children:e.jsx("span",{className:"gradient-text",children:"Recommendations"})}),e.jsx("p",{className:"page-lead","data-reveal":!0,"data-reveal-delay":140,children:m.lead})]}),e.jsx("div",{className:"rec-tabs",role:"tablist","aria-label":"Recommendation groups","data-reveal":!0,children:l.map(({id:a,label:s,icon:p})=>e.jsxs("button",{role:"tab","aria-selected":r===a,className:`rec-tab ${r===a?"is-active":""}`,onClick:()=>n(a),children:[e.jsx(p,{size:16}),e.jsx("span",{children:s}),e.jsx("span",{className:"rec-tab__count",children:o[a].length})]},a))}),e.jsx("div",{className:"recs",children:d.map((a,s)=>e.jsxs("figure",{className:"rec",style:{animationDelay:`${s%3*70}ms`},children:[e.jsx(g,{className:"rec__mark",size:34}),e.jsx("blockquote",{className:"rec__quote",children:a.quote}),e.jsxs("figcaption",{className:"rec__by",children:[e.jsx("span",{className:"rec__avatar",children:b(a.name)}),e.jsxs("span",{className:"rec__meta",children:[e.jsx("span",{className:"rec__name",children:a.name}),a.title&&e.jsx("span",{className:"rec__title",children:a.title}),a.relation&&e.jsx("span",{className:"rec__relation",children:a.relation})]})]})]},a.name))},r)]}),e.jsx("style",{children:`
        .page-top { padding-top: clamp(7rem, 14vh, 11rem); }
        .page-head { max-width: 720px; margin-bottom: 2.5rem; }
        .page-title {
          font-size: clamp(3rem, 11vw, 7rem);
          letter-spacing: -0.04em;
          margin-block: 1rem 1.4rem;
          line-height: 0.95;
        }
        .page-lead { color: var(--ink-dim); font-size: clamp(1rem, 2.2vw, 1.2rem); max-width: 56ch; }
        .rec-tabs {
          display: inline-flex;
          gap: 0.3rem;
          padding: 0.3rem;
          margin-bottom: 2rem;
          border-radius: 99px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.02);
        }
        .rec-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.15rem;
          border-radius: 99px;
          color: var(--ink-dim);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.25s ease, background 0.25s ease;
        }
        .rec-tab:hover { color: var(--ink); }
        .rec-tab.is-active {
          color: #07080d;
          background: var(--ink);
        }
        .rec-tab__count {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 0.1rem 0.45rem;
          border-radius: 99px;
          background: rgba(91, 233, 255, 0.14);
          color: var(--cyan);
        }
        .rec-tab.is-active .rec-tab__count {
          background: rgba(7, 8, 13, 0.16);
          color: #07080d;
        }
        .recs {
          columns: 3;
          column-gap: 1.4rem;
        }
        @media (max-width: 1100px) {
          .recs { columns: 2; }
        }
        .rec {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          padding: clamp(1.5rem, 2.6vw, 2rem);
          margin-bottom: 1.4rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--line);
          background: var(--bg-elev);
          overflow: hidden;
          break-inside: avoid;
          animation: rec-in 0.45s var(--ease-out) both;
        }
        @keyframes rec-in {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rec { animation: none; }
        }
        body.recruiter-mode .rec { animation: none; }
        .rec::before {
          content: '';
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: var(--grad-primary);
          opacity: 0.8;
        }
        .rec__mark { color: var(--violet); opacity: 0.5; }
        .rec__quote { color: var(--ink-dim); font-size: 0.94rem; line-height: 1.65; flex: 1; }
        .rec__by {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding-top: 0.4rem;
          border-top: 1px solid var(--line);
        }
        .rec__avatar {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--grad-ice);
          color: #07080d;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.95rem;
          flex-shrink: 0;
        }
        .rec__meta { display: flex; flex-direction: column; }
        .rec__name {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-display);
          font-weight: 600;
          transition: color 0.25s ease;
        }
        .rec__name:hover { color: var(--cyan); }
        .rec__name svg { color: var(--ink-mute); }
        .rec__title { font-size: 0.8rem; color: var(--ink-dim); margin-top: 0.1rem; }
        .rec__relation {
          font-size: 0.72rem;
          color: var(--ink-mute);
          font-family: var(--font-mono);
          margin-top: 0.2rem;
        }
        @media (max-width: 720px) {
          .recs { columns: 1; }
        }
      `})]})};export{N as default};
//# sourceMappingURL=Recommendations-CJPANWVN.js.map
