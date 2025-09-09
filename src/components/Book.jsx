import React from 'react'
import HTMLFlipBook from "react-pageflip";
import dpImage from '../assets/dp.jpeg';
import ShowcaseCard from './ShowcaseCard';
import freedtimeImg from '../assets/freedtime-vercel-app-1024x768desktop-215e74.jpg';
import seepImg from '../assets/seep-74j-pages-dev-1024x768desktop-64cc1b.png';

function Book() {
  const portfolioData = [
    {
      id: "about",
      title: "About Me",
      content: "I love products. That matters."
    },
    {
      id: "skills",
      title: "Skills",
      content: [
        { category: "Frontend", skills: ["React", "Vite", "Tailwind CSS", "Shadcn UI", "Gsap", "Spline"] },
        { category: "Backend", skills: ["Supabase"] },
        { category: "No-code tools", skills: ["Bolt", "lovable", "orchids", "cursor"] }
      ]
    },
    {
      id: "experience",
      title: "Experience",
      content: [
        {
          role: "Co-founder",
          company: "fSEO",
          period: "June 10 - Present",
          description: "Helping Early stage startups achieve 10X ROI with fractional SEO consultancy services— now scaling under my leadership with brand positioning, client-acquisition, and scaling 0 to 1.",
          achievements: [
            "250k+ traffic for Phodu Club in 2 SEO sprints",
            "$3,000 acquisition for UPSCmaska after hitting 100k+ organic visitors",
            "17–20k traffic growth for tools like iScalePro and Mesha with no backlinks"
          ]
        },
        {
          role: "Founder",
          company: "EasyShaadi (Tripura's #1 Digital Wedding Platform)",
          period: "Dec 2024 – Present",
          description: "Defined product roadmap & requirements, launched MVP in 2 weeks with CTO.",
          achievements: [
            "Built & managed a 5-member cross-functional team",
            "Achieved 90% vendor onboarding conversion (30+ vendors)",
            "Outnumbered former #1 competitor's listings in Tripura by 33%, validating market fit"
          ],
          link: "easyshaadi.in"
        },
        {
          role: "Indie Hacker",
          company: "Coursify",
          period: "Feb 2025 – Present",
          description: "Built a next-gen platform that transforms YouTube playlists into interactive personal courses.",
          achievements: [
            "Built end-to-end SaaS product alone",
            "25+ active beta users | 500+ user-generated courses",
            "Launching on Product Hunt soon"
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
          name: "SEEP – Space Exploration Education Platform",
          role: "SIH Hackathon Project 2024",
          description: "Strategized and prototyped education platform with interactive animations & games. Led product strategy, UI/UX, and feature integration for Smart India Hackathon.",
          link: "https://seep-74j.pages.dev/",
          image: seepImg,
          bg: seepImg
        },
        {
          name: "Freedtime",
          period: "Jan 2025",
          description: "A productivity tool for optimizing student free time in college hours.",
          link: "https://freedtime.vercel.app",
          image: freedtimeImg,
          bg: freedtimeImg
        }
      ]
    },
    {
      id: "achievements",
      title: "Achievements & Extracurricular",
      content: [
        { title: "Chess", description: "FIDE Rated National Chess player", period: "2016-18" },
        { title: "Poetry", description: "IIT Kgp Spring Fest Poetry Slam Finalist", period: "2024" },
        { title: "Youth Parliament", description: "4th in Youth Parliament Zonal", period: "2020" },
        { title: "Chess Champion", description: "Dhalai District Chess Champion", period: "2019" }
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
                  <div className="section-content">
                    {section.content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </>
              )}
              {section.id === "skills" && (
                <div className="skills-container">
                  {section.content.map((skillGroup) => (
                    <div key={skillGroup.category} className="skill-group">
                      <h3>{skillGroup.category}</h3>
                      <div className="skill-tags">
                        {skillGroup.skills.map((skill) => (
                          <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
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
                      {exp.link && (
                        <a href={`https://${exp.link}`} target="_blank" rel="noopener noreferrer" className="project-link">
                          {exp.link}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {section.id === "projects" && (
                <div className="projects-container">
                  {section.content.map((project) => (
                    <ShowcaseCard
                      key={project.name}
                      title={project.name}
                      subtitle={project.role || project.period || ''}
                      image={project.image}
                      backgroundImage={project.bg}
                      link={project.link}
                    />
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