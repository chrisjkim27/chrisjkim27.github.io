import React from 'react'
import Name from './Name'
import Navigation from './Navigation'

function Sidebar({home}) {

    // function animateOrNot() {
    //     if (window.scrollY >= 200) return "running";
    //     else {return "paused"};
    // }

    // window.addEventListener('scroll', ()=>console.log(window.scrollY));

    return (
        <div className={home ? "sidebar" : "sidebar-horizontal"} style={{animationPlayState: `${"running"}`}}>
            <Name home={home}/>
            <Navigation home={home}/>
            <div className={home ? 'portrait' : "portrait-horizontal"}>
                {/* <img className="portrait" src={profile} alt="Profile photo"/> */}
            </div>
        </div>
    )
}

export default Sidebar
