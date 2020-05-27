import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    // <Router>
    <div >
      <nav className="blue-grey darken-3 ">
        <div className="nav-wrapper">
          <Link to={"/"} className="brand-logo left" style={{ fontSize: "1.3em", marginLeft: "1em" }}><i className="material-icons">whatshot</i> Notes App</Link>

          {/* Toggle hidden menu */}
          <Link to={'#'} data-target="mobile-demo" className="sidenav-trigger right target" ><i className="material-icons">menu</i></Link>

          {/* Menu */}
          <ul className="right hide-on-med-and-down target" style={{ marginRight: "5em" }} >
            <li><Link to={'/signup'}>Sign Up</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
          </ul>

        </div>
      </nav>

      {/* Hidden menu */}
      <ul className="sidenav" id="mobile-demo" >
        <li><Link to={'/signup'}><i className="material-icons">person_add</i>Sign Up</Link></li>
        <li><Link to={'/login'}><i className="material-icons">person</i>Login</Link></li>
      </ul>
    </div>

    // </Router>
  );
}

export default Navbar;