import React from 'react'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
// import photo from "../Memorial.jpg"
// import photo1 from "../Beebe.jpg"
// import photo2 from "../FallLeaves.jpg"
// import p3 from "../Cascadilla.jpg"
// import p4 from "../Milstein.jpg"
// import p5 from "../MistSlope.jpg"

function Photography() {
    // const photos=[
    //     photo, photo1, photo2, p3, p4, p5]

    return (
        <div className="photo-page-container">
            <Sidebar home={false} />

            <h1 className="page-header" id="photo-header">Photography</h1>

            <div className="test-photo-container">
                <div className="clouds" />
                <div className="burmancover" />
                <div className="sar" />
                <div className="moon" />
                <div className="nep" />

            </div>

            <div className="test-photo-container">
                <div className="goldenburman" />
                <div className="raintree" />
                <div className="dionaea" />
                <div className="feather" />
                <div className="botanic" />

            </div>

            {/* <div>
                {photos.map((p)=>{
                return <img src={p} alt="Photo" width="400" height="400"/>})}


                <img src={photo} alt="Photo" width="300"/> 
            </div> */}

            <Footer page="subpage" />
        </div>
    )
}

export default Photography
