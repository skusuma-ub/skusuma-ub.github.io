import React from "react";
import './Navbar.css'
import dark_icon from '../../assets/dark_icon.png'
import light_icon from '../../assets/light_icon.png'
import logo_light from '../../assets/logo_light.png'
import logo_dark from '../../assets/logo_dark.png'
import linkedin_light from '../../assets/linkedin_light.png'
import linkedin_dark from '../../assets/linkedin_dark.png'
import github_light from '../../assets/github_light.png'
import github_dark from '../../assets/github_dark.png'


const Navbar = ({ theme, setTheme }) => {

    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <div className="navbar">
            <a href="#about"><img src={theme === 'light' ? logo_light : logo_dark} alt="" className="logo" /></a>
            <ul className="item">
                <li ><a href="#about">About</a></li>
                <li><a href="#skills" >Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#projects">Contact</a></li>
            </ul>

            <a href='https://www.linkedin.com/in/suresh-kusuma'>
                <img src={theme === 'light' ? linkedin_light : linkedin_dark} alt="" className="toggle_icon" />
            </a>

            <a href='https://github.com/skusuma-ub'>
                <img src={theme === 'light' ? github_light : github_dark} alt="" className="toggle_icon" />
            </a>

            <img src={theme === 'light' ? light_icon : dark_icon} alt="" onClick={toggle_mode} className="toggle_icon" />
        </div>
    );
}

export default Navbar