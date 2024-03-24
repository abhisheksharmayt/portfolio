import React from 'react'
import { useParams} from 'react-router-dom'
import { clients } from './clients-data';
import { AiFillPlayCircle, AiFillYoutube } from 'react-icons/ai'

const Work = () => {
    const { id } = useParams();
    if (id == 'markitup') {
        const client = clients.find(curr => curr.link_params == id)
        return (
            <main>
                <section className="videos-section">
                    <div className="client-title">
                        <div className='title'>
                            <h1>{client.name}</h1>
                            <div className='underline'></div>
                        </div>
                        <h4 className='info'>Edited <span className='hightlight'>youtube videos</span> and <span className='hightlight'>reels</span> for different clients according to their needs and tried to make them as engaging as possible. Here are some videos,</h4>
                    </div>
                    <div className="videos-list">
                        {
                            client.videos.map((curr) => {
                                const { video_id, thumbnail, video_link } = curr
                                return (
                                    <a key={video_id} href={video_link} target='_blank'>
                                        <div className="video-div">
                                            <div className="dark-overlay">
                                                <AiFillPlayCircle style={{ color: '#eee', height: '50px', width: '50px' }} />
                                            </div>
                                            <img src={thumbnail} alt="video" />
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </section>
            </main>
        )
    }
    else {
        return (<main><h1>Page Not Found</h1></main>)
    }
}

export default Work