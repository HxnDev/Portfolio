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
import {
  ExperienceCard,
  RecommendationCard,
  CertificationCard,
  EducationCard,
} from '../components/common/Cards';
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
        <Link to="/#about" className="scroll-cue" aria-label="Read about Hassan">
          <IconArrowDown size={18} />
          <span>Scroll to explore</span>
        </Link>
      </section>
      <Section
        id="about"
        title="A little about me"
        eyebrow="The person behind the products"
        className="about-band"
      >
        <Reveal>
          <article className="about-layout">
            <div className="about-portrait">
              <img
                src="/images/profile.jpg"
                alt="Hassan Shahzad"
                width="440"
                height="520"
                loading="lazy"
              />
              <span>Based in Geneva, Switzerland</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow">Engineer. Builder. Curious by default.</p>
              <h3>
                I care about how software feels.
                <br />
                And how well it works.
              </h3>
              <p>
                I’m Hassan, a full-stack engineer who enjoys turning complicated problems into
                products that feel simple to use. My work has taken me from enterprise systems at
                IBM to research platforms at EPFL and robotics software at AICA.
              </p>
              <p>
                Outside work, I build tools for the things I care about: staying healthy, keeping
                life organized, remembering journeys and collecting the things I love. That
                curiosity is behind the personal projects you’ll find here.
              </p>
              <div className="tags">
                <span>Thoughtful interfaces</span>
                <span>Reliable systems</span>
                <span>Useful everyday tools</span>
              </div>
              <Link to="/#contact" className="more-link">
                Let’s build something together <IconArrowUpRight size={18} />
              </Link>
            </div>
          </article>
        </Reveal>
      </Section>
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
        <div className="education-list">
          {EDUCATION.map(education => (
            <EducationCard key={education.school} education={education} />
          ))}
        </div>
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
        title="Featured projects"
        eyebrow="Ideas turned into working products"
        to="/projects"
        linkLabel="Explore all projects"
      >
        <div className="featured-projects">
          {['viora', 'nexus', 'odyssey', 'afterlight', 'jobfit', 'mancave'].map(id => (
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
            excerpt={
              RECOMMENDATIONS.find(rec => rec.name === 'Enrico Eberhard')
                .quote.split('Hassan used AI tools')[0]
                .trim() + ' …'
            }
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
