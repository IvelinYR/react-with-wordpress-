import React from 'react';

import Navbar from "../Navbar/Navbar";
import './About.css';

class About extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Navbar/>
                <div style={{ marginTop: 80 }}>
                    <div className="about-item">
                        The Pulse Blog was created to help our candidates get a
                        sneak peek into what it’s like to work at Target. Whether you’re
                        interested in stores, distribution or headquarters, we hope you can
                        get a feel for the Target culture and experience here.
                    </div>
                    <div className="about-item">
                        Our bloggers were selected from a group of team members who wanted to
                        share their experience with you. They are excited to share their authentic
                        stories and let you get insight into the inner workings of their jobs.
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;
