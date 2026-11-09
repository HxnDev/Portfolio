import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  IconArrowUpRight,
  IconArrowDown,
  IconMapPin,
  IconCloud,
  IconDeviceDesktop,
  IconServer,
  IconSettings,
} from '@tabler/icons-react';
import Globe from '../components/home/Globe';
import Organizations from '../components/home/Organizations';
import ContactSection from '../components/home/ContactSection';
import Section from '../components/common/Section';
import Reveal from '../components/common/Reveal';
import { ExperienceCard, RecommendationCard, CertificationCard } from '../components/common/Cards';
import ProjectCard from '../components/projects/ProjectCard';
import { EXPERIENCE, EDUCATION } from '../data/experience';
import { RECOMMENDATIONS } from '../data/recommendations';
import { FEATURED_CERTIFICATIONS, SKILL_GROUPS } from '../data/overview';
import { projects } from '../data/projects.json';

const skillIcons = [IconDeviceDesktop, IconServer, IconCloud, IconSettings];
export default function Home() {
  useEffect(() => {
    document.title = 'Hassan Shahzad | Senior Full-Stack Engineer';
  }, []);
  return (
    <>
      <section className="hero" id="home" tabIndex={-1} aria-labelledby="hero-title">
        <Globe />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-welcome">Hello, I’m glad you’re here</p>
            <h1 id="hero-title">
              I’m Hassan
              <br />
              Shahzad<span>.</span>
            </h1>
            <p className="hero-role">Senior Full-Stack Engineer</p>
            <p className="hero-lead">
              I build software people rely on. From robotics at AICA to research at EPFL and
              enterprise systems at IBM.
            </p>
            <div className="actions">
              <Link to="/#projects" className="button primary">
                Explore my work <IconArrowUpRight size={18} />
              </Link>
              <Link to="/#contact" className="button secondary">
                Let’s talk
              </Link>
            </div>
            <dl className="stats">
              <div>
                <dt>6+</dt>
                <dd>Years of experience</dd>
              </div>
              <div>
                <dt>40+</dt>
                <dd>Projects delivered</dd>
              </div>
              <div>
                <dt>
                  <IconMapPin size={18} />
                  Geneva
                </dt>
                <dd>Switzerland</dd>
              </div>
            </dl>
          </div>
        </div>
        <Link
          to="/#organizations"
          className="scroll-cue"
          aria-label="Explore organizations and experience"
        >
          <IconArrowDown size={18} />
          <span>Scroll to explore</span>
        </Link>
      </section>
      <Section
        id="organizations"
        title="Organizations I’ve worked with"
        eyebrow="Across teams, industries and borders"
        className="organizations-band"
      >
        <Organizations />
      </Section>
      <Section
        id="experience"
        title="Professional experience"
        eyebrow="The work behind the résumé"
        to="/experience"
        linkLabel="Explore my full experience"
      >
        <div className="grid two home-experience">
          {EXPERIENCE.slice(0, 4).map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>
      </Section>
      <Section id="education" title="Education" eyebrow="Where it started">
        {EDUCATION.map(education => (
          <Reveal key={education.school}>
            <article className="card education-feature">
              <div className="education-identity">
                <img
                  src="/logos/fast.png"
                  alt="FAST–NUCES"
                  width="180"
                  height="40"
                  loading="lazy"
                />
                <span className="eyebrow">2018 — 2022</span>
              </div>
              <div>
                <p className="eyebrow">FAST–NUCES · Islamabad, Pakistan</p>
                <h3>{education.degree}</h3>
                <p className="muted">{education.school}</p>
                <a
                  className="more-link"
                  href="/assets/resume/hassan_resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View résumé <IconArrowUpRight size={17} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </Section>
      <Section id="skills" title="Skills & tools" eyebrow="From interface to infrastructure">
        <div className="grid four">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = skillIcons[index];
            return (
              <Reveal key={group.name}>
                <article className="card skill-card">
                  <Icon size={26} stroke={1.4} />
                  <h3>{group.name}</h3>
                  <div className="tags">
                    {group.skills.map(skill => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <Section
        id="projects"
        title="Selected projects"
        eyebrow="Ideas turned into working products"
        to="/projects"
        linkLabel="Explore all projects"
      >
        <div className="featured-projects">
          {['viora', 'nexus', 'odyssey', 'jobfit', 'mancave', 'afterlight'].map(id => (
            <ProjectCard key={id} project={projects.find(project => project.id === id)} featured />
          ))}
        </div>
      </Section>
      <Section
        id="recommendations"
        title="What people say"
        eyebrow="The people behind the work"
        to="/recommendations"
        linkLabel="Read all recommendations"
      >
        <div className="grid two featured-recommendations">
          <RecommendationCard
            recommendation={RECOMMENDATIONS.find(rec => rec.name === 'Enrico Eberhard')}
          />
          <RecommendationCard
            recommendation={RECOMMENDATIONS.find(rec => rec.name === 'Kajhal Ramsunder')}
          />
        </div>
      </Section>
      <Section
        id="certifications"
        title="Always learning"
        eyebrow="Courses & specializations"
        to="/certifications"
        linkLabel="Browse all certifications"
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
