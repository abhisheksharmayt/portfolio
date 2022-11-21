import React from 'react'
import Navbar from '../navbar/Navbar'
import Social from '../social/social'
import profile from '../../images/profile-picture.jpeg'
import './style.css'
import { skills } from './data'
import Terminal from '../terminal/Terminal'
const Home = () => {
    return (
        <>
            {/* <Navbar /> */}
            <main>
                <section className='intro-section'>
                    <div className='profile-img-container'>
                        <img src={profile} alt="profile picture" className='profile-pic' />
                    </div>
                    <h1 className='intro'>Hi, I am <span className='name'>Abhishek Sharma</span></h1>
                    <h4 className='info'>Frontend web developer with a passion for asthetic interfaces</h4>
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
                </section>
            </main>
            {/* <Social /> */}
            {/* <Terminal/> */}
        </>
    )
}

export default Home