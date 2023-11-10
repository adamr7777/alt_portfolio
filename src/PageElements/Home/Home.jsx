import React from 'react';
import { Link } from 'react-scroll';

import './Home.css';

import mainPic from '../../assets/mainImage.jpg';
import btnImg from '../../assets/hireme.png';

const Home = () => {
    return (
        <section id="home">
            <div className="homeContent">
                <span className="hello">Hello,</span>
                <span className="homeText">I'm <span className="homeName">Adam</span> {/*homeText class not in use */}
                <br/>Website Developer</span>
                <p className="homePara">I am a skilled web developer with experience in creating
                <br />visually appealing and user friendly websites.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>
            </div>
            {/* <img src={mainPic} alt="Profile" className='mainPic' /> */}
        </section>
    );
}

export default Home;