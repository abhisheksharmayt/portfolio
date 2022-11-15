import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar';
import Social from '../social/social'
import './style.css';
import logo from './fast-forward.png'
import { data } from './data'

const Project = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Navbar />
      <main>
        <section className='project-section'>
          <div className='title'>
            <h1>Projects</h1>
            <div className='underline'></div>
          </div>
          <div className='main'>
            <div className='middle'>
              <div className="tabs">
                {
                  data.map((curr) => {
                    return (
                      <h3
                        style={(index == curr.id - 1) ? { borderLeft: '3px solid #F05454', color: '#F05454' } : {}}
                        key={curr.id}
                        onClick={() => { setIndex(curr.id - 1) }}
                      >
                        {curr.short}
                      </h3>
                    )
                  })
                }
              </div>
              <div className="content">
                <h2>{data[index].title}</h2>
                <p>{data[index].company}</p>
                <div className="techStack-div">
                  {
                    data[index].tech_stack.map((curr, index) => {
                      return (
                        <div key={index + 50} className="tech-div">
                          {curr.svg}
                          <p className='tech-title'>{curr.title}</p>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="project-details">
                  {
                    data[index].duties.map((curr, index) => {
                      return (
                        <div key={index + 10} className='desc'>
                          <img src={logo} alt="arrow-icon" />
                          <p className='list'>{curr}</p>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
            <div className="footer">
              <a href="https://github.com/abhisheksharmayt">
                <button className='more-button'>More Projects</button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Social />
    </>
  )
}

export default Project;