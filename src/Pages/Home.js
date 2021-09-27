import React from 'react'
import Footer from '../Footer'
import Landing from '../Landing'
import MainContent from '../MainContent'
import Navigation from '../Navigation'
import Sidebar from '../Sidebar'
import Spacer from '../Spacer'
import Projects from './Projects'

function Home() {
    return (
        <>
            <Landing />

            <div className="home">
                <Sidebar home={true} />
                <MainContent />
            </div>

            {/* <Spacer page={'home'} height={"40px"} /> */}

            <Footer page={'home'} />
        </>
    )
}

//Have info in a google sheets and connect to app so you just need to edit google sheets
export default Home
