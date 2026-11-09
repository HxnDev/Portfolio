import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowUpRight, IconBrandGithub, IconPhoto } from '@tabler/icons-react';
import Reveal from '../common/Reveal';
import ProjectMedia from './ProjectMedia';

export function ProjectImage({ project, eager = false }) {
  const [failed, setFailed] = useState(false);
  if (!project.image || project.media?.src) return <ProjectMedia project={project} />;
  return (
    <div className="project-image">
      {failed ? (
        <div className="image-fallback">
          <IconPhoto size={34} />
          <span>{project.title}</span>
        </div>
      ) : (
        <img
          src={`/${project.image.replace(/^\//, '')}`}
          alt={`${project.title} interface preview`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          width="800"
          height="500"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export function ProjectActions({ project }) {
  return (
    <div className="actions project-actions">
      {project.liveUrl && (
        <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">
          Live demo
          <IconArrowUpRight size={16} />
        </a>
      )}
      {project.githubUrl && (
        <a className="button secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
          <IconBrandGithub size={16} />
          Code
        </a>
      )}
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
  const description = project.description;
  return (
    <Reveal>
      <article className={`card project-card ${featured ? 'project-card-featured' : ''}`}>
        {featured ? (
          <ProjectMedia project={project} />
        ) : (
          <Link
            className="project-image-link"
            to={`/projects/${project.id}`}
            aria-label={`Explore ${project.title}`}
          >
            <ProjectImage project={project} />
          </Link>
        )}
        <div className="project-copy">
          <p className="eyebrow">
            {project.category === 'web' ? 'Web application' : project.category} · {project.date}
          </p>
          <h3>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </h3>
          <p className="muted">{description}</p>
          {featured && (
            <div className="project-ownership">
              <h4>What I built</h4>
              <p>{project.overview || project.longDescription}</p>
            </div>
          )}
          <div className="tags">
            {project.technologies.slice(0, featured ? 3 : 4).map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <ProjectActions project={project} />
          <Link className="more-link" to={`/projects/${project.id}`}>
            Read project details <IconArrowUpRight size={16} />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
