import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Training Wheels",
      description: "SaaS platform for creating customizable RAG-powered chatbots with enterprise features",
      tags: ["React", "Node.js", "RAG", "Langchain"],
      link: "https://github.com/SumitNalavade/TrainingWheels"
    },
    {
      title: "Aggie ProfRec",
      description: "REST API serving professor ratings and grade distribution data for Texas A&M courses",
      tags: ["Python", "Flask", "MongoDB", "Railway"],
      link: "https://github.com/vedarth31/prof-rec"
    },
    {
      title: "College Chance Calculator",
      description: "Guide to predict admission chance based on SAT/ACT score",
      tags: ["Django", "MySQL", "Heroku", "Bootstrap"],
      link: "https://github.com/anirudhNukala/collegeChanceCalculator"
    },
    {
      title: "Panda Express POS System",
      description: "Fullstack project emulating Panda Express sales and management system",
      tags: ["Next.js", "React", "Langchain", "Express.js"],
      link: "https://github.com/CSCE331-Fall2024/project-3-team-6b"
    }
  ]

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <a href={project.link} className="project-link" aria-label="View project" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects