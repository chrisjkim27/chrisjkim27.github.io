import React from 'react'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import webHome from "../Images/WebsiteHome.jpg"
import FroggitPlay from "../Images/FroggitPlay.jpg"
import FroggitStart from "../Images/FroggitStart.jpg"
import InvadersPlay from "../Images/InvadersPlay.jpg"
import InvadersStart from "../Images/InvadersStart.jpg"
import BreakoutPlay from "../Images/BreakoutPlay.jpg"
import BreakoutStart from "../Images/BreakoutStart.jpg"
import DiverFind from "../Images/DiverFind.jpg"
import DiverFlee from "../Images/DiverFlee.jpg"
import ClockScreenshot from "../Images/ClockScreenshot.jpg"
import ProjectDescription from '../ProjectDescription'


function Projects() {
    return (
        <div className="projects-page-container">
            <Sidebar home={false} />

            <h1 className="page-header">Past Projects</h1>

            <p>
                Here are some projects I've completed. These are a mixture
                of personal projects and projects completed in my courses.
            </p>

            <div className="project-descriptions">

                <ProjectDescription
                    name="A Clock Application"

                    text="Look up what time it is in different places around the world!
                    Sounds kind of mundane but this was a
                    self-initiated project created using React through
                    which I learned about connecting APIs with a project.
                    I also became a lot more familiar with React by
                    working on this project.

                    I might edit this app over time."
                    img1={ClockScreenshot} />


                <ProjectDescription
                    name="Personal Website"

                    text="As mentioned elsewhere on this site, I made this
                        website using React and CSS. I learned a ton of
                        CSS and became more familiar with React as well.
                        I used react-router-dom for the multi-page functionality
                        and used react-pdf for displaying my resume pdf."
                    img1={webHome} />

                <ProjectDescription
                    name="Froggit"

                    text="This project was completed as the
                    final project for CS 1110. Using Python,
                    I created a game similar to that of
                    Crossy Road, except that a frog tries to
                    cross a series of lanes instead of a chicken.

                    Through this project, I was introduced
                    to the Model-View-Controller model. In addition,
                    following the requirements of the project, I
                    wrote many methods and helper methods
                    for the frog to animate, move, and react properly,
                    as well moving obstacles and keeping track of
                    game state and lives.

                    Made using Python."
                    img1={FroggitStart}
                    img2={FroggitPlay} />

                <ProjectDescription
                    name="Alien Invaders"

                    text="This project was the final project
                    of CS 1110 the year before mine, and I completed
                    it during the winter break after I took CS 1110.

                    Made using Python."
                    img1={InvadersStart}
                    img2={InvadersPlay} />

                <ProjectDescription
                    name="Breakout"

                    text="This game was also a final project for a previous
                    semester of CS 1110 which I completed also in the
                    winter break after I took CS 1110.

                    Made using Python."
                    img1={BreakoutStart}
                    img2={BreakoutPlay} />

                <ProjectDescription
                    name="Sewer Diver"

                    text="This project was the final assignment for CS 2110.
                    It utilized Dijkstra's Shortest Path Algorithm.

                    Made using Java."
                    img1={DiverFind}
                    img2={DiverFlee} />
            </div>

            <Footer page="subpage" />
        </div >
    )
}

export default Projects
