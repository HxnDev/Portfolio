import PageHead from '../components/common/PageHead';
import { RecommendationCard } from '../components/common/Cards';
import CollectionFilters, { EmptyState } from '../components/common/CollectionFilters';
import useCollectionFilters from '../hooks/useCollectionFilters';
import { RECOMMENDATIONS } from '../data/recommendations';

const options = [
  { value: 'all', label: 'Everyone' },
  { value: 'managers', label: 'Managers' },
  { value: 'colleagues', label: 'Colleagues' },
];
export default function Recommendations() {
  const controls = useCollectionFilters();
  const query = controls.search.trim().toLowerCase();
  const filtered = RECOMMENDATIONS.filter(
    rec =>
      (controls.filter === 'all' || (rec.group || 'colleagues') === controls.filter) &&
      `${rec.name} ${rec.title} ${rec.quote}`.toLowerCase().includes(query)
  );
  return (
    <section className="container detail-page">
      <PageHead title="Good people. Kind words." section="recommendations">
        From the managers, teammates and partners I’ve worked alongside.
      </PageHead>
      <CollectionFilters controls={controls} options={options} label="recommendations" />
      <p className="result-count" role="status">
        {filtered.length} of {RECOMMENDATIONS.length} recommendations
      </p>
      {filtered.length ? (
        <div className="recommendation-list">
          {filtered.map(recommendation => (
            <RecommendationCard key={recommendation.name} recommendation={recommendation} />
          ))}
        </div>
      ) : (
        <EmptyState reset={controls.reset} />
      )}
    </section>
  );
}
