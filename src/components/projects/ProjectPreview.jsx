import { useState } from 'react';
import {
  IconLayoutDashboard,
  IconBriefcase,
  IconChartBar,
  IconBook2,
  IconArrowRight,
  IconCheck,
  IconSearch,
} from '@tabler/icons-react';

const sampleJobs = [
  { role: 'Frontend Engineer', company: 'Example Studio', status: 0 },
  { role: 'Full-Stack Developer', company: 'Sample Labs', status: 1 },
  { role: 'Software Engineer', company: 'Demo Systems', status: 0 },
];
const stages = ['Applied', 'Interview', 'Offer'];
const recipes = [
  {
    name: 'Lemon & herb pasta',
    category: 'Quick',
    time: '20 min',
    ingredients: ['Pasta', 'Lemon', 'Fresh herbs', 'Olive oil'],
    method: 'Cook the pasta. Toss with lemon, olive oil and fresh herbs.',
  },
  {
    name: 'Chickpea bowl',
    category: 'Quick',
    time: '15 min',
    ingredients: ['Chickpeas', 'Cucumber', 'Tomatoes', 'Tahini'],
    method: 'Combine chickpeas and chopped vegetables. Finish with tahini dressing.',
  },
  {
    name: 'Roasted vegetables',
    category: 'Family',
    time: '40 min',
    ingredients: ['Seasonal vegetables', 'Garlic', 'Olive oil', 'Rosemary'],
    method: 'Chop the vegetables, season and roast until golden.',
  },
];

export default function ProjectPreview({ id }) {
  const [jobs, setJobs] = useState(sampleJobs);
  const [selected, setSelected] = useState(0);
  const [search, setSearch] = useState('');
  const visibleRecipes = recipes
    .map((item, index) => ({ ...item, index }))
    .filter(item => item.name.toLowerCase().includes(search.trim().toLowerCase()));
  const recipe = visibleRecipes.find(item => item.index === selected) || visibleRecipes[0];
  const isJobs = id === 'jobtracker';
  return (
    <div
      className={'product-demo ' + (isJobs ? 'jobs-demo' : 'recipes-demo')}
      role="group"
      aria-label={isJobs ? 'Interactive JobTracker example' : 'Interactive BiteBook example'}
    >
      <div className="demo-browser">
        <i />
        <i />
        <i />
        <span>{isJobs ? 'JobTracker' : 'BiteBook'}</span>
        <span className="demo-example">Interactive example</span>
      </div>
      <div className="demo-app">
        <div className="demo-sidebar" aria-hidden="true">
          <span className="demo-brand">
            {isJobs ? <IconBriefcase size={20} /> : <IconBook2 size={20} />}
          </span>
          <IconLayoutDashboard size={17} />
          <IconChartBar size={17} />
          <IconBook2 size={17} />
        </div>
        <div className="demo-main">
          {isJobs ? (
            <>
              <div className="demo-title">
                <div>
                  <span className="demo-overline">Your next chapter</span>
                  <p className="demo-app-title">Applications</p>
                </div>
                <span className="demo-count">{jobs.length} total</span>
              </div>
              <div className="demo-metrics">
                {stages.map((stage, index) => (
                  <div key={stage}>
                    <span>{stage}</span>
                    <strong>
                      {jobs
                        .filter(job => job.status === index)
                        .length.toString()
                        .padStart(2, '0')}
                    </strong>
                  </div>
                ))}
              </div>
              <div className="demo-jobs">
                {jobs.map((job, index) => (
                  <div key={job.company} className="demo-job">
                    <span className="demo-job-icon">{job.company[0]}</span>
                    <div>
                      <strong>{job.role}</strong>
                      <span>{job.company}</span>
                    </div>
                    <button
                      aria-label={'Change stage for ' + job.company}
                      title="Try changing the application stage"
                      onClick={() =>
                        setJobs(
                          jobs.map((item, i) =>
                            i === index ? { ...item, status: (item.status + 1) % 3 } : item
                          )
                        )
                      }
                    >
                      {stages[job.status]}
                      <IconArrowRight size={12} />
                    </button>
                  </div>
                ))}
              </div>
              <p className="demo-hint">
                Try an application status <IconArrowRight size={12} />{' '}
                <button onClick={() => setJobs(sampleJobs)}>Reset example</button>
              </p>
            </>
          ) : (
            <>
              <div className="demo-title">
                <div>
                  <span className="demo-overline">Made to be shared</span>
                  <p className="demo-app-title">The family cookbook</p>
                </div>
                <IconBook2 size={22} />
              </div>
              <label className="demo-search">
                <IconSearch size={14} />
                <span className="sr-only">Search example recipes</span>
                <input
                  placeholder="Find a recipe…"
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                />
              </label>
              <div className="demo-recipe-layout">
                <div className="demo-recipe-list">
                  {visibleRecipes.map(item => (
                    <button
                      key={item.name}
                      aria-pressed={recipe?.index === item.index}
                      onClick={() => setSelected(item.index)}
                    >
                      <span className="recipe-number">0{item.index + 1}</span>
                      <strong>{item.name}</strong>
                      <span>
                        {item.time} · {item.category}
                      </span>
                    </button>
                  ))}
                  {!visibleRecipes.length && <p>No recipes match.</p>}
                </div>
                <div className="demo-recipe-detail">
                  {recipe ? (
                    <>
                      <span className="demo-overline">Selected recipe</span>
                      <p className="demo-recipe-name">{recipe.name}</p>
                      <ul>
                        {recipe.ingredients.map(ingredient => (
                          <li key={ingredient}>
                            <IconCheck size={11} />
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                      <p>{recipe.method}</p>
                    </>
                  ) : (
                    <>
                      <p>Try another recipe search.</p>
                      <button className="more-link" onClick={() => setSearch('')}>
                        Clear search
                      </button>
                    </>
                  )}
                </div>
              </div>
              <p className="demo-hint">
                {visibleRecipes.length ? 'Choose a recipe to explore' : 'Try another search'}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="demo-caption">Example preview · Sample content, not live personal data</div>
    </div>
  );
}
