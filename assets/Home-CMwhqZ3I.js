const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CinematicScene-530VElJ8.js","assets/motion-BCcaUrQT.js","assets/r3f-O0cwfIJe.js","assets/three-C3Zk3Umg.js"])))=>i.map(i=>d[i]);
import{a as c,j as e}from"./motion-BCcaUrQT.js";import{_ as I}from"./r3f-O0cwfIJe.js";import{c as w,S as _,M as b,L as h,I as g,g as M,a as A,b as C,d as E,e as k,u as $,f as T,h as R}from"./index-C2xNo2s1.js";import{S as z,B as D,M as H}from"./skills-D7m0TPy3.js";import{P as L}from"./ProjectCard-CaY4n5D6.js";import{u as P}from"./useGetProjects-CZNjKNAW.js";import{R as G,I as F}from"./recommendations-BKfLRvhS.js";import"./three-C3Zk3Umg.js";import"./paths-Bu_35hHc.js";/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]],q=w("outline","arrow-down","ArrowDown",O);/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M12 3l0 6",key:"svg-1"}],["path",{d:"M12 15l0 6",key:"svg-2"}]],Y=w("outline","git-commit","GitCommit",B),U=c.lazy(()=>I(()=>import("./CinematicScene-530VElJ8.js"),__vite__mapDeps([0,1,2,3])));M.registerPlugin(_);const K=[{org:"IBM",role:"Lead Full-Stack Developer",note:"Microservices · Kafka · CI/CD"},{org:"EPFL",role:"Senior Full-Stack Developer",note:"AWS data infra · research platforms"},{org:"AICA",role:"Frontend Engineer",note:"Robotics UI · TypeScript · Go"}],W=["Intro","Craft","Path","Numbers","Next"],N=[0,.22,.42,.64,.83],V=t=>{let n=0;for(let a=0;a<N.length;a++)t>=N[a]&&(n=a);return n},J=()=>{const t=c.useRef(null),n=c.useRef(0),a=c.useRef(0),[i,o]=c.useState(0);return c.useEffect(()=>{const r=t.current;if(!r)return;const s=_.create({trigger:r,start:"top top",end:"bottom bottom",scrub:!0,onUpdate:l=>{n.current=l.progress;const p=V(l.progress);p!==a.current&&(a.current=p,o(p))}});return _.refresh(),()=>s.kill()},[]),e.jsxs("section",{className:"stage",ref:t,children:[e.jsxs("div",{className:"stage__pin",children:[e.jsx(c.Suspense,{fallback:null,children:e.jsx(U,{progress:n})}),e.jsx("div",{className:"stage__vignette","aria-hidden":"true"}),e.jsx("div",{className:"stage__rail","aria-hidden":"true",children:W.map((r,s)=>e.jsxs("span",{className:`stage__tick ${s===i?"is-active":""} ${s<i?"is-done":""}`,children:[e.jsx("i",{}),e.jsx("em",{children:r})]},r))}),e.jsxs("div",{className:"stage__acts",children:[e.jsx("div",{className:`c-act c-act--left ${i===0?"is-active":""}`,children:e.jsxs("div",{className:"container",children:[e.jsx("p",{className:"eyebrow",children:"Senior Full-Stack Engineer  /  Geneva, CH"}),e.jsxs("h1",{className:"c-hero display",children:["Software, ",e.jsx("span",{className:"gradient-text",children:"engineered"}),e.jsx("br",{}),"to feel ",e.jsx("span",{className:"gradient-text--warm",children:"alive"}),"."]}),e.jsx("p",{className:"c-sub",children:"I’m Hassan Shahzad — a senior full-stack engineer who also designs and ships award-grade interfaces. This whole scene is hand-written GLSL, driven by your scroll."}),e.jsxs("div",{className:"c-actions",children:[e.jsx(b,{strength:.4,children:e.jsxs(h,{to:"/projects",className:"btn btn--primary btn--lg",children:[e.jsx("span",{children:"View my work"}),e.jsx(g,{size:19})]})}),e.jsx(b,{strength:.4,children:e.jsx(h,{to:"/contact",className:"btn btn--ghost btn--lg",children:e.jsx("span",{children:"Get in touch"})})})]})]})}),e.jsx("div",{className:`c-act c-act--left ${i===1?"is-active":""}`,children:e.jsxs("div",{className:"container",children:[e.jsx("span",{className:"c-index",children:"01 — What I do"}),e.jsxs("h2",{className:"c-statement display",children:["I turn complex systems into interfaces that feel"," ",e.jsx("span",{className:"gradient-text",children:"inevitable"}),"."]})]})}),e.jsx("div",{className:`c-act c-act--right ${i===2?"is-active":""}`,children:e.jsxs("div",{className:"container",children:[e.jsx("span",{className:"c-index",children:"02 — The path"}),e.jsx("h2",{className:"c-statement display c-statement--sm",children:"A global trajectory."}),e.jsx("ul",{className:"c-miles",children:K.map(r=>e.jsxs("li",{className:"c-mile",children:[e.jsx("span",{className:"c-mile__org gradient-text",children:r.org}),e.jsx("span",{className:"c-mile__role",children:r.role}),e.jsx("span",{className:"c-mile__note",children:r.note})]},r.org))})]})}),e.jsx("div",{className:`c-act c-act--center ${i===3?"is-active":""}`,children:e.jsxs("div",{className:"container",children:[e.jsx("span",{className:"c-index",children:"03 — By the numbers"}),e.jsx("div",{className:"c-stats",children:z.map(r=>e.jsxs("div",{className:"c-stat",children:[e.jsx("span",{className:"c-stat__value display gradient-text",children:r.value}),e.jsx("span",{className:"c-stat__label",children:r.label})]},r.label))})]})}),e.jsx("div",{className:`c-act c-act--center ${i===4?"is-active":""}`,children:e.jsxs("div",{className:"container c-next",children:[e.jsx("span",{className:"c-index",children:"04 — Now the specifics"}),e.jsxs("h2",{className:"c-statement display",children:["Let’s get ",e.jsx("span",{className:"gradient-text--warm",children:"specific"}),"."]}),e.jsx("p",{className:"c-sub c-sub--center",children:"Keep scrolling — selected work and voices below."}),e.jsx(q,{size:22,className:"c-next__arrow"})]})})]})]}),e.jsx("style",{children:`
        .stage {
          position: relative;
          height: 460vh;
          z-index: 1;
        }
        .stage__pin {
          position: sticky;
          top: 0;
          height: 100svh;
          overflow: hidden;
        }
        .stage__vignette {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: radial-gradient(125% 95% at 50% 12%, transparent 42%, rgba(5, 6, 13, 0.82) 100%);
        }
        .stage__acts {
          position: absolute;
          inset: 0;
          z-index: 2;
        }

        .stage__rail {
          position: absolute;
          right: clamp(1rem, 3vw, 2.4rem);
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .stage__tick {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          justify-content: flex-end;
        }
        .stage__tick i {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: 1px solid var(--line-strong);
          background: transparent;
          transition: all 0.4s var(--ease-out);
        }
        .stage__tick.is-done i { background: var(--ink-mute); border-color: var(--ink-mute); }
        .stage__tick.is-active i {
          background: var(--cyan);
          border-color: var(--cyan);
          box-shadow: var(--glow-cyan);
          transform: scale(1.4);
        }
        .stage__tick em {
          font-family: var(--font-mono);
          font-style: normal;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-mute);
          opacity: 0;
          transform: translateX(6px);
          transition: all 0.4s var(--ease-out);
        }
        .stage__tick.is-active em { opacity: 1; transform: none; color: var(--cyan); }

        .c-act {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateY(34px);
          transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out);
          pointer-events: none;
        }
        .c-act.is-active { opacity: 1; transform: none; pointer-events: auto; }
        .c-act--left .container { text-align: left; margin-right: auto; }
        .c-act--right { justify-content: flex-end; text-align: right; }
        .c-act--right .container { display: flex; flex-direction: column; align-items: flex-end; }
        .c-act--center { justify-content: center; text-align: center; }
        .c-act--center .container { display: flex; flex-direction: column; align-items: center; }

        .c-index {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--amber);
          display: block;
          margin-bottom: 1.2rem;
        }
        .c-hero {
          font-size: clamp(2.6rem, 9vw, 7.5rem);
          letter-spacing: -0.035em;
          margin-bottom: 1.6rem;
          max-width: 16ch;
        }
        .c-statement {
          font-size: clamp(2rem, 6vw, 4.6rem);
          line-height: 1.08;
          letter-spacing: -0.025em;
          max-width: 18ch;
        }
        .c-statement--sm { font-size: clamp(1.8rem, 5vw, 3.4rem); margin-bottom: 2rem; }
        .c-sub {
          max-width: 48ch;
          font-size: clamp(1rem, 2.2vw, 1.18rem);
          color: var(--ink-dim);
          margin-bottom: 2.4rem;
        }
        .c-sub--center { margin-inline: auto; }
        .c-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

        .c-miles { display: flex; flex-direction: column; gap: 1.4rem; }
        .c-mile { display: flex; flex-direction: column; gap: 0.2rem; }
        .c-mile__org { font-family: var(--font-display); font-size: clamp(1.4rem, 3vw, 2.2rem); font-weight: 700; }
        .c-mile__role { color: var(--ink); font-weight: 600; }
        .c-mile__note { font-family: var(--font-mono); font-size: 0.76rem; color: var(--ink-mute); letter-spacing: 0.04em; }

        .c-stats {
          display: grid;
          grid-template-columns: repeat(4, auto);
          gap: clamp(1.6rem, 5vw, 4rem);
          margin-top: 1rem;
        }
        .c-stat { display: flex; flex-direction: column; gap: 0.3rem; }
        .c-stat__value { font-size: clamp(2.6rem, 7vw, 5rem); line-height: 1; }
        .c-stat__label { color: var(--ink-mute); font-size: 0.85rem; }

        .c-next__arrow { color: var(--ink-mute); margin-top: 1.4rem; animation: cbob 1.8s ease-in-out infinite; }
        @keyframes cbob { 0%,100%{ transform: translateY(0);} 50%{ transform: translateY(7px);} }

        @media (max-width: 860px) {
          .stage { height: 400vh; }
          /* Keep vertical centering (align-items lives on the row flex parent);
             only flip the horizontal alignment of right/center acts to the left. */
          .c-act { justify-content: flex-start; text-align: left; }
          .c-act--right { justify-content: flex-start; text-align: left; }
          .c-act--right .container,
          .c-act--center .container { align-items: flex-start; }
          .c-act--center { justify-content: flex-start; text-align: left; }
          .c-sub--center { margin-inline: 0; }
          .c-stats { grid-template-columns: repeat(2, 1fr); }
          .c-next { align-items: flex-start; }
          .stage__rail { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .c-next__arrow { animation: none; }
        }
      `})]})},Q=()=>e.jsxs("section",{className:"rhero container",children:[e.jsx("p",{className:"eyebrow",children:"Senior Full-Stack Engineer — Geneva, CH"}),e.jsx("h1",{className:"rhero__name display",children:"Hassan Shahzad"}),e.jsx("p",{className:"rhero__bio",children:D[0]}),e.jsxs("div",{className:"rhero__actions",children:[e.jsxs("a",{href:"/assets/resume/hassan_resume.pdf",download:"hassan_resume.pdf",className:"btn btn--primary btn--lg",children:[e.jsx(A,{size:18}),e.jsx("span",{children:"Download résumé"})]}),e.jsxs(h,{to:"/contact",className:"btn btn--ghost btn--lg",children:[e.jsx(C,{size:18}),e.jsx("span",{children:"Contact"})]}),e.jsxs("a",{href:"https://www.linkedin.com/in/hassan-shahzad-2a6617212/",target:"_blank",rel:"noopener noreferrer",className:"btn btn--ghost btn--lg",children:[e.jsx(E,{size:18}),e.jsx("span",{children:"LinkedIn"})]}),e.jsxs("a",{href:"https://github.com/HxnDev",target:"_blank",rel:"noopener noreferrer",className:"btn btn--ghost btn--lg",children:[e.jsx(k,{size:18}),e.jsx("span",{children:"GitHub"})]})]}),e.jsx("dl",{className:"rhero__stats",children:z.map(t=>e.jsxs("div",{className:"rhero__stat",children:[e.jsx("dt",{className:"rhero__label",children:t.label}),e.jsx("dd",{className:"rhero__value display",children:t.value})]},t.label))}),e.jsx("style",{children:`
      .rhero {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.2rem;
        padding-block: 10rem 4rem;
      }
      .rhero__name {
        font-size: clamp(2.6rem, 7vw, 4.6rem);
        margin: 0;
        letter-spacing: -0.03em;
      }
      .rhero__bio {
        max-width: 68ch;
        color: var(--ink-dim);
        font-size: 1.05rem;
        line-height: 1.7;
        margin: 0;
      }
      .rhero__actions {
        display: flex;
        gap: 0.7rem;
        flex-wrap: wrap;
        margin-top: 0.4rem;
      }
      .rhero__stats {
        display: grid;
        grid-template-columns: repeat(4, minmax(120px, 1fr));
        gap: 1rem;
        width: 100%;
        margin: 1.6rem 0 0;
        padding: 1.4rem 0 0;
        border-top: 1px solid var(--line);
      }
      .rhero__stat { display: flex; flex-direction: column-reverse; gap: 0.2rem; }
      .rhero__value { font-size: clamp(1.7rem, 4vw, 2.4rem); color: var(--ink); margin: 0; }
      .rhero__label {
        font-family: var(--font-mono);
        font-size: 0.74rem;
        color: var(--ink-mute);
        letter-spacing: 0.06em;
      }
      @media (max-width: 720px) {
        .rhero__stats { grid-template-columns: repeat(2, 1fr); }
      }
    `})]}),f="HxnDev",y="gh-activity-v2",X=3600*1e3,Z=t=>{const n=Math.max(1,Math.round((Date.now()-new Date(t))/6e4));if(n<60)return`${n}m ago`;const a=Math.round(n/60);if(a<24)return`${a}h ago`;const i=Math.round(a/24);return i<30?`${i}d ago`:`${Math.round(i/30)}mo ago`},ee=()=>{const[t,n]=c.useState(null);return c.useEffect(()=>{let a=!1;return(async()=>{try{const o=JSON.parse(localStorage.getItem(y)||"null");if(o&&Date.now()-o.at<X){n(o.data);return}}catch{}try{const[o,r]=await Promise.all([fetch(`https://api.github.com/users/${f}`),fetch(`https://api.github.com/users/${f}/repos?sort=pushed&per_page=3`)]);if(!o.ok||!r.ok)return;const s=await o.json(),l=await r.json(),S=(await Promise.all(l.map(d=>fetch(`https://api.github.com/repos/${d.full_name}/commits?per_page=3`).then(m=>m.ok?m.json():[]).then(m=>(Array.isArray(m)?m:[]).map(x=>{var v,j;return{repo:d.name,msg:x.commit.message.split(`
`)[0],url:x.html_url,at:((v=x.commit.author)==null?void 0:v.date)||((j=x.commit.committer)==null?void 0:j.date)}})).catch(()=>[])))).flat().filter(d=>d.at).sort((d,m)=>new Date(m.at)-new Date(d.at)).slice(0,4),u={repos:s.public_repos,followers:s.followers,commits:S};if(!a){n(u);try{localStorage.setItem(y,JSON.stringify({at:Date.now(),data:u}))}catch{}}}catch{}})(),()=>{a=!0}},[]),!t||t.commits.length===0?null:e.jsxs("section",{className:"section container",children:[e.jsxs("div",{className:"section-head",children:[e.jsxs("div",{children:[e.jsx("span",{className:"section-index","data-reveal":!0,children:"Proof of life"}),e.jsx("h2",{className:"section-title","data-reveal":!0,"data-reveal-delay":80,children:"Live from GitHub"})]}),e.jsxs("a",{href:`https://github.com/${f}`,target:"_blank",rel:"noopener noreferrer",className:"btn btn--ghost","data-reveal":!0,"data-reveal-delay":120,children:[e.jsx(k,{size:17}),e.jsxs("span",{children:[t.repos," repos · ",t.followers," followers"]}),e.jsx(g,{size:17})]})]}),e.jsx("div",{className:"gh-feed",children:t.commits.map((a,i)=>e.jsxs("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"gh-commit","data-reveal":!0,"data-reveal-delay":i*70,children:[e.jsx(Y,{size:18,className:"gh-commit__icon"}),e.jsx("span",{className:"gh-commit__msg",children:a.msg}),e.jsxs("span",{className:"gh-commit__meta",children:[e.jsx("span",{className:"gh-commit__repo",children:a.repo}),e.jsx("span",{className:"gh-commit__time",children:Z(a.at)})]})]},a.url))}),e.jsx("style",{children:`
        .gh-feed {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .gh-commit {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 1rem 1.3rem;
          background: var(--bg-elev);
          transition: background 0.25s ease;
        }
        .gh-commit + .gh-commit { border-top: 1px solid var(--line); }
        .gh-commit:hover { background: rgba(91, 233, 255, 0.05); }
        .gh-commit__icon { color: var(--amber); flex-shrink: 0; }
        .gh-commit__msg {
          flex: 1;
          color: var(--ink);
          font-size: 0.94rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .gh-commit__meta {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          flex-shrink: 0;
          font-family: var(--font-mono);
          font-size: 0.74rem;
        }
        .gh-commit__repo { color: var(--cyan); }
        .gh-commit__time { color: var(--ink-mute); min-width: 56px; text-align: right; }
        @media (max-width: 640px) {
          .gh-commit { flex-wrap: wrap; }
          .gh-commit__msg { flex-basis: 100%; white-space: normal; }
          .gh-commit__meta { margin-left: 1.7rem; }
        }
      `})]})},ae=({items:t=[]})=>{const n=[...t,...t];return e.jsx("div",{className:"marquee","aria-hidden":"true",children:e.jsx("div",{className:"marquee__track",children:n.map((a,i)=>e.jsx("span",{className:"marquee__item",children:a},`${a}-${i}`))})})},de=()=>{const t=$(),{projects:n}=P(),{recruiter:a}=T(),i=c.useMemo(()=>n.filter(s=>s.featured).slice(0,6),[n]),o=c.useMemo(()=>G.slice(0,3),[]),r=s=>{t(`/projects?project=${s.id}`)};return e.jsxs(e.Fragment,{children:[a?e.jsx(Q,{}):e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(ae,{items:H})]}),e.jsxs("section",{className:"section container",children:[e.jsxs("div",{className:"section-head",children:[e.jsxs("div",{children:[e.jsx("span",{className:"section-index","data-reveal":!0,children:"Selected work"}),e.jsx("h2",{className:"section-title","data-reveal":!0,"data-reveal-delay":80,children:"Featured projects"})]}),e.jsxs(h,{to:"/projects",className:"btn btn--ghost","data-reveal":!0,"data-reveal-delay":120,children:[e.jsx("span",{children:"All projects"}),e.jsx(g,{size:17})]})]}),e.jsx("div",{className:"grid-3",children:i.map((s,l)=>e.jsx(L,{project:s,index:l,onOpen:r},s.id))})]}),!a&&e.jsx("section",{className:"section container",children:e.jsxs(h,{to:"/terminal",className:"term-cta","data-reveal":!0,"aria-label":"Open the interactive terminal",children:[e.jsxs("div",{className:"term-cta__demo","aria-hidden":"true",children:[e.jsxs("div",{className:"term-cta__bar",children:[e.jsx("span",{className:"term-cta__dot term-cta__dot--r"}),e.jsx("span",{className:"term-cta__dot term-cta__dot--y"}),e.jsx("span",{className:"term-cta__dot term-cta__dot--g"}),e.jsx("span",{className:"term-cta__file",children:"guest@hxndev — zsh"})]}),e.jsxs("div",{className:"term-cta__lines",children:[e.jsxs("p",{children:[e.jsx("span",{className:"term-cta__prompt",children:"$"})," sudo hire-me"]}),e.jsx("p",{className:"term-cta__ok",children:"[sudo] permission granted — excellent decision."}),e.jsxs("p",{children:[e.jsx("span",{className:"term-cta__prompt",children:"$"})," ",e.jsx("span",{className:"term-cta__caret"})]})]})]}),e.jsxs("div",{className:"term-cta__copy",children:[e.jsx("span",{className:"section-index",children:"Prefer the keyboard?"}),e.jsxs("h2",{className:"term-cta__title display",children:["This site has a real, ",e.jsx("span",{className:"gradient-text",children:"working shell."})]}),e.jsx("p",{className:"term-cta__sub",children:"Browse projects, check skills, download the résumé — all from a terminal. Tab completion and command history included."}),e.jsxs("span",{className:"btn btn--primary term-cta__btn",children:[e.jsx(R,{size:18}),e.jsx("span",{children:"Launch terminal"})]})]})]})}),!a&&e.jsx(ee,{}),e.jsxs("section",{className:"section container",children:[e.jsxs("div",{className:"section-head",children:[e.jsxs("div",{children:[e.jsx("span",{className:"section-index","data-reveal":!0,children:"Voices"}),e.jsx("h2",{className:"section-title","data-reveal":!0,"data-reveal-delay":80,children:"What colleagues say"})]}),e.jsxs(h,{to:"/recommendations",className:"btn btn--ghost","data-reveal":!0,"data-reveal-delay":120,children:[e.jsx("span",{children:"All 16 recommendations"}),e.jsx(g,{size:17})]})]}),e.jsx("div",{className:"grid-3",children:o.map((s,l)=>e.jsxs("figure",{className:"voice","data-reveal":!0,"data-reveal-delay":l*80,children:[e.jsx(F,{size:26,className:"voice__mark"}),e.jsx("blockquote",{className:"voice__quote",children:s.quote}),e.jsxs("figcaption",{className:"voice__who",children:[e.jsx("span",{className:"voice__name",children:s.name}),e.jsx("span",{className:"voice__title",children:s.title})]})]},s.name))})]}),e.jsx("style",{children:`
        .voice {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: clamp(1.4rem, 3vw, 2rem);
          background: var(--bg-elev);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          margin: 0;
          transition: border-color 0.3s ease, transform 0.3s var(--ease-out);
        }
        .voice:hover { border-color: var(--line-strong); transform: translateY(-4px); }
        .voice__mark { color: var(--amber); opacity: 0.8; flex-shrink: 0; }
        .voice__quote {
          margin: 0;
          color: var(--ink-dim);
          font-size: 0.96rem;
          line-height: 1.62;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .voice__who { display: flex; flex-direction: column; gap: 0.15rem; margin-top: auto; }
        .voice__name { font-weight: 600; color: var(--ink); }
        .voice__title { font-family: var(--font-mono); font-size: 0.74rem; color: var(--ink-mute); }

        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.6rem; }
        @media (max-width: 980px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .grid-3 { grid-template-columns: 1fr; } }

        .term-cta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(1.6rem, 4vw, 3.4rem);
          align-items: center;
          padding: clamp(1.6rem, 4vw, 3rem);
          border-radius: var(--radius-lg);
          border: 1px solid var(--line);
          background: var(--bg-elev);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s var(--ease-out);
        }
        .term-cta:hover {
          border-color: var(--cyan);
          box-shadow: 0 24px 70px -30px rgba(91, 233, 255, 0.35);
          transform: translateY(-4px);
        }
        .term-cta__demo {
          border-radius: 14px;
          border: 1px solid var(--line-strong);
          background: rgba(6, 7, 12, 0.9);
          overflow: hidden;
          font-family: var(--font-mono);
          font-size: 0.86rem;
        }
        .term-cta__bar {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.6rem 0.9rem;
          border-bottom: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.02);
        }
        .term-cta__dot { width: 11px; height: 11px; border-radius: 50%; }
        .term-cta__dot--r { background: #ff5f57; }
        .term-cta__dot--y { background: #febc2e; }
        .term-cta__dot--g { background: #28c840; }
        .term-cta__file { margin-left: 0.5rem; font-size: 0.7rem; color: var(--ink-mute); }
        .term-cta__lines { padding: 1.1rem 1.2rem 1.3rem; line-height: 2; }
        .term-cta__lines p { margin: 0; color: var(--ink-dim); }
        .term-cta__prompt { color: var(--amber); margin-right: 0.5rem; }
        .term-cta__ok { color: var(--amber); }
        .term-cta__caret {
          display: inline-block;
          width: 0.55em;
          height: 1.05em;
          vertical-align: text-bottom;
          background: var(--cyan);
          animation: term-cta-blink 0.9s steps(1) infinite;
        }
        @keyframes term-cta-blink { 50% { opacity: 0; } }
        .term-cta__copy {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          align-items: flex-start;
        }
        .term-cta__title { font-size: clamp(1.5rem, 3.4vw, 2.3rem); margin: 0; line-height: 1.12; }
        .term-cta__sub { color: var(--ink-dim); line-height: 1.65; margin: 0; max-width: 42ch; }
        .term-cta__btn { margin-top: 0.4rem; pointer-events: none; }
        @media (max-width: 860px) {
          .term-cta { grid-template-columns: 1fr; }
          .term-cta__demo { order: 2; }
        }
        @media (prefers-reduced-motion: reduce) {
          .term-cta__caret { animation: none; }
        }
      `})]})};export{de as default};
//# sourceMappingURL=Home-CMwhqZ3I.js.map
