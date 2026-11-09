import { lazy, Suspense, useEffect, useLayoutEffect } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import useScrollReveal from './hooks/useScrollReveal';

const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Experience = lazy(() => import('./pages/Experience'));
const Recommendations = lazy(() => import('./pages/Recommendations'));
const Certifications = lazy(() => import('./pages/Certifications'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteEffects() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  useScrollReveal(pathname);
  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
      });
      target?.focus({ preventScroll: true });
    } else if (navigationType !== 'POP') {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.getElementById('main')?.focus({ preventScroll: true });
    }
  }, [pathname, hash, key, navigationType]);
  return null;
}

function JobFitRedirect() {
  useEffect(() => {
    window.location.replace('https://jobfit.hxndev.com');
  }, []);
  return (
    <p className="container section">
      Opening <a href="https://jobfit.hxndev.com">JobFit ↗</a>…
    </p>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="container page-loading" role="status">
              Opening page…
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            <Route path="/terminal" element={<Navigate to="/" replace />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/JobFit/*" element={<JobFitRedirect />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <RouteEffects />
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
