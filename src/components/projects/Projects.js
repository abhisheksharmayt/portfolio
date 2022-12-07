import React from 'react'
import { projectsData } from './projectsData'
import './style.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
// import tesla from '../../images/projects_thumbnail/tesla.png'
const Projects = () => {
  return (
    <main>
      <section className="projects-section">
        <div className='title'>
          <h1>Projects</h1>
          <div className='underline'></div>
        </div>
        <div className='projects-div'>
          {projectsData.map((project) => {
            const { id, img, title, github, deployed } = project
            return (
              <div className='project-card' key={id}>
                <div className='project-card-img-div'>
                  <img src={img} alt={title} />
                </div>
                <div className='project-card-info-div'>
                  <h2>{title}</h2>
                  <div className='project-links-div'>
                    <a href={deployed} target="_blank">
                      <FaExternalLinkAlt />
                      <span>Visit</span>
                    </a>
                    <a href={github} target="_blank">
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Projects;