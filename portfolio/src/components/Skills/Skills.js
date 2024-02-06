import React, { useEffect, useState } from "react";
import './Skills.css';
import javascript from "../../assets/javascript_logo.png";
import angular_logo from "../../assets/angular_logo.png";
import aws_logo from "../../assets/aws_logo.png";
import docker_logo from "../../assets/docker_logo.png";
import kubernetes_logo from "../../assets/kubernetes_logo.jpg";
import java_logo from "../../assets/java_logo.png";
import mongodb_logo from "../../assets/mongodb_logo.png";


const Skills = () => {

    const [extraClasses, setExtraClasses] = useState('');

    return(
        <section id='skills'>
            <h2>Skills</h2>
            <div className={extraClasses + "skills-container"}>
                <div className="skill-box"><img src={javascript} alt =""/><br/><span>Javascript</span></div>
                <div className="skill-box"><img src={angular_logo} alt =""/><br/><span>Angular</span></div>
                <div className="skill-box"><img src={docker_logo} alt =""/><br/><span>Docker</span></div>
                <div className="skill-box"><img src={kubernetes_logo} alt =""/><br/><span>Kubernetes</span></div>
                <div className="skill-box"><img src={java_logo} alt =""/><br/><span>Java</span></div>
                <div className="skill-box"><img src={javascript} alt =""/><br/><span>Javascript</span></div>
                <div className="skill-box"><img src={javascript} alt =""/><br/><span>Javascript</span></div>
                <div className="skill-box"><img src={aws_logo} alt =""/><br/><span>AWS</span></div>
                <div className="skill-box"><img src={mongodb_logo} alt =""/><br/><span>Mongo DB</span></div>
            </div>
        </section>
    )
}

export default Skills