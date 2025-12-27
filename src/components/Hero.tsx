import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">Anirudh Nukala</h1>
          <p className="hero-title">Software Engineer & Full-Stack Developer</p>
          <p className="hero-bio">
            Howdy! I'm a Computer Science student at <span className="highlight">Texas A&M University</span>!
            I'm very enthusiastic about making projects that have an impact on the world around me. I've worked previously at places like <span className="highlight">Amazon</span> that have helped me learn and grow as an engineer and as a leader.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="cta-button">Get in touch</a>
            <a href="#projects" className="cta-button-secondary">View my work</a>
            <a href="/Anirudh_Nukala_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '6px'}}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Resume
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src="/anirudh.jpeg" alt="Anirudh Nukala" className="hero-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero