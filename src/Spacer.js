import React from 'react'

function Spacer({page, height, width}) {

    function checkPage(page){
        if (page==='home') return 'home-spacer';
    }

    return (
        <div className={checkPage(page)}  style={{height: `${height}`, width: `${width}`}}/>
    )
}

export default Spacer
