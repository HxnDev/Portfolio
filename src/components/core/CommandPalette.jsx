import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconHome,
  IconBriefcase,
  IconUser,
  IconCertificate,
  IconMessage,
  IconMail,
  IconDownload,
  IconDeviceGamepad2,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCopy,
  IconArrowUpRight,
  IconSearch,
  IconTerminal2,
} from '@tabler/icons-react';
import { useGame } from '@/components/game/gameContext';
import { useGetProjects } from '@/hooks/useGetProjects';

const EMAIL = 'hassanshahzad.dev@gmail.com';

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const dlgRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();
  const { toggle: togglePlay } = useGame();
  const { projects } = useGetProjects();

  const commands = useMemo(() => {
    const pages = [
      { id: 'home', group: 'Pages', label: 'Home', icon: IconHome, run: () => navigate('/') },
      {
        id: 'work',
        group: 'Pages',
        label: 'Work',
        keywords: 'projects portfolio',
        icon: IconBriefcase,
        run: () => navigate('/projects'),
      },
      {
        id: 'about',
        group: 'Pages',
        label: 'About',
        keywords: 'bio experience skills timeline',
        icon: IconUser,
        run: () => navigate('/about'),
      },
      {
        id: 'certs',
        group: 'Pages',
        label: 'Certifications',
        icon: IconCertificate,
        run: () => navigate('/certifications'),
      },
      {
        id: 'recs',
        group: 'Pages',
        label: 'Recommendations',
        keywords: 'references testimonials voices',
        icon: IconMessage,
        run: () => navigate('/recommendations'),
      },
      {
        id: 'contact',
        group: 'Pages',
        label: 'Contact',
        keywords: 'email hire reach out',
        icon: IconMail,
        run: () => navigate('/contact'),
      },
      {
        id: 'terminal',
        group: 'Pages',
        label: 'Terminal',
        keywords: 'shell cli console sudo hire-me',
        icon: IconTerminal2,
        run: () => navigate('/terminal'),
      },
    ];

    const actions = [
      {
        id: 'resume',
        group: 'Actions',
        label: 'Download résumé',
        keywords: 'cv pdf',
        icon: IconDownload,
        run: () => {
          const a = document.createElement('a');
          a.href = '/assets/resume/hassan_resume.pdf';
          a.download = 'hassan_resume.pdf';
          a.click();
        },
      },
      {
        id: 'play',
        group: 'Actions',
        label: 'Toggle play mode',
        keywords: 'game rocket orbs fun',
        icon: IconDeviceGamepad2,
        run: () => togglePlay(),
      },
      {
        id: 'email',
        group: 'Actions',
        label: `Copy email — ${EMAIL}`,
        keywords: 'mail contact copy',
        icon: IconCopy,
        keepOpen: true,
        run: () => {
          navigator.clipboard?.writeText(EMAIL);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        },
      },
      {
        id: 'github',
        group: 'Actions',
        label: 'Open GitHub',
        keywords: 'code repos source',
        icon: IconBrandGithub,
        run: () => window.open('https://github.com/HxnDev', '_blank', 'noopener'),
      },
      {
        id: 'linkedin',
        group: 'Actions',
        label: 'Open LinkedIn',
        keywords: 'social profile',
        icon: IconBrandLinkedin,
        run: () =>
          window.open(
            'https://www.linkedin.com/in/hassan-shahzad-2a6617212/',
            '_blank',
            'noopener'
          ),
      },
    ];

    const projectItems = projects.map(p => ({
      id: `p-${p.id}`,
      group: 'Projects',
      label: p.title,
      keywords: `${(p.technologies || []).join(' ')} ${p.category || ''}`,
      icon: IconArrowUpRight,
      run: () => navigate(`/projects?project=${p.id}`),
    }));

    return [...pages, ...actions, ...projectItems];
  }, [navigate, togglePlay, projects]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(c =>
      `${c.label} ${c.keywords || ''} ${c.group}`.toLowerCase().includes(q)
    );
  }, [commands, query]);

  // Global shortcut: ⌘K / Ctrl+K opens, Esc closes (native dialog handles Esc).
  // The navbar button opens it via the 'open-cmdk' custom event.
  useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(o => !o);
      }
    };
    const onOpenEvent = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-cmdk', onOpenEvent);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-cmdk', onOpenEvent);
    };
  }, []);

  // Drive the native dialog from state. The body class hands the pointer
  // back to the system cursor while the top-layer dialog is up.
  useEffect(() => {
    const d = dlgRef.current;
    if (!d) return;
    document.body.classList.toggle('dialog-open', open);
    if (open && !d.open) {
      d.showModal();
      setQuery('');
      setIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (!open && d.open) {
      d.close();
    }
    return () => document.body.classList.remove('dialog-open');
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  // Keep the active row in view while arrowing through results.
  useEffect(() => {
    const el = listRef.current?.querySelector('[data-active="true"]');
    el?.scrollIntoView({ block: 'nearest' });
  }, [index]);

  const runCommand = cmd => {
    cmd.run();
    if (!cmd.keepOpen) setOpen(false);
  };

  const onInputKey = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndex(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[index]) {
      e.preventDefault();
      runCommand(results[index]);
    }
  };

  let lastGroup = null;

  return (
    <>
      <dialog
        ref={dlgRef}
        className="cmdk"
        aria-label="Command palette"
        onCancel={() => setOpen(false)}
        onClick={e => {
          // Click on the backdrop (the dialog element itself) closes.
          if (e.target === dlgRef.current) setOpen(false);
        }}
      >
        <div className="cmdk__box glass">
          <div className="cmdk__head">
            <IconSearch size={18} className="cmdk__glass" />
            <input
              ref={inputRef}
              className="cmdk__input"
              placeholder="Search pages, projects, actions…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={onInputKey}
              spellCheck={false}
            />
            <kbd className="cmdk__kbd">esc</kbd>
          </div>

          <div className="cmdk__list" ref={listRef} role="listbox">
            {results.length === 0 && (
              <p className="cmdk__empty">Nothing found — try “work”, “résumé” or a tech name.</p>
            )}
            {results.map((cmd, i) => {
              const showGroup = cmd.group !== lastGroup;
              lastGroup = cmd.group;
              const Icon = cmd.icon;
              return (
                <div key={cmd.id}>
                  {showGroup && <p className="cmdk__group">{cmd.group}</p>}
                  <button
                    className="cmdk__item"
                    data-active={i === index}
                    role="option"
                    aria-selected={i === index}
                    onMouseEnter={() => setIndex(i)}
                    onClick={() => runCommand(cmd)}
                  >
                    <Icon size={16} />
                    <span>{cmd.id === 'email' && copied ? 'Copied to clipboard ✓' : cmd.label}</span>
                    <IconArrowUpRight size={14} className="cmdk__go" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="cmdk__foot">
            <span>
              <kbd>↑</kbd>
              <kbd>↓</kbd> navigate
            </span>
            <span>
              <kbd>↵</kbd> select
            </span>
            <span className="cmdk__brand">hxndev.com</span>
          </div>
        </div>
      </dialog>

      <style>{`
        .cmdk {
          position: fixed;
          margin: 0 auto;
          inset: 0;
          top: min(14vh, 140px);
          width: min(640px, 92vw);
          height: fit-content;
          max-height: min(60vh, 520px);
          padding: 0;
          border: none;
          background: transparent;
          color: var(--ink);
          overflow: visible;
          z-index: 9800;
        }
        .cmdk:not([open]) { display: none; }
        .cmdk::backdrop {
          background: rgba(5, 6, 13, 0.55);
          backdrop-filter: blur(6px);
        }
        .cmdk__box {
          display: flex;
          flex-direction: column;
          max-height: min(60vh, 520px);
          border-radius: var(--radius-lg);
          overflow: hidden;
          animation: cmdk-in 0.28s var(--ease-out) both;
          box-shadow: 0 30px 90px -20px rgba(0, 0, 0, 0.8);
        }
        @keyframes cmdk-in {
          from { opacity: 0; transform: translateY(-10px) scale(0.98); }
          to { opacity: 1; transform: none; }
        }
        .cmdk__head {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 1rem 1.1rem;
          border-bottom: 1px solid var(--line);
        }
        .cmdk__glass { color: var(--cyan); flex-shrink: 0; }
        .cmdk__input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--ink);
          font-size: 1rem;
          font-family: var(--font-body);
        }
        .cmdk__input::placeholder { color: var(--ink-mute); }
        .cmdk__kbd, .cmdk__foot kbd {
          padding: 0.15rem 0.45rem;
          border-radius: 6px;
          border: 1px solid var(--line-strong);
          background: rgba(255, 255, 255, 0.04);
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--ink-mute);
        }
        .cmdk__list {
          flex: 1;
          overflow-y: auto;
          padding: 0.5rem;
          overscroll-behavior: contain;
        }
        .cmdk__group {
          padding: 0.6rem 0.7rem 0.25rem;
          font-family: var(--font-mono);
          font-size: 0.66rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--amber);
        }
        .cmdk__item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          width: 100%;
          padding: 0.6rem 0.7rem;
          border-radius: 10px;
          color: var(--ink-dim);
          font-size: 0.92rem;
          text-align: left;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .cmdk__item span { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .cmdk__item[data-active="true"] {
          background: rgba(91, 233, 255, 0.09);
          color: var(--ink);
        }
        .cmdk__go { opacity: 0; transition: opacity 0.15s ease; flex-shrink: 0; }
        .cmdk__item[data-active="true"] .cmdk__go { opacity: 0.7; }
        .cmdk__empty {
          padding: 1.6rem 1rem;
          text-align: center;
          color: var(--ink-mute);
          font-size: 0.9rem;
        }
        .cmdk__foot {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.65rem 1.1rem;
          border-top: 1px solid var(--line);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--ink-mute);
        }
        .cmdk__foot span { display: inline-flex; align-items: center; gap: 0.3rem; }
        .cmdk__brand { margin-left: auto; color: var(--cyan); }
      `}</style>
    </>
  );
};

export default CommandPalette;
