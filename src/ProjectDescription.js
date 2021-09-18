import React from 'react'

function ProjectDescription(props) {
  return (
    <div className="project-description-container">
      <h1>{props.name}</h1>
      <p>{props.text}</p>

      <img src={props.img1} alt="Project photo" ></img>
      <img src={props.img2} alt="Project photo" ></img>
    </div>
  )
}

export default ProjectDescription
