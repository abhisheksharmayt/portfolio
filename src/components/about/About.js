import React from 'react'
import Navbar from '../navbar/Navbar'
import Social from '../social/social'
import { skills } from '../home/data'
import './style.css'
import { education } from './data'

const About = () => {
    return (
        <>
            {/* <Navbar /> */}
                <main>
                    <section className='about-section'>
                        <div className='skills-section'>
                            <div className='title'>
                                <h2 className='section-title'>Skills</h2>
                                <div className='underline'></div>
                            </div>
                            <div className="skills-div">
                                {
                                    skills.map((icon) => {
                                        const { id, name, svg } = icon;
                                        return (
                                            <div key={id} className="icon-div">
                                                {svg}
                                                <p className='icon-title'>{name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="education-section">
                            <div className='title'>
                                <h2 className='section-title'>Education</h2>
                                <div className='underline'></div>
                            </div>
                            <div className="education-info">
                                {
                                    education.map((curr) => {
                                        const { id, name, subjectInfo, moreInfo } = curr
                                        return (
                                            <div key={id} className="education-card">
                                                <h4 className="institution-title">{name}</h4>
                                                <p className='subjectInfo'>{subjectInfo}</p>
                                                <p className="moreInfo">{moreInfo}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </main>
            {/* <Social /> */}
        </>
    )
}

export default About