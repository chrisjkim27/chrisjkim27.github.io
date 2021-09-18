import React from 'react'
import FroggitPlay from "./Images/FroggitPlay.jpg"
import InvadersPlay from "./Images/InvadersPlay.jpg"
import ClockScreenshot from "./Images/ClockScreenshot.jpg"


function ProjectsSec() {
    return (
        <>
            <h1 className="section-header">Projects</h1>


            <div className="projects-sec-text">
                <p>
                    Check out the Projects page to learn more about some past
                    projects I've completed.
                </p>

                <div className="home-projects-photos">

                    <img src={ClockScreenshot} />

                    <div className="first-project-photo-home">
                        <img src={FroggitPlay} />
                        <img src={InvadersPlay} />
                    </div>

                </div>
            </div>


        </>
    )
}

export default ProjectsSec
