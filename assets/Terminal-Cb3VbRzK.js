import{a as o,j as r}from"./motion-BCcaUrQT.js";import{u as N,l as S}from"./index-DTFXFKDR.js";import{u as T}from"./useGetProjects-CZNjKNAW.js";import{a as z,S as _}from"./skills-D7m0TPy3.js";import"./r3f-O0cwfIJe.js";import"./three-C3Zk3Umg.js";const E="hassanshahzad.dev@gmail.com",C=["██╗  ██╗██╗  ██╗███╗   ██╗","██║  ██║╚██╗██╔╝████╗  ██║","███████║ ╚███╔╝ ██╔██╗ ██║","██╔══██║ ██╔██╗ ██║╚██╗██║","██║  ██║██╔╝ ██╗██║ ╚████║","╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝"],H=[["help","this list"],["about","who is Hassan?"],["projects","list featured work"],["open <id>","open a project (e.g. open bitebook)"],["skills","tech proficiencies"],["contact","email + socials"],["resume","download the résumé PDF"],["play","launch the rocket game"],["neofetch","system info, sort of"],["clear","wipe the screen"]],F=()=>{const[b,c]=o.useState([]),[i,l]=o.useState(""),[m,y]=o.useState([]),[x,p]=o.useState(-1),v=o.useRef(null),d=o.useRef(null),h=N(),{start:k}=S(),{projects:u}=T(),a=(e,t)=>c(s=>[...s,...e.map(n=>({text:n,cls:t,id:Math.random()}))]);o.useEffect(()=>{c([...C.map(e=>({text:e,cls:"banner",id:Math.random()})),...["","Welcome to the hxndev shell. This is a real, working terminal."].map(e=>({text:e,cls:"",id:Math.random()})),...["Type 'help' to see what it can do.",""].map(e=>({text:e,cls:"dim",id:Math.random()}))])},[]),o.useEffect(()=>{var e;(e=d.current)==null||e.scrollTo({top:d.current.scrollHeight})},[b]);const g={help:()=>a(H.map(([e,t])=>`  ${e.padEnd(12)} ${t}`),""),about:()=>a(["Hassan Shahzad — Senior Full-Stack Engineer, Geneva (CH).","Currently shaping the UI of an adaptive-robotics platform at AICA.",`${_[0].value} years building · ${_[1].value} shipped projects · ${_[3].value} certifications.`,"Fun fact: this site has a rocket game. Try 'play'."],""),whoami:()=>a(["guest — but the site belongs to Hassan Shahzad (HxnDev)."],""),projects:()=>{const e=u.filter(t=>t.featured);a(["Featured work — open with `open <id>`:",""],""),a(e.map(t=>`  ${t.id.padEnd(24)} ${t.title}`),"cyan"),a(["",`…plus ${u.length-e.length} more on the Work page.`],"dim")},skills:()=>a(z.map(e=>`  ${e.name.padEnd(22)} ${"█".repeat(Math.round(e.level/10))} ${e.level}%`),"cyan"),contact:()=>a([`  email     ${E}`,"  github    https://github.com/HxnDev","  linkedin  https://www.linkedin.com/in/hassan-shahzad-2a6617212/"],""),resume:()=>{const e=document.createElement("a");e.href="/assets/resume/hassan_resume.pdf",e.download="hassan_resume.pdf",e.click(),a(["Downloading hassan_resume.pdf …"],"amber")},play:()=>{a(["Fueling rocket … cursor is now a spacecraft. Go collect the orbs!"],"amber"),k()},neofetch:()=>a(["  host      hxndev.com","  stack     React 18 · Vite · Three.js · GSAP · GLSL","  theme     Aurora Noir (cyan / amber on near-black)","  shell     hand-rolled, zero dependencies","  uptime    since 2019 — still shipping"],"cyan"),clear:()=>c([])},w=e=>{const t=e.trim();if(!t)return;a([`$ ${t}`],"prompt");const[s,...n]=t.toLowerCase().split(/\s+/);if(s==="sudo"&&n.join(" ")==="hire-me")a(["[sudo] permission granted — excellent decision.","Opening contact page …"],"amber"),setTimeout(()=>h("/contact"),900);else if(s==="open"&&n[0]){const f=u.find($=>$.id===n[0]);f?(a([`Opening ${f.title} …`],"amber"),setTimeout(()=>h(`/projects?project=${f.id}`),500)):a([`open: project '${n[0]}' not found — try 'projects'`],"err")}else s==="exit"?(a(["Leaving so soon? Back to the homepage …"],"dim"),setTimeout(()=>h("/"),700)):g[s]?g[s]():a([`command not found: ${s} — try 'help'`],"err")},j=e=>{if(e.key==="Enter")w(i),i.trim()&&(y(t=>[i,...t]),p(-1)),l("");else if(e.key==="ArrowUp"){e.preventDefault();const t=Math.min(x+1,m.length-1);m[t]&&(p(t),l(m[t]))}else if(e.key==="ArrowDown"){e.preventDefault();const t=x-1;p(t),l(t<0?"":m[t])}else if(e.key==="Tab"){e.preventDefault();const s=[...Object.keys(g),"sudo","open","exit"].find(n=>n.startsWith(i.toLowerCase()));s&&l(s)}};return r.jsxs("section",{className:"termpage",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"termpage__win glass",onClick:()=>{var e;return(e=v.current)==null?void 0:e.focus()},children:[r.jsxs("div",{className:"termpage__bar",children:[r.jsx("span",{className:"termpage__dot termpage__dot--r"}),r.jsx("span",{className:"termpage__dot termpage__dot--y"}),r.jsx("span",{className:"termpage__dot termpage__dot--g"}),r.jsx("span",{className:"termpage__title",children:"guest@hxndev — zsh"})]}),r.jsxs("div",{className:"termpage__body",ref:d,children:[b.map(e=>r.jsx("pre",{className:`termpage__line is-${e.cls||"plain"}`,children:e.text||" "},e.id)),r.jsxs("div",{className:"termpage__inputrow",children:[r.jsx("span",{className:"termpage__prompt",children:"$"}),r.jsx("input",{ref:v,className:"termpage__input",value:i,onChange:e=>l(e.target.value),onKeyDown:j,autoFocus:!0,spellCheck:!1,autoCapitalize:"off",autoComplete:"off","aria-label":"Terminal input"})]})]})]}),r.jsxs("p",{className:"termpage__hint","data-reveal":!0,children:["Tab autocompletes · ↑↓ history · try ",r.jsx("code",{children:"sudo hire-me"})]})]}),r.jsx("style",{children:`
        .termpage {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-block: 8rem 4rem;
        }
        .termpage__win {
          border-radius: 16px;
          overflow: hidden;
          font-family: var(--font-mono);
          box-shadow: 0 40px 110px -40px rgba(0, 0, 0, 0.9), 0 0 70px rgba(91, 233, 255, 0.05);
          cursor: text;
        }
        .termpage__bar {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.7rem 1rem;
          border-bottom: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.02);
        }
        .termpage__dot { width: 12px; height: 12px; border-radius: 50%; }
        .termpage__dot--r { background: #ff5f57; }
        .termpage__dot--y { background: #febc2e; }
        .termpage__dot--g { background: #28c840; }
        .termpage__title {
          margin-left: 0.6rem;
          font-size: 0.74rem;
          color: var(--ink-mute);
          letter-spacing: 0.04em;
        }
        .termpage__body {
          height: min(58vh, 560px);
          overflow-y: auto;
          padding: 1.2rem 1.3rem;
          font-size: 0.86rem;
          line-height: 1.75;
          overscroll-behavior: contain;
        }
        .termpage__line {
          margin: 0;
          white-space: pre-wrap;
          word-break: break-word;
          color: var(--ink-dim);
          font-family: inherit;
        }
        .termpage__line.is-banner { color: var(--cyan); line-height: 1.25; font-size: 0.72rem; }
        .termpage__line.is-prompt { color: var(--ink); }
        .termpage__line.is-cyan { color: var(--cyan); }
        .termpage__line.is-amber { color: var(--amber); }
        .termpage__line.is-dim { color: var(--ink-mute); }
        .termpage__line.is-err { color: #ff7b72; }
        .termpage__inputrow {
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }
        .termpage__prompt { color: var(--amber); }
        .termpage__input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--ink);
          font-family: inherit;
          font-size: inherit;
          caret-color: var(--cyan);
        }
        .termpage__hint {
          margin-top: 1rem;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--ink-mute);
        }
        .termpage__hint code { color: var(--amber); }
        @media (max-width: 640px) {
          .termpage__line.is-banner { font-size: 0.5rem; }
        }
      `})]})};export{F as default};
//# sourceMappingURL=Terminal-Cb3VbRzK.js.map
