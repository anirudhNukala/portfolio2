import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML/CSS"]
    },
    {
      title: "Technologies",
      skills: ["React.js", "Next.js", "Vue.js", "Django", "Tailwind CSS", "AWS CDK", "Firebase", "GCP", "Express.js"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "Docker", "Postman", "Figma", "Jira", "Confluence"]
    },
    {
      title: "Machine Learning",
      skills: ["OpenAI", "LangChain", "NumPy", "Pandas", "scikit-learn", "RAG"]
    }
  ]

  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
