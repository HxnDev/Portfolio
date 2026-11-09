import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function PageHead({ title, children, section }) {
  useEffect(() => {
    document.title = `${title.replace(/\.$/, '')} | Hassan Shahzad`;
  }, [title]);
  return (
    <div className="page-head">
      <Link className="back-link" to={`/#${section}`}>
        ← Back to overview
      </Link>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
