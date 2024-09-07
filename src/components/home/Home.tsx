import { useState, useEffect } from 'react'
import profile from '../../images/profile-picture.jpeg'
import './style.css'
import { skills } from './data'
import { messages } from './data'
import axios from "axios";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";


const Home = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [index, setIndex] = useState(0);
    const handleImgClick = () => {
        if (index < 5) setIndex(index + 1);
    }
    const [lastUsersGeoLocation, setlastUsersGeoLocation] = useState<{ city: string; country_name: string }>();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const db = getDatabase();
        const getData = async () => {
            const res = await axios.get("https://ipapi.co/json/");

            const dbRef = ref(getDatabase());
            get(child(dbRef, `usersGeoLocation`)).then((snapshot) => {
                if (snapshot.exists()) {
                    set(ref(db, 'usersGeoLocation'), [...snapshot.val().filter(({ ip }: { ip: number; }) => ip !== res.data.ip), res.data]);
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });

        };
        getData();

        const url = ref(db, "usersGeoLocation")
        onValue(url, async (snapshot) => {
            setIsLoading(true);
            const data = await snapshot.val();
            setlastUsersGeoLocation(data[data.length > 1 ? data.length - 1 : 0]);
            setIsLoading(false);
        });



    }, []);

    return (
        <>
            {/* <Navbar /> */}
            <main>
                <section className='intro-section'>
                    <div className="info" style={{ display: "flex", justifyContent: "end", width: "100%", fontSize: "10px" }}> {isLoading ? "loading..." : `Last Seen From: ${lastUsersGeoLocation?.city} (${lastUsersGeoLocation?.country_name})`} </div>
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
                    {/* <h2 className='github-title'>My Contributions</h2> */}
                    {/* <div className='github-div'>
                        <img className="github-chart-img" src="https://ghchart.rshah.org/abhisheksharmayt" alt="github chart" />
                    </div> */}
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