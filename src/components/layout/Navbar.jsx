import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconMenu2, IconX, IconSun, IconMoon } from '@tabler/icons-react';

const links = [
  ['home', 'Home'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['projects', 'Projects'],
  ['recommendations', 'Recommendations'],
  ['certifications', 'Courses'],
  ['contact', 'Contact'],
];

export default function Navbar() {
  const menuButton = useRef(null);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');
  const [active, setActive] = useState('home');
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    if (open) document.getElementById('site-nav')?.querySelector('a')?.focus();
  }, [open]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff');
    try {
      localStorage.setItem('hxndev-theme', theme);
    } catch {
      /* Theme still works without storage. */
    }
  }, [theme]);
  useEffect(() => {
    const close = event => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  useEffect(() => {
    if (location.pathname !== '/' || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -65% 0px' }
    );
    links.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [location.pathname]);
  const current = location.pathname === '/' ? active : location.pathname.split('/')[1];
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link className="wordmark" to="/#home" aria-label="hxndev home">
          hxndev<span>.</span>
        </Link>
        <nav
          aria-label="Main navigation"
          id="site-nav"
          className={open ? 'navigation is-open' : 'navigation'}
        >
          {links.map(([id, label]) => (
            <Link
              key={id}
              to={`/#${id}`}
              aria-current={current === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            className="nav-resume"
            href="/assets/resume/hassan_resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Résumé ↗
          </a>
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <IconSun size={19} /> : <IconMoon size={19} />}
          </button>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <IconX size={21} /> : <IconMenu2 size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}
