import { useParams } from 'react-router-dom';
import PageHead from '../components/common/PageHead';
import { MoreLink } from '../components/common/Section';
import { ProjectImage, ProjectActions } from '../components/projects/ProjectCard';
import { projects } from '../data/projects.json';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(item => item.id === id);
  if (!project) return <NotFound />;
  return (
    <article className="container detail-page project-detail">
      <PageHead title={project.title} section="projects">
        {project.description}
      </PageHead>
      <ProjectActions project={project} />
      <ProjectImage project={project} eager />
      <div className="detail-body">
        <p className="eyebrow">
          {project.category} · {project.date}
        </p>
        <h2>About the project.</h2>
        <p>{project.longDescription || project.description}</p>
        <div className="tags">
          {project.technologies.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {project.features?.length > 0 && (
          <>
            <h2>Highlights.</h2>
            <ul>
              {project.features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </>
        )}
        <MoreLink to="/projects">Browse all projects</MoreLink>
      </div>
    </article>
  );
}
