import React from 'react'
import { social } from '../navbar/data'
import './style.css'
const Social = () => {
    return (
        <>
            <div className="social-div">

                <div className='social-icon-line'></div>
                {
                    social.map((curr) => {
                        const { id, url, icon } = curr;
                        return (
                            <div key={id} className='social-icon'>
                                <a href={url} className='social-link'>{icon}</a>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Social