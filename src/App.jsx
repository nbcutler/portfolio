import { useState, useEffect } from 'react'

// Data for the portfolio - customize this!
const portfolioData = {
  name: "Nolan Cutler",
  title: "Data Governance Analyst",
  tagline: "Building trusted data foundations through governance frameworks, automation, and strategic insights at TIAA.",
  email: "nbcutler@smu.edu",
  phone: "(214) 683-5480",
  linkedin: "linkedin.com/in/nolancutler",
  github: "github.com/ncutler",
  location: "Dallas, TX",

  stats: [
    { value: "$2M+", label: "Budget Accuracy Improvements through Data Engineering" },
    { value: "300%", label: "Faster Data Quality Checks with Tailored Data Solution" },
    { value: "$20K", label: "Monthly Savings via Program Written in Python & Streamlit" },
    { value: "2K+", label: "Daily User Interactions Tracked via Engineered Database and Pipeline" },
  ],

  expertise: [
    { area: "Data Governance & Stewardship", level: 95 },
    { area: "Metadata Management (Collibra, Purview)", level: 92 },
    { area: "Data Quality & Validation", level: 90 },
    { area: "Python & Automation (Streamlit, pandas)", level: 88 },
    { area: "SQL & Data Warehousing", level: 90 },
    { area: "BI & Visualization (Tableau, Power BI)", level: 85 },
  ],

  experience: [
    {
      role: "Data Governance Analyst",
      company: "TIAA",
      period: "Feb 2025 — Present",
      highlights: [
        "Develop and document data governance frameworks and policies, translating enterprise objectives into actionable standards",
        "Design and deploy Python- and Streamlit-based validation applications, accelerating data quality checks by 200–300%",
        "Curate end-to-end data lineage and metadata in Collibra, delivering transparency across HR and Finance data assets",
        "Identify and resolve critical data architecture issues, improving HR budget forecasting accuracy by $2M annually"
      ]
    },
    {
      role: "Marketing Data Analyst",
      company: "DriveTime",
      period: "Jun 2024 — Oct 2024",
      highlights: [
        "Designed and executed A/B tests on UI changes, driving a projected $2M annual revenue uplift",
        "Built a scalable production database to track 2,000+ daily user interactions",
        "Delivered insights using SQL, Python, and Tableau dashboards, increasing chat engagement by 15%"
      ]
    }
  ],

  certifications: [
    "Microsoft Excel Expert",
    "Certified Scrum Master",
    "DAMA-DMBOK Certified Data Management Professional",
    "CAPM (In Progress)"
  ],

  tools: [
    "Collibra", "Purview", "Databricks", "Snowflake", "AWS/S3", "Azure",
    "Airflow", "Alteryx", "Python", "Streamlit", "SQL", "Tableau",
    "Power BI", "Salesforce", "Workday/WQL", "Jira", "GitLab/GitHub"
  ],

  projects: [
    {
      title: "Dynamic Ticket Pricing Model",
      description: "Led a 5-person team to build a dynamic ticket pricing model for SMU Athletics leveraging 3 years of historical data and factors such as opponent ranking, game popularity, and weather conditions.",
      tags: ["Regression", "Tableau", "Forecasting", "Team Lead"],
      metrics: "20% improved forecast accuracy, 15% revenue uplift"
    },
    {
      title: "Policing Data & Trends Analysis",
      description: "Conducted large-scale analysis of public crime and policing datasets using Python (pandas, geolocation APIs), uncovering trends by geography and time with interactive Tableau dashboards.",
      tags: ["Python", "Geolocation APIs", "Tableau", "Data Cleansing"],
      metrics: "Demonstrated data-driven approaches for public policy"
    }
  ]
}

// Animated number counter
function AnimatedNumber({ value, duration = 2000 }) {
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
    const suffix = value.replace(/[0-9.]/g, '')
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(numericValue * eased)

      setDisplay(current + suffix)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplay(value)
      }
    }

    const timer = setTimeout(animate, 500)
    return () => clearTimeout(timer)
  }, [value, duration])

  return <span>{display}</span>
}

// Skill item component
function SkillItem({ area }) {
  return (
    <div className="skill-item">
      <span className="skill-name">{area}</span>
    </div>
  )
}

// Navigation dot component
function NavDot({ section, active, onClick }) {
  return (
    <button
      className={`nav-dot ${active ? 'active' : ''}`}
      onClick={() => onClick(section)}
      aria-label={`Navigate to ${section}`}
    >
      <span className="nav-dot-label">{section}</span>
    </button>
  )
}

// Main App
function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ['hero', 'stats', 'expertise', 'experience', 'projects', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="portfolio">
      {/* Floating grid background */}
      <div className="grid-bg" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className="grid-line-h" style={{ top: `${i * 5}%` }} />
        ))}
        {[...Array(20)].map((_, i) => (
          <div key={i} className="grid-line-v" style={{ left: `${i * 5}%` }} />
        ))}
      </div>

      {/* Side navigation */}
      <nav className="side-nav">
        {['hero', 'stats', 'expertise', 'experience', 'projects', 'contact'].map(section => (
          <NavDot
            key={section}
            section={section}
            active={activeSection === section}
            onClick={scrollTo}
          />
        ))}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-badge">Data Governance Specialist</div>
          <h1 className="hero-name">
            <span className="name-line">{portfolioData.name.split(' ')[0]}</span>
            <span className="name-line accent">{portfolioData.name.split(' ')[1]}</span>
          </h1>
          <p className="hero-tagline">{portfolioData.tagline}</p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="data-orb">
            <div className="orb-ring ring-1" />
            <div className="orb-ring ring-2" />
            <div className="orb-ring ring-3" />
            <div className="orb-core">
              <img src={`${import.meta.env.BASE_URL}nolanheadshot.jpg`} alt="Nolan Cutler" />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats-section">
        <div className="section-label">Impact</div>
        <div className="stats-grid">
          {portfolioData.stats.map((stat, i) => (
            <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="stat-value">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-accent" />
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="expertise-section">
        <div className="section-header">
          <div className="section-label">Capabilities</div>
          <h2>Core Expertise</h2>
        </div>
        <div className="expertise-content">
          <div className="skills-list">
            {portfolioData.expertise.map((skill, i) => (
              <SkillItem
                key={skill.area}
                area={skill.area}
              />
            ))}
          </div>
          <div className="tools-section">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {portfolioData.tools.map((tool, i) => (
                <span key={tool} className="tool-tag" style={{ animationDelay: `${i * 0.05}s` }}>
                  {tool}
                </span>
              ))}
            </div>
            <div className="certs-section">
              <h3>Certifications</h3>
              <ul className="certs-list">
                {portfolioData.certifications.map(cert => (
                  <li key={cert}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-header">
          <div className="section-label">Journey</div>
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {portfolioData.experience.map((job, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot" />
                <div className="marker-line" />
              </div>
              <div className="timeline-content">
                <div className="job-period">{job.period}</div>
                <h3 className="job-role">{job.role}</h3>
                <div className="job-company">{job.company}</div>
                <ul className="job-highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <div className="section-label">Work</div>
          <h2>Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {portfolioData.projects.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-number">0{i + 1}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-metric">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                {project.metrics}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <div className="section-label">Connect</div>
          <h2>Let's Work Together</h2>
          <p>Interested in discussing data governance challenges or opportunities? I'd love to hear from you.</p>
          <div className="contact-links">
            <a href={`mailto:${portfolioData.email}`} className="contact-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>{portfolioData.email}</span>
            </a>
            <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener" className="contact-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href={`https://${portfolioData.github}`} target="_blank" rel="noopener" className="contact-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="footer">
          <p>© 2026 {portfolioData.name}. Crafted with precision.</p>
        </div>
      </section>
    </div>
  )
}

export default App
