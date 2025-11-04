import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import Navbarsmall from './Navbarsmall';
import image from "../image/logo3.png";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [fisrtName, setFisrtName] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollingDown, setScrollingDown] = useState(false);

    const navRef = useRef(null); 

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar); 
    };

    const closeNavbar = () => {
        setShowNavbar(false);
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
            setScrollingDown(true);
            setFisrtName(false);
        } else {
            if (scrollTop === 0) {
                setFisrtName(true); 
            }
        }

        setScrolled(scrollTop > 0); 
        setLastScrollTop(scrollTop);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setShowNavbar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <>
            {fisrtName && <Navbarsmall />}
             <nav className={`navbar mb-10 ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="logo flex">
                        <h1 className="hidden sm:flex">RAAQATECH</h1>
                        <img src={image} className="w-24 p-2 h-20" alt="company_logo"></img>
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <span>
                            <MenuIcon style={{ color: "white" }} />
                        </span>
                    </div>
                    <div
                        className={`nav-elements ${showNavbar ? "active" : ""}`}
                        ref={navRef} // Attach ref to this div
                    >
                        <ul>
                            <li>
                                <Link
                                    to="Home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeNavbar}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="service"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeNavbar}
                                >
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="Works"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeNavbar}
                                >
                                    Works
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="Team"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeNavbar}
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="FAQ"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeNavbar}
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeNavbar}
                                >
                                    Contact
                                </Link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
