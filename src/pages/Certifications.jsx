import PageHead from '../components/common/PageHead';
import { CertificationCard } from '../components/common/Cards';
import CollectionFilters, { EmptyState } from '../components/common/CollectionFilters';
import useCollectionFilters from '../hooks/useCollectionFilters';
import { CERTIFICATIONS } from '../data/certifications';

const issuer = certification => certification.issuer.split('·')[0].trim();
const options = [
  { value: 'all', label: 'All issuers' },
  ...[...new Set(CERTIFICATIONS.map(issuer))].map(value => ({ value, label: value })),
];
export default function Certifications() {
  const controls = useCollectionFilters();
  const query = controls.search.trim().toLowerCase();
  const filtered = CERTIFICATIONS.filter(
    certification =>
      (controls.filter === 'all' || issuer(certification) === controls.filter) &&
      `${certification.title} ${certification.issuer}`.toLowerCase().includes(query)
  );
  return (
    <section className="container detail-page">
      <PageHead title="Always learning." section="certifications">
        Courses and specializations across cloud, machine learning and software engineering. Public
        credentials open where available.
      </PageHead>
      <CollectionFilters controls={controls} options={options} label="certifications" />
      <p className="result-count" role="status">
        {filtered.length} of {CERTIFICATIONS.length} credentials
      </p>
      {filtered.length ? (
        <div className="grid two">
          {filtered.map((certification, index) => (
            <CertificationCard key={certification.title + index} certification={certification} />
          ))}
        </div>
      ) : (
        <EmptyState reset={controls.reset} />
      )}
    </section>
  );
}
