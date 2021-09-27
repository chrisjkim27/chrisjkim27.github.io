import React from 'react'


function whichLanguageIcon(language) {
  if (language == "python") return "fab fa-python fa-2x"
  if (language == "react") return "fab fa-react fa-2x"
  if (language == "java") return "fab fa-java fa-2x"

}

function ProjectDescription(props) {
  return (
    <div className="project-description-container">


      <div className="project-name-and-lang-icon">
        <h1>{props.name}</h1>
        <i class={whichLanguageIcon(props.lang)}></i>
      </div>


      <p>{props.text}</p>

      {props.imgs.map(
        (i) => { return <img src={i} alt="Project photo" ></img> }
      )}
    </div>
  )
}

export default ProjectDescription
