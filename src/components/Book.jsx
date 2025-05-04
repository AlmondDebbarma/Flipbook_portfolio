import React from 'react'
import HTMLFlipBook from "react-pageflip";
import dpImage from '../assets/dp.jpeg';

function Book() {
  const portfolioData = [
    {
      id: "about",
      title: "About Me",
      content: "I'm Edmand, currently pursuing my studies at NIT Agartala.\n\nI'm deeply fascinated by products—how they solve problems, impact lives, and scale. My focus lies in building software and unique systems that offer the best possible solutions. I leverage AI to rapidly ideate, build, and test MVPs—turning ideas into functional products in days, not weeks.\n\nI like lifting weights, long rides, writing poetry now trying my hands on lyrics.",
      image: dpImage
    },
    {
      id: "experience",
      title: "Experience",
      content: [
        {
          role: "Founder",
          company: "EasyShaadi",
          period: "Dec 2024 - Present",
          description: "Founded and led EasyShaadi, Northeast India's 1st own digital wedding planning platform.",
          achievements: [
            "Built the core team of 5, collaborated with the Tech Lead to develop the platform",
            "Successfully onboarded 30+ verified vendors",
            "Achieved a 90% lead conversion rate in first month"
          ],
          link: "easyshaadi.in"
        },
        {
          role: "Founder",
          company: "Coursify v1",
          period: "Feb 2025 - Present",
          description: "Building the next gen platform for utilising the vast video/playlist database for personalised and gamified learning. Yet to be released in product hunt soon.",
          achievements: [
            "Turns YouTube playlists into interactive courses with progress tracking",
            "Features achievements and certificates",
            "Ideal for self-paced learners"
          ],
          link: "coursify-yt.vercel.app"
        }
      ]
    },
    {
      id: "projects",
      title: "Projects",
      content: [
        {
          name: "Freedtime",
          period: "Jan 2025",
          description: "A productivity tool for optimizing student free time.",
          features: [
            "Helps students manage class schedules and recurring tasks",
            "Visualizes free time with heatmaps and graphs",
            "Drag and drop feature to update routine easily",
            "Future features include time segmentation and AI-driven planning suggestions"
          ],
          link: "freedtime.vercel.app"
        },
        {
          name: "All-About-Space",
          role: "Team Lead | Hackathon Project",
          description: "Led the creation of a beginner-friendly platform for space exploration education.",
          features: [
            "AI-driven learning",
            "Gamified experiences",
            "Real-time news updates"
          ],
          link: "all-about-space.vercel.app"
        }
      ]
    },
    {
      id: "achievements",
      title: "Achievements & Extracurricular",
      content: [
        {
          title: "Chess",
          description: "FIDE Rated National Chess player",
          period: "2016-18"
        },
        {
          title: "Poetry",
          description: "IIT Kgp Spring Fest Poetry Slam Finalist"
        },
        {
          title: "Youth Parliament",
          description: "4th in Youth Parliament Zonal",
          period: "2020"
        }
      ]
    }
  ];

  return (
    <HTMLFlipBook 
      width={370} 
      height={500}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
      className="portfolio-book"
      flippingTime={1000}
      usePortrait={true}
      startZIndex={0}
      autoSize={true}
      clickEventForward={false}
      useMouseEvents={true}
      swipeDistance={0}
      showPageCorners={true}
      disableFlipByClick={false}
    >
      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover" style={{ backgroundImage: `url(${dpImage})` }}>
          <div className="cover-overlay">
            <h1 className="portfolio-title">PROOF OF WORK</h1>
            <p className="portfolio-subtitle">A Flipbook portfolio of Edmand</p>
          </div>
        </div>
      </div>

      {portfolioData.map((section) => (
        <div className="page" key={section.id}>
          <div className="page-content">
            <div className="portfolio-container">
              <h2 className="section-title">{section.title}</h2>
              {section.id === "about" && (
                <>
                  <img src={section.image} alt="Profile" className="profile-image" />
                  <div className="section-content">
                    {section.content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </>
              )}
              {section.id === "experience" && (
                <div className="experience-container">
                  {section.content.map((exp) => (
                    <div key={exp.role} className="experience-item">
                      <div className="experience-header">
                        <h3>{exp.role}</h3>
                        <h4>{exp.company}</h4>
                        <p className="period">{exp.period}</p>
                      </div>
                      <p className="description">{exp.description}</p>
                      <ul className="achievements-list">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                      <a href={`https://${exp.link}`} target="_blank" rel="noopener noreferrer" className="project-link">
                        {exp.link}
                      </a>
                    </div>
                  ))}
                </div>
              )}
              {section.id === "projects" && (
                <div className="projects-container">
                  {section.content.map((project) => (
                    <div key={project.name} className="project-card">
                      <div className="project-header">
                        <h3>{project.name}</h3>
                        {project.role && <span className="project-role">{project.role}</span>}
                        {project.period && <span className="project-period">{project.period}</span>}
                      </div>
                      <p className="description">{project.description}</p>
                      <ul className="features-list">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="project-link">
                        {project.link}
                      </a>
                    </div>
                  ))}
                </div>
              )}
              {section.id === "achievements" && (
                <div className="achievements-container">
                  {section.content.map((achievement, index) => (
                    <div key={index} className="achievement-card">
                      <div className="achievement-header">
                        <h3>{achievement.title}</h3>
                        {achievement.period && <span className="achievement-period">{achievement.period}</span>}
                      </div>
                      <p className="achievement-description">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </HTMLFlipBook>
  );
}

export default Book