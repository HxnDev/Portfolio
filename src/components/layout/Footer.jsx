import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="container site-footer">
      <Link to="/#home" className="wordmark">
        hxndev<span>.</span>
      </Link>
      <div className="footer-links">
        <Link to="/recommendations">Recommendations</Link>
        <Link to="/certifications">Certifications</Link>
        <a href="/assets/resume/hassan_resume.pdf">Résumé ↗</a>
      </div>
      <span>© {new Date().getFullYear()} Hassan Shahzad</span>
    </footer>
  );
}
