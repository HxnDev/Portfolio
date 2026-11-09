import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  IconArrowUpRight,
  IconCode,
  IconStack2,
  IconCloud,
  IconDeviceDesktop,
  IconServer,
  IconSettings,
} from '@tabler/icons-react';
import Globe from '../components/home/Globe';
import ContactSection from '../components/home/ContactSection';
import Section from '../components/common/Section';
import { ExperienceCard, RecommendationCard, CertificationCard } from '../components/common/Cards';
import ProjectCard from '../components/projects/ProjectCard';
import { EXPERIENCE } from '../data/experience';
import { RECOMMENDATIONS } from '../data/recommendations';
import { FEATURED_CERTIFICATIONS, SKILL_GROUPS } from '../data/overview';
import { projects } from '../data/projects.json';

const skillIcons = [IconDeviceDesktop, IconServer, IconCloud, IconSettings];
export default function Home() {
  useEffect(() => {
    document.title = 'Hassan Shahzad | Full-stack engineer';
  }, []);
  return (
    <>
      <div className="intro-world">
        <svg
          className="network"
          viewBox="0 0 1200 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g fill="none" stroke="currentColor" strokeWidth="0.6">
            <path d="M0 180 230 60 420 210 660 30 950 120 1200 0M0 180 150 430 420 210 550 460 950 120 1140 400 1200 0M0 650 150 430 330 650 550 460 800 600 1140 400 1200 730M230 60 150 430M420 210 800 600 950 120M330 650 660 810 800 600 1050 850 1200 730M0 650 330 650 660 810" />
          </g>
          <g fill="currentColor">
            {[
              [230, 60],
              [420, 210],
              [660, 30],
              [950, 120],
              [150, 430],
              [550, 460],
              [1140, 400],
              [330, 650],
              [800, 600],
            ].map(([cx, cy]) => (
              <circle key={cx} cx={cx} cy={cy} r="2.3" />
            ))}
          </g>
        </svg>
        <section className="container hero" id="home" tabIndex={-1} aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              Hassan Shahzad <span> / </span> Geneva, CH
            </p>
            <h1 id="hero-title">
              Engineering ideas.
              <br />
              Building experiences.
            </h1>
            <p className="hero-lead">
              Senior full-stack engineer creating intuitive interfaces and reliable systems.
            </p>
            <div className="actions">
              <Link to="/#projects" className="button primary">
                View my work <IconArrowUpRight size={18} />
              </Link>
              <Link to="/#contact" className="button secondary">
                Get in touch
              </Link>
            </div>
            <dl className="stats">
              <div>
                <IconStack2 size={25} stroke={1.5} />
                <dt>6+ years</dt>
                <dd>experience</dd>
              </div>
              <div>
                <IconCode size={25} stroke={1.5} />
                <dt>40+</dt>
                <dd>projects</dd>
              </div>
            </dl>
          </div>
          <Globe />
        </section>
        <section
          className="container about-section"
          id="about"
          tabIndex={-1}
          aria-labelledby="about-title"
          data-reveal
        >
          <div className="about-monogram">HS</div>
          <div>
            <h2 id="about-title">A little about me.</h2>
            <p>
              From robotics interfaces to research platforms, I turn complex problems into intuitive
              software. Based in Geneva, I bring 6+ years of experience building applications and
              leading teams.
            </p>
            <p className="meta">BSc Computer Science · FAST–NUCES</p>
            <a
              className="more-link"
              href="/assets/resume/hassan_resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download résumé <IconArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </div>
      <Section
        id="experience"
        title="Experience that spans industries."
        to="/experience"
        linkLabel="View full experience"
      >
        <div className="employers" aria-label="Experience at AICA, EPFL and IBM">
          <span>AICA</span>
          <span>EPFL</span>
          <span>IBM</span>
        </div>
        <div className="grid three">
          {EXPERIENCE.slice(0, 3).map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>
      </Section>
      <Section id="skills" title="Skills & tools.">
        <div className="grid four">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = skillIcons[index];
            return (
              <article className="card skill-card" key={group.name} data-reveal>
                <h3>
                  <Icon size={22} stroke={1.5} />
                  {group.name}
                </h3>
                <div className="tags">
                  {group.skills.map(skill => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Section>
      <Section
        id="projects"
        title="Featured projects."
        to="/projects"
        linkLabel="View all projects"
      >
        <div className="featured-projects">
          {['jobtracker', 'bitebook'].map(id => (
            <ProjectCard key={id} project={projects.find(project => project.id === id)} featured />
          ))}
        </div>
      </Section>
      <Section
        id="recommendations"
        title="Trusted by the people I work with."
        to="/recommendations"
        linkLabel="View all recommendations"
      >
        <div className="grid two">
          <RecommendationCard
            recommendation={RECOMMENDATIONS.find(rec => rec.name === 'Enrico Eberhard')}
            excerpt="He worked very effectively with our UX/UI designer"
          />
          <RecommendationCard
            recommendation={RECOMMENDATIONS.find(rec => rec.name === 'Kajhal Ramsunder')}
            excerpt="You are always giving us problems with solutions"
          />
        </div>
      </Section>
      <Section
        id="certifications"
        title="Always learning."
        to="/certifications"
        linkLabel="View all certifications"
      >
        <div className="grid three">
          {FEATURED_CERTIFICATIONS.map(certification => (
            <CertificationCard key={certification.title} certification={certification} />
          ))}
        </div>
      </Section>
      <ContactSection />
    </>
  );
}
