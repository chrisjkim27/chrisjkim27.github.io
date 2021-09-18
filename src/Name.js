import React from 'react'

function Name({home}) {
    return (
        <div className={home ? "name": "name-horizontal"}>
            <h1>Chris Kim</h1>
            {/* <h4 id="subname">Undergrad at Cornell University</h4> */}
        </div>
    )
}

export default Name
