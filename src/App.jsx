import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Sun,
  Moon,
  Menu,
  X,
  Code2,
  Database,
  BriefcaseBusiness,
  GraduationCap,
  FileDown
} from 'lucide-react';

// ==============================
// Personal Information
// ==============================
const profile = {
  name: 'G Tarun Kumar',
  headline: 'Software Engineer',
  role: 'Python Full Stack Developer',
  email: 'tarungunnam1111@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tarun-gunnam/',
  github: 'https://github.com/G-Tarun-Kumar',
  location: 'Bengaluru, India',
  resume: '/Tarun-Kumar-Resume.pdf'
};

// ==============================
// Technical Skills
// ==============================
const skills = [
  {
    group: 'Programming',
    items: ['Python', 'JavaScript', 'SQL']
  },
  {
    group: 'Backend & APIs',
    items: ['Django', 'Django REST APIs', 'REST APIs', 'Django ORM']
  },
  {
    group: 'Frontend',
    items: ['ReactJS', 'HTML5', 'CSS3', 'Responsive UI']
  },
  {
    group: 'Databases & Tools',
    items: ['MySQL', 'SQLite', 'Git', 'GitHub']
  }
];

// ==============================
// Projects
// ==============================
const projects = [
  {
    n: '01',
    title: 'Air & Water Quality Index Monitoring System',
    category: 'Full Stack',
    year: '2025',
    mark: 'AQI / WQI',
    desc:
      'A web application for monitoring and visualizing Air Quality Index (AQI) and Water Quality Index (WQI), with environmental data processing and dashboard views.',
    stack: ['ReactJS', 'Django REST APIs', 'Python'],
    github:
      'https://github.com/G-Tarun-Kumar/AIR-And-WATER-QUALITY-INDEX-And-ENVIRONMENT-MONITORING'
  },
  {
    n: '02',
    title: 'Vehicle Activity Monitoring System',
    category: 'Backend',
    year: '2024',
    mark: 'ANPR',
    desc:
      'A vehicle activity monitoring application featuring OCR-based vehicle number extraction, relational database storage, and vehicle entry-log management.',
    stack: ['Python', 'SQL', 'REST APIs', 'OCR'],
    github:
      'https://github.com/G-Tarun-Kumar/MONITORING-VEHICLE-ACTIVITY-FOR-RESIDENTIAL-SOCIETIES'
  },
  {
    n: '03',
    title: 'Library Management System',
    category: 'Full Stack',
    year: '2026',
    mark: 'LIBRARY',
    desc:
      'A Django-based library application for managing book records with CRUD operations, database models, forms, URL routing, and validation.',
    stack: ['Python', 'Django', 'SQL / MySQL'],
    github: ''
  }
];

// ==============================
// Experience
// ==============================
const experience = [
  {
    date: 'Feb 2026 — Aug 2026',
    title: 'Python Full Stack Intern',
    org: 'Dhee Coding Labs (DCL)',
    place: 'Bengaluru, India',
    bullets: [
      'Developed web application features and backend services using Python, Django, JavaScript, ReactJS, SQL, and REST APIs.',
      'Integrated frontend components with backend services and supported relational database workflows using Django ORM.',
      'Created SQL queries for retrieving, filtering, joining, aggregating, and managing application data.',
      'Used Git and GitHub for version control and technical collaboration.'
    ]
  }
];

// ==============================
// Education
// ==============================
const education = {
  degree: 'B.Tech in Computer Science and Technology',
  institution: 'Presidency University, Bengaluru',
  dates: '2021 — 2025',
  specialization:
    'Specialization in Artificial Intelligence & Machine Learning',
  result: 'CGPA: 6.59 / 10'
};

// ==============================
// Reusable Section Heading
// ==============================
function Heading({ eyebrow, title, desc }) {
  return (
    <div className="heading">
      <small>{eyebrow}</small>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}

// ==============================
// Main Portfolio Component
// ==============================
export default function App() {
  const [dark, setDark] = useState(true);
  const [filter, setFilter] = useState('All');
  const [menu, setMenu] = useState(false);

  const filters = ['All', 'Full Stack', 'Backend'];

  const shown =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  const closeMenu = () => setMenu(false);

  return (
    <div className={dark ? 'site dark' : 'site light'}>
      {/* NAVIGATION */}
      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          <b>TK</b> TarunKumar<span>.</span>
        </a>

        <nav className={menu ? 'links open' : 'links'}>
          {[
            ['About', 'about'],
            ['Skills', 'skills'],
            ['Projects', 'projects'],
            ['Experience', 'experience'],
            ['Contact', 'contact']
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <div className="navright">
          <button
            className="round"
            onClick={() => setDark(!dark)}
            aria-label="Toggle color theme"
            title="Toggle color theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a className="navcta" href="#contact">
            Let’s talk ↗
          </a>

          <button
            className="round hamburger"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
            {menu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero wrap">
          <div className="intro">
            <div className="availability">
              <i />
              OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES
            </div>

            <p className="hello">Hello, I’m {profile.name}</p>

            <h1>
              Building useful
              <br />
              things with <em>code.</em>
            </h1>

            <p className="summary">
              {profile.headline} focused on Python, backend development, and
              full-stack web applications. I enjoy turning practical problems
              into reliable, user-friendly software.
            </p>

            <div className="buttons">
              <a className="btn primary" href="#projects">
                Explore my work <ArrowDown size={15} />
              </a>

              <a
                className="btn secondary"
                href={profile.resume}
                download
              >
                <FileDown size={15} /> Download resume
              </a>
            </div>

            <div className="social">
              <span>
                <MapPin size={14} /> {profile.location}
              </span>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={14} /> LinkedIn ↗
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={14} /> GitHub ↗
              </a>
            </div>
          </div>

          {/* Decorative Code Illustration */}
          <div className="art">
            <div className="gridbg" />
            <div className="orbit one" />
            <div className="orbit two" />

            <div className="code">
              <div className="codetop">
                <i />
                <i />
                <i />
                <span>developer.py</span>
              </div>

              <pre>
                <b>class</b> Developer:
                {'\n'}  name = <em>"Tarun"</em>
                {'\n'}  stack = [
                {'\n'}    <em>"Python"</em>,
                {'\n'}    <em>"Django"</em>,
                {'\n'}    <em>"React"</em>
                {'\n'}  ]
                {'\n'}
                <b>def</b> build(self):
                {'\n'}  <b>return</b> <em>"solutions"</em>
              </pre>
            </div>

            <div className="tag tag1">Py&nbsp; Python</div>
            <div className="tag tag2">⚛ React</div>

            <div className="artcaption">
              — BUILD · LEARN · IMPROVE
            </div>
          </div>

          <a className="scroll" href="#about">
            — Scroll to explore
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="wrap block">
          <Heading
            eyebrow="01 / ABOUT"
            title={
              <>
                Curious by nature.
                <br />
                <em>Engineer by choice.</em>
              </>
            }
          />

          <div className="about">
            <div>
              <p className="lead">
                I’m a Computer Science graduate who enjoys building practical
                applications and learning how systems work end to end.
              </p>

              <p>
                My hands-on experience spans Python and Django backend
                development, REST API integration, SQL databases, and
                responsive interfaces with ReactJS. Through internship work
                and projects, I’ve practiced debugging, data validation, and
                collaborating with version-control workflows.
              </p>

              <p>
                I’m looking for an opportunity to contribute, keep learning,
                and help deliver software that solves real problems.
              </p>

              <a className="textlink" href="#contact">
                Let’s connect <ArrowRight size={15} />
              </a>
            </div>

            <div className="stats">
              <div>
                <Code2 />
                <b>3</b>
                <span>Featured projects</span>
              </div>

              <div>
                <BriefcaseBusiness />
                <b>Internship</b>
                <span>Practical experience</span>
              </div>

              <div>
                <Database />
                <b>Python + SQL</b>
                <span>Core toolkit</span>
              </div>

              <div>
                <ArrowUpRight />
                <b>Full stack</b>
                <span>Development focus</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="wrap block">
          <Heading
            eyebrow="02 / TOOLKIT"
            title={
              <>
                Tools I work <em>with.</em>
              </>
            }
            desc="A practical toolkit for building web applications, APIs, and data-backed features."
          />

          <div className="skills">
            {skills.map((skill, index) => (
              <article className="skill" key={skill.group}>
                <small>0{index + 1}</small>
                <h3>{skill.group}</h3>

                <div>
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="wrap block">
          <Heading
            eyebrow="03 / SELECTED WORK"
            title={
              <>
                Projects with a <em>purpose.</em>
              </>
            }
            desc="Applications demonstrating my work across backend logic, APIs, databases, and user interfaces."
          />

          <div className="projectbar">
            <small>
              SELECTED PROJECTS ({String(shown.length).padStart(2, '0')})
            </small>

            <div>
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={filter === item ? 'active' : ''}
                  aria-pressed={filter === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="projects">
            {shown.map((project) => (
              <article className="project" key={project.n}>
                <div className={`visual v${project.n}`}>
                  <small>
                    PROJECT / {project.n}
                    <span>{project.year}</span>
                  </small>

                  <strong>{project.mark}</strong>
                  <i />

                  <div className="lines">
                    <b />
                    <b />
                    <b />
                  </div>
                </div>

                <div className="projectbody">
                  <small>
                    {project.category}
                    <span>{project.year}</span>
                  </small>

                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>

                  <div className="pills">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="projectfoot">
                    <span>PROJECT REPOSITORY</span>

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        title="View source code on GitHub"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '7px',
                          color: 'var(--accent)',
                          fontSize: '10px',
                          textDecoration: 'none'
                        }}
                      >
                        <Github size={15} />
                        View on GitHub
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span title="Repository link not added yet">
                        Personal project
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="note">
            Explore the repositories to review the source code for my
            environmental monitoring and vehicle monitoring projects.
          </p>
        </section>

        {/* EXPERIENCE AND EDUCATION */}
        <section id="experience" className="wrap block">
          <Heading
            eyebrow="04 / EXPERIENCE"
            title={
              <>
                Experience & <em>education.</em>
              </>
            }
            desc="The experience and education behind my engineering foundation."
          />

          <div className="timeline">
            <div>
              <div className="label">
                <BriefcaseBusiness size={16} /> EXPERIENCE
              </div>

              {experience.map((item) => (
                <article className="item" key={item.title}>
                  <small>{item.date}</small>
                  <h3>{item.title}</h3>

                  <p className="org">
                    {item.org} · {item.place}
                  </p>

                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div>
              <div className="label">
                <GraduationCap size={17} /> EDUCATION
              </div>

              <article className="item">
                <small>{education.dates}</small>
                <h3>{education.degree}</h3>
                <p className="org">{education.institution}</p>
                <p>{education.specialization}</p>
                <span className="result">{education.result}</span>
              </article>

              <div className="certs">
                <h4>Certifications</h4>
                <p>Machine Learning — Simplilearn</p>
                <p>Introduction to Python</p>
                <p>CSS Basics — HackerRank</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="wrap contact">
          <div className="contactbox">
            <small>05 / CONTACT</small>

            <h2>
              Have a good problem?
              <br />
              <em>Let’s build a solution.</em>
            </h2>

            <p>
              I’m open to entry-level software development opportunities
              and conversations about building useful products.
            </p>

            <a
              className="btn primary"
              href={`mailto:${profile.email}?subject=${encodeURIComponent(
                'Software Development Opportunity'
              )}`}
            >
              <Mail size={16} /> Email me ↗
            </a>

            <div className="contactlinks">
              <a href={`mailto:${profile.email}`}>
                <Mail size={14} /> {profile.email}
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={14} /> LinkedIn ↗
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={14} /> GitHub ↗
              </a>

              <span>
                <MapPin size={14} /> {profile.location}
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer wrap">
        <a className="brand" href="#home">
          <b>TK</b> Tarun_Kumar<span>.</span>
        </a>

        <p>Designed with intention. Built with React.</p>

        <a href="#home">Back to top ↑</a>

        <small>© {new Date().getFullYear()} G Tarun Kumar</small>
      </footer>
    </div>
  );
}
