import React from 'react';

function Footer() {

  return (
    <footer className="page-footer blue-grey darken-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h6>MERN Notes Application</h6>
            <p>First notes apllication project made with MERN and JWT technologies.
              </p>
            <h6 className="white-text">Technologies</h6>
            <div style={{ fontSize: "2em" }}>
              <i className="fab fa-react" style={{ color: "#58D5F8" }} aria-hidden="true"></i>
              <i className="fab fa-node" style={{ color: "#7DB829", marginLeft: "0.5em" }} aria-hidden="true"></i>
              <i className="fab fa-html5" style={{ color: "#DF4529", marginLeft: "0.5em" }} aria-hidden="true"></i>
              <i className="fab fa-css3-alt" style={{ color: "#208BEC", marginLeft: "0.5em" }} aria-hidden="true"></i>
              <i className="fab fa-js" style={{ color: "#FAD944", marginLeft: "0.5em" }} aria-hidden="true"></i>
              <i className="fab fa-npm" style={{ color: "#C90D12", marginLeft: "0.5em" }} aria-hidden="true"></i>
              <i className="fab fa-git-alt" style={{ color: "#EC4833", marginLeft: "0.5em" }} aria-hidden="true"></i>
            </div>
          </div>
          <div className="col l4 offset-l2 s12">
            <h6 className="white-text">Contact</h6>
            <ul>
              <li><a className="grey-text text-lighten-3" href="https://twitter.com/OscarRa65705186" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a className="grey-text text-lighten-3" href="https://www.freecodecamp.org/r4ng3l" target="_blank" rel="noopener noreferrer"><i className="fab fa-free-code-camp"></i> freeCodeCamp</a></li>
              <li><a className="grey-text text-lighten-3" href="https://github.com/R4ngel93" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Github</a></li>

            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright"  >
        <div className="container">
          © 2020 Copyleft
          </div>
      </div>
    </footer>
  )
}

export default Footer;