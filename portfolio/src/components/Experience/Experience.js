import './Experience.css'

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="timeline">
                <div className="item">
                    <div className='date'><span className='year'>Sep 2023 - Oct 2023</span><span className='arrow'></span></div>
                    <div className='texts'>
                        <h3>Software Engineer Virtual Internship</h3>
                        <h4>J.P. Morgan Chase & Co. - Remote</h4>
                        <p>Unleashing my creativity during a virtual stint with J.P. Morgan Chase, I led a spirited project—crafting a livestock price data feed and an interactive data visualization system. Collaborating seamlessly with a dynamic team, I wove innovation into the project by leveraging JPMorgan Chase's open-source library, Perspective, to create visually captivating data presentations.</p>
                    </div>
                </div>
            </div>


            <div className="timeline">
                <div className="item">
                    <div className='date'><span className='year'>Jan 2023 - Aug 2023</span><span className='arrow'></span></div>
                    <div className='texts'>
                        <h3>Graduate Teaching Assistant</h3>
                        <h4>University of Bridgeport - CT</h4>
                        <p>Collaborated with students in multiple Computer Science courses, actively engaging in complex troubleshooting. Elevated students' analytical and problem-solving skills in Java, Python, and AI/ML. Analyzed and debugged code written by over 100 unique individuals during 330+ sessions, providing valuable feedback.</p>
                    </div>
                </div>
            </div>

            <div className="timeline">
                <div className="item">
                    <div className='date'><span className='year'>Jun 2019 - Dec 2021</span><span className='arrow'></span></div>

                    <div className='texts'>
                        <h3>Senior Software Engineer</h3>
                        <h4>Capgemini Technology Solutions - India</h4>
                        <p>Led a dynamic project at J.P. Morgan Chase, steering the development of a livestock price data feed and an interactive data visualization system. Spearheaded collaboration within a professional team to create visually appealing data presentations using JPMorgan Chase's open-source library, Perspective.</p>
                    </div>
                </div>
            </div>

            <div className="timeline">
                <div className="item">
                    <div className='date'><span className='year'>Dec 2018 - Mar 2019</span><span className='arrow'></span></div>
                    <div className='texts'>
                        <h3>Software Engineer Intern</h3>
                        <h4>Capgemini Technology Solutions - India</h4>
                        <p>Contributed significantly to full-stack development during the internship at Capgemini. From backend to frontend, utilized SQL, Java Spring Boot, and ReactJS. Implemented comprehensive JUnit test suites, resulting in a commendable 30% increase in defect detection</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience