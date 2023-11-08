import React, {useState} from 'react';
import {Link} from 'react-scroll';

import './Navbar.css';

import mobileMenuIcon from '../../assets/menu.png';
import mainLogoIcon from '../../assets/logo3.jpg';
import contactMeIcon from '../../assets/contact.png';

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    const handleScrollToContact = () => {
        console.log('contacts');
        // contactsElement.scrollIntoView({behavior: 'smooth'});            finish
    };

    return (
        <nav className='navbar'>
            <a href='/'>
                <img src={mainLogoIcon} alt='Dev Logo' className='mainLogo'/>    {/*maybe it doesn't need a link */}   
            </a> 
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} 
                    duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} 
                    duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} 
                    duration={500} className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className='scrollToContactMe' onClick={handleScrollToContact}>
                <img src={contactMeIcon} alt='' className='desktopMenuImg' />
                Contact Me
            </button> 
            <button className='mobMenuBtn' onClick={()=> setShowMenu(!showMenu)}>
                <img src={mobileMenuIcon} alt='mobile menu icon' className='mobMenuIcon' />
            </button>
            <div className='navMenu' style={{display: showMenu? 'flex' :'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} 
                    duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} 
                    duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} 
                    duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} 
                    duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
};

