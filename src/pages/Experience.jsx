import PageHead from '../components/common/PageHead';
import { ExperienceCard } from '../components/common/Cards';
import { EXPERIENCE, EDUCATION } from '../data/experience';

export default function Experience() {
  return (
    <section className="container detail-page">
      <PageHead title="Experience." section="experience">
        From enterprise systems to research platforms and adaptive robotics.
      </PageHead>
      <div className="experience-list">
        {EXPERIENCE.map((experience, index) => (
          <ExperienceCard key={experience.company} experience={experience} index={index} full />
        ))}
      </div>
      <div className="section-heading">
        <h2>Education.</h2>
      </div>
      {EDUCATION.map(education => (
        <article className="card education-card" key={education.school}>
          <h3>{education.degree}</h3>
          <p>{education.school}</p>
          <p className="meta">
            {education.date} · {education.location}
          </p>
        </article>
      ))}
    </section>
  );
}
