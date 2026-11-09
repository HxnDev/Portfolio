import { IconSearch } from '@tabler/icons-react';

export default function CollectionFilters({ controls, options, label }) {
  return (
    <div className="collection-controls">
      <div className="filter-options" role="group" aria-label={`Filter ${label}`}>
        {options.map(option => (
          <button
            className="filter-button"
            key={option.value}
            aria-pressed={controls.filter === option.value}
            onClick={() => controls.setFilter(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <label className="search-field">
        <IconSearch size={19} aria-hidden="true" />
        <span className="sr-only">Search {label}</span>
        <input
          type="search"
          placeholder={`Search ${label}…`}
          value={controls.search}
          onChange={event => controls.setSearch(event.target.value)}
        />
      </label>
    </div>
  );
}

export function EmptyState({ reset }) {
  return (
    <div className="empty-state">
      <h2>No matches this time.</h2>
      <p>Try another search or clear your filters.</p>
      <button className="button secondary" onClick={reset}>
        Clear filters
      </button>
    </div>
  );
}
