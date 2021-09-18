import React from 'react'
import AboutSec from './AboutSec'
import PhotoSec from './PhotoSec'
import ProjectsSec from './ProjectsSec'

function MainContent() {
    return (
        <div className="home-main-content">
            <AboutSec />
            <ProjectsSec />
            {/* <PhotoSec/> */}
        </div>
    )
}

export default MainContent
