import { useSearchParams } from 'react-router-dom';

export default function useCollectionFilters() {
  const [params, setParams] = useSearchParams();
  const search = params.get('q') || '';
  const filter = params.get('filter') || 'all';
  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === 'all') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true, preventScrollReset: true });
  };
  return {
    search,
    filter,
    setSearch: value => update('q', value),
    setFilter: value => update('filter', value),
    reset: () => setParams({}, { replace: true }),
  };
}
