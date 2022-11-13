import React from "react"
import "./Footer.css"
import gitHubIcon from "../../Assets/github.png"
import linkedInIcon from "../../Assets/linkedin.png"

const Footer = () => {
  return (
    <footer>
      <h3>Creator:</h3>
      <div className="creator">
        <h4>Will Hobson:</h4>
        <div className="github">
          <img src={gitHubIcon} alt='github-icon' className='github-icon' />
          <a href="https://github.com/willhobson85" className="webLink">GitHub</a>
        </div>
        <div className="linkedin">
          <img src={linkedInIcon} alt='linkedin-icon' className='linkedin-icon' />
          <a href="https://www.linkedin.com/in/the-william-hobson/" className="webLink">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
