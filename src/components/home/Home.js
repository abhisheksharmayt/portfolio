import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Social from '../social/social'
import profile from '../../images/profile-picture.jpeg'
import './style.css'
import { skills } from './data'
import Terminal from '../terminal/Terminal'
import { messages } from './data'
const Home = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [index, setIndex] = useState(0);
    const handleImgClick = () => {
        if (index < 5) setIndex(index + 1);
    }
    return (
        <>
            {/* <Navbar /> */}
            <main>
                <section className='intro-section'>
                    <div className='profile-img-container' onClick={handleImgClick}
                        onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>
                        <img src={profile} alt="profile picture" className='profile-pic' />
                        {showPopup &&
                            <div className='img-popup'>
                                <p>{messages[index]}</p>
                            </div>}
                    </div>
                    <h1 className='intro'>Hi, I am <span className='name'>Abhishek Sharma</span></h1>
                    <h4 className='info'>Frontend web developer with a passion for aesthetic interfaces</h4>
                    <h2 className='github-title'>My Contributions</h2>
                    <div className='github-div'>
                        <img className="github-chart-img" src="https://ghchart.rshah.org/abhisheksharmayt" alt="github chart" />
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
                </section>
            </main>
            {/* <Social /> */}
            {/* <Terminal/> */}
        </>
    )
}

export default Home