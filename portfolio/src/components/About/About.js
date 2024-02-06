import React, { useEffect, useState } from "react";
import pic from "../../assets/mypic.png";
import './About.css'

const About = () => {

    /*const [classes, setClasses] = useState('');

    useEffect(() => {
        setClasses('visibleabout');
    },[])*/

    return (
        <section  id="about">
            <div className="about">
                <p>I'm <span>Suresh Krishna Kusuma</span> <br />
                    Full Stack Developer, code enthusisat
                </p>
                <br />
                <a href="#contact">Contact me</a>
            </div>
            <div className="aboutimg">
                <img src={pic} alt=""></img>
            </div>
        </section>
    )
}

export default About