import PageHead from '../components/common/PageHead';
import { ExperienceCard, EducationCard } from '../components/common/Cards';
import { EXPERIENCE, EDUCATION } from '../data/experience';

export default function Experience() {
  return (
    <section className="container detail-page">
      <PageHead title="Experience." section="experience">
        From enterprise systems to research platforms and adaptive robotics.
      </PageHead>
      <div className="experience-list">
        {EXPERIENCE.map((experience, index) => (
          <ExperienceCard key={experience.company} experience={experience} index={index} />
        ))}
      </div>
      <div className="section-heading">
        <h2>Education.</h2>
      </div>
      <div className="education-list">
        {EDUCATION.map(education => (
          <EducationCard key={education.school} education={education} />
        ))}
      </div>
    </section>
  );
}
