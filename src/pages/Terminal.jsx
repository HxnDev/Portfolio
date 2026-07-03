import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/components/game/gameContext';
import { useGetProjects } from '@/hooks/useGetProjects';
import { SKILLS } from '@/data/skills';
import { STATS } from '@/data/profile';

const EMAIL = 'hassanshahzad.dev@gmail.com';

const BANNER = [
  '██╗  ██╗██╗  ██╗███╗   ██╗',
  '██║  ██║╚██╗██╔╝████╗  ██║',
  '███████║ ╚███╔╝ ██╔██╗ ██║',
  '██╔══██║ ██╔██╗ ██║╚██╗██║',
  '██║  ██║██╔╝ ██╗██║ ╚████║',
  '╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝',
];

const HELP = [
  ['help', 'this list'],
  ['about', 'who is Hassan?'],
  ['projects', 'list featured work'],
  ['open <id>', 'open a project (e.g. open bitebook)'],
  ['skills', 'tech proficiencies'],
  ['contact', 'email + socials'],
  ['resume', 'download the résumé PDF'],
  ['play', 'launch the rocket game'],
  ['neofetch', 'system info, sort of'],
  ['clear', 'wipe the screen'],
];

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [histPos, setHistPos] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);
  const navigate = useNavigate();
  const { start: startGame } = useGame();
  const { projects } = useGetProjects();

  const print = (rows, cls) =>
    setLines(l => [...l, ...rows.map(text => ({ text, cls, id: Math.random() }))]);

  useEffect(() => {
    setLines([
      ...BANNER.map(text => ({ text, cls: 'banner', id: Math.random() })),
      ...['', 'Welcome to the hxndev shell. This is a real, working terminal.'].map(text => ({
        text,
        cls: '',
        id: Math.random(),
      })),
      ...["Type 'help' to see what it can do.", ''].map(text => ({
        text,
        cls: 'dim',
        id: Math.random(),
      })),
    ]);
  }, []);

  // Keep scrolled to the latest output.
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  const commands = {
    help: () => print(HELP.map(([c, d]) => `  ${c.padEnd(12)} ${d}`), ''),
    about: () =>
      print(
        [
          'Hassan Shahzad — Senior Full-Stack Engineer, Geneva (CH).',
          `Currently shaping the UI of an adaptive-robotics platform at AICA.`,
          `${STATS[0].value} years building · ${STATS[1].value} shipped projects · ${STATS[3].value} certifications.`,
          "Fun fact: this site has a rocket game. Try 'play'.",
        ],
        ''
      ),
    whoami: () => print(['guest — but the site belongs to Hassan Shahzad (HxnDev).'], ''),
    projects: () => {
      const featured = projects.filter(p => p.featured);
      print(['Featured work — open with `open <id>`:', ''], '');
      print(
        featured.map(p => `  ${p.id.padEnd(24)} ${p.title}`),
        'cyan'
      );
      print(['', `…plus ${projects.length - featured.length} more on the Work page.`], 'dim');
    },
    skills: () =>
      print(
        SKILLS.map(s => `  ${s.name.padEnd(22)} ${'█'.repeat(Math.round(s.level / 10))} ${s.level}%`),
        'cyan'
      ),
    contact: () =>
      print(
        [
          `  email     ${EMAIL}`,
          '  github    https://github.com/HxnDev',
          '  linkedin  https://www.linkedin.com/in/hassan-shahzad-2a6617212/',
        ],
        ''
      ),
    resume: () => {
      const a = document.createElement('a');
      a.href = '/assets/resume/hassan_resume.pdf';
      a.download = 'hassan_resume.pdf';
      a.click();
      print(['Downloading hassan_resume.pdf …'], 'amber');
    },
    play: () => {
      print(['Fueling rocket … cursor is now a spacecraft. Go collect the orbs!'], 'amber');
      startGame();
    },
    neofetch: () =>
      print(
        [
          '  host      hxndev.com',
          '  stack     React 18 · Vite · Three.js · GSAP · GLSL',
          '  theme     Aurora Noir (cyan / amber on near-black)',
          '  shell     hand-rolled, zero dependencies',
          '  uptime    since 2019 — still shipping',
        ],
        'cyan'
      ),
    clear: () => setLines([]),
  };

  const run = raw => {
    const cmd = raw.trim();
    if (!cmd) return;
    print([`$ ${cmd}`], 'prompt');
    const [name, ...args] = cmd.toLowerCase().split(/\s+/);

    if (name === 'sudo' && args.join(' ') === 'hire-me') {
      print(['[sudo] permission granted — excellent decision.', 'Opening contact page …'], 'amber');
      setTimeout(() => navigate('/contact'), 900);
    } else if (name === 'open' && args[0]) {
      const p = projects.find(x => x.id === args[0]);
      if (p) {
        print([`Opening ${p.title} …`], 'amber');
        setTimeout(() => navigate(`/projects?project=${p.id}`), 500);
      } else {
        print([`open: project '${args[0]}' not found — try 'projects'`], 'err');
      }
    } else if (name === 'exit') {
      print(['Leaving so soon? Back to the homepage …'], 'dim');
      setTimeout(() => navigate('/'), 700);
    } else if (commands[name]) {
      commands[name]();
    } else {
      print([`command not found: ${name} — try 'help'`], 'err');
    }
  };

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      run(input);
      if (input.trim()) {
        setHistory(h => [input, ...h]);
        setHistPos(-1);
      }
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(histPos + 1, history.length - 1);
      if (history[next]) {
        setHistPos(next);
        setInput(history[next]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = histPos - 1;
      setHistPos(next);
      setInput(next < 0 ? '' : history[next]);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const names = [...Object.keys(commands), 'sudo', 'open', 'exit'];
      const match = names.find(n => n.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  return (
    <section className="termpage">
      <div className="container">
        <div className="termpage__win glass" onClick={() => inputRef.current?.focus()}>
          <div className="termpage__bar">
            <span className="termpage__dot termpage__dot--r" />
            <span className="termpage__dot termpage__dot--y" />
            <span className="termpage__dot termpage__dot--g" />
            <span className="termpage__title">guest@hxndev — zsh</span>
          </div>
          <div className="termpage__body" ref={bodyRef}>
            {lines.map(l => (
              <pre key={l.id} className={`termpage__line is-${l.cls || 'plain'}`}>
                {l.text || ' '}
              </pre>
            ))}
            <div className="termpage__inputrow">
              <span className="termpage__prompt">$</span>
              <input
                ref={inputRef}
                className="termpage__input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                autoFocus
                spellCheck={false}
                autoCapitalize="off"
                autoComplete="off"
                aria-label="Terminal input"
              />
            </div>
          </div>
        </div>
        <p className="termpage__hint" data-reveal>
          Tab autocompletes · ↑↓ history · try <code>sudo hire-me</code>
        </p>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
};

export default Terminal;
