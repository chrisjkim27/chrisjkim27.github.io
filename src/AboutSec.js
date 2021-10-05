import React from 'react'
import { Link } from 'react-router-dom'
import Projects from './Pages/Projects'

function AboutSec() {
    return (
        <>
            {/* <div className='about'> */}
            <h1 className="section-header">About</h1>


            <div className="about-sec-container">
                <div className="about-sec-text">
                    <p>
                        My name is Chris Kim. I'm a sophomore at Cornell University
                        studying Computer Science. This is my personal
                        website, made using React and CSS and hosted for free on
                        Github Pages. I'm using this website as a central place
                        to show personal projects and to get better at React and CSS.
                        Explore this site using the navigation bar to the left.
                    </p>
                    <p><i>Note that this site is a work in progress.</i></p>
                    <div className="about-sec-link-icons">
                        <a target="_blank" href="https://www.linkedin.com/in/chrisjkim27" rel="noreferrer noopener"><i class="fab fa-linkedin fa-3x"></i></a>
                        <a target="_blank" href="https://github.com/chrisjkim27" rel="noreferrer noopener"><i class="fab fa-github fa-3x"></i></a>
                        <Link to='/resume'><i class="fas fa-scroll fa-3x"></i></Link>
                    </div>
                </div>
            </div >
            {/* </div> */}
        </>
    )
}

export default AboutSec
