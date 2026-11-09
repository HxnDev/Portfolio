import { Navigate, useSearchParams } from 'react-router-dom';
import PageHead from '../components/common/PageHead';
import ProjectCard from '../components/projects/ProjectCard';
import CollectionFilters, { EmptyState } from '../components/common/CollectionFilters';
import useCollectionFilters from '../hooks/useCollectionFilters';
import { projects } from '../data/projects.json';

const labels = {
  web: 'Web',
  ai: 'AI / ML',
  mobile: 'Mobile',
  game: 'Games',
  games: 'Games',
  tool: 'Tools',
  tools: 'Tools',
  security: 'Security',
  blockchain: 'Blockchain',
  graphics: 'Graphics',
};
const options = [
  { value: 'all', label: 'All projects' },
  ...[...new Set(projects.map(project => project.category))].map(value => ({
    value,
    label: labels[value] || value,
  })),
];

export default function Projects() {
  const controls = useCollectionFilters();
  const [params] = useSearchParams();
  const legacyProject = params.get('project');
  const query = controls.search.trim().toLowerCase();
  const filtered = projects.filter(
    project =>
      (controls.filter === 'all' || project.category === controls.filter) &&
      [project.title, project.description, ...project.technologies, ...(project.libraries || [])]
        .join(' ')
        .toLowerCase()
        .includes(query)
  );
  if (legacyProject && projects.some(project => project.id === legacyProject))
    return <Navigate to={`/projects/${legacyProject}`} replace />;
  return (
    <section className="container detail-page">
      <PageHead title="All projects." section="projects">
        Products, experiments and everything I’ve learned along the way.
      </PageHead>
      <CollectionFilters controls={controls} options={options} label="projects" />
      <p className="result-count" role="status">
        {filtered.length} of {projects.length} projects
      </p>
      {filtered.length ? (
        <div className="grid two archive-projects">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <EmptyState reset={controls.reset} />
      )}
    </section>
  );
}
