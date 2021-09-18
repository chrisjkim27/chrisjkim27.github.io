import React from 'react'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumepdf from '../sample1.pdf'

function Resume() {
    
    return (
        <div className="resume-page-container">
            <Sidebar home={false}/>

        <div className="resume-main-content">

            <div className="resume-title-and-btn">
                <h1 className="page-header-resume">Resume</h1>
                <a target="_blank" href={resumepdf}><button className="resume-btn">
                        Open Resume pdf in new tab
                    </button></a>
            </div>


            <div className="resume-display">
                <Document file={resumepdf}>
                    <Page pageNumber={1} width={900}/>
                </Document>
            </div>

        </div>

            <Footer page="subpage"/>
        </div>
    )
}

export default Resume
