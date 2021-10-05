import React from 'react'
import Footer from '../Footer'
import Sidebar from '../Sidebar'

function AboutPage() {
    return (
        <div className="about-page-container">
            <Sidebar home={false} />

            <h1 className="page-header">About</h1>
            <div className="about-page-text">
                <p>
                    Hello! My name is Chris Kim. I'm a sophomore studying
                    Computer Science in the College of Arts and Sciences at
                    Cornell University. I'm interested in careers in the tech
                    industry.
                </p>
                <p>
                    Outside of academics I enjoy playing piano and enjoying
                    the nature in the Ithaca area.
                </p>
                <p>
                    This website is a personal project built entirely with React, styled
                    with CSS, and hosted on Github Pages for free.
                </p>
            </div>

            <Footer page="about" />
        </div>
    )
}

export default AboutPage
