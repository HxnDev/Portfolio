import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <section className="container detail-page empty-state">
      <p className="eyebrow">404</p>
      <h1>That page isn’t here.</h1>
      <p>Let’s get you back to the good stuff.</p>
      <Link className="button primary" to="/">
        Back to home ↗
      </Link>
    </section>
  );
}
