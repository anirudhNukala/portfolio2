import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineering Intern",
      company: "Amazon",
      date: "May 2025 – Aug 2025",
      description: "Created a full-stack warehouse management system to comply with safety & compliance regulations",
      logo: "/amazon_logo.jpeg"
    },
    {
      title: "Software Engineering Intern",
      company: "Ntrepid",
      date: "May 2024 – Aug 2024",
      description: "Maintained existing defense applications and added feature upgrades to improve performance",
      logo: "/ntrepid_logo.jpeg"
    },
    {
      title: "Undergraduate Research Assistant",
      company: "Texas A&M Health Sciences Center",
      date: "Feb 2024 – Sep 2024",
      description: "Built web applications for healthcare data management and maternal care",
      logo: "/texas_am_health_science_center_logo.jpeg"
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "Texas A&M College of Engineering",
      date: "Aug 2023 – May 2025",
      description: "Teaching assistant for Introductory Python & Discrete Mathematics",
      logo: "/texas_a_m_university_college_of_engineering_logo.jpeg"
    },
    {
      title: "Events Officer",
      company: "Aggie Internship Club",
      date: "Jan 2025 – Present",
      description: "Organizing career development events and workshops for students",
      logo: "/aggie_internship_club_image.jpeg"
    },
    {
      title: "Software Development Intern",
      company: "Mindagile Consulting",
      date: "May 2023 – Aug 2023",
      description: "Redeveloped an AI-based quiz app for students",
      logo: "/mindagile_image.jpeg"
    }
  ]

  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="exp-content">
              <img src={exp.logo} alt={`${exp.company} logo`} className="exp-logo" />
              <div className="exp-details">
                <div className="exp-header">
                  <div className="exp-info">
                    <h3 className="exp-title">{exp.title}</h3>
                    <span className="exp-company">{exp.company}</span>
                  </div>
                  <span className="exp-date">{exp.date}</span>
                </div>
                <p className="exp-description">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience