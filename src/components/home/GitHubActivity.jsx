import { useEffect, useState } from 'react';
import { IconBrandGithub, IconGitCommit, IconArrowUpRight } from '@tabler/icons-react';

const USER = 'HxnDev';
const CACHE_KEY = 'gh-activity-v2';
const CACHE_TTL = 60 * 60 * 1000; // 1 hour — stays well within unauthenticated rate limits

const relTime = iso => {
  const mins = Math.max(1, Math.round((Date.now() - new Date(iso)) / 60000));
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.round(days / 30)}mo ago`;
};

/**
 * Live "proof of life" straight from the public GitHub API: profile stats and
 * the latest push commits. Cached in localStorage for an hour; renders nothing
 * if the API is unreachable so it can never break the page.
 */
const GitHubActivity = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
        if (cached && Date.now() - cached.at < CACHE_TTL) {
          setData(cached.data);
          return;
        }
      } catch {
        /* bad cache — refetch */
      }

      try {
        // The events API often returns push events with trimmed (empty) commit
        // payloads, so commits are read from the most recently pushed repos.
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USER}`),
          fetch(`https://api.github.com/users/${USER}/repos?sort=pushed&per_page=3`),
        ]);
        if (!userRes.ok || !reposRes.ok) return;
        const user = await userRes.json();
        const repos = await reposRes.json();

        const perRepo = await Promise.all(
          repos.map(r =>
            fetch(`https://api.github.com/repos/${r.full_name}/commits?per_page=3`)
              .then(res => (res.ok ? res.json() : []))
              .then(list =>
                (Array.isArray(list) ? list : []).map(c => ({
                  repo: r.name,
                  msg: c.commit.message.split('\n')[0],
                  url: c.html_url,
                  at: c.commit.author?.date || c.commit.committer?.date,
                }))
              )
              .catch(() => [])
          )
        );

        const commits = perRepo
          .flat()
          .filter(c => c.at)
          .sort((a, b) => new Date(b.at) - new Date(a.at))
          .slice(0, 4);

        const next = {
          repos: user.public_repos,
          followers: user.followers,
          commits,
        };
        if (!cancelled) {
          setData(next);
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data: next }));
          } catch {
            /* storage full — fine */
          }
        }
      } catch {
        /* offline / rate-limited — section simply doesn't render */
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!data || data.commits.length === 0) return null;

  return (
    <section className="section container">
      <div className="section-head">
        <div>
          <span className="section-index" data-reveal>
            Proof of life
          </span>
          <h2 className="section-title" data-reveal data-reveal-delay={80}>
            Live from GitHub
          </h2>
        </div>
        <a
          href={`https://github.com/${USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost"
          data-reveal
          data-reveal-delay={120}
        >
          <IconBrandGithub size={17} />
          <span>
            {data.repos} repos · {data.followers} followers
          </span>
          <IconArrowUpRight size={17} />
        </a>
      </div>

      <div className="gh-feed">
        {data.commits.map((c, i) => (
          <a
            key={c.url}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="gh-commit"
            data-reveal
            data-reveal-delay={i * 70}
          >
            <IconGitCommit size={18} className="gh-commit__icon" />
            <span className="gh-commit__msg">{c.msg}</span>
            <span className="gh-commit__meta">
              <span className="gh-commit__repo">{c.repo}</span>
              <span className="gh-commit__time">{relTime(c.at)}</span>
            </span>
          </a>
        ))}
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
};

export default GitHubActivity;
