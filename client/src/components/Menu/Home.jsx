import React, { useEffect } from 'react';

function Home() {

  /* Effects */
  useEffect(() => {
    //Hide login and sign up
    const target = document.getElementsByClassName('target');
    for (let i = 0; i < target.length; i++) {
      target[i].style.visibility = 'visible';
    }
  }, []);//componentDidMount

  return (
    <div>
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align" style={{ marginTop: "4em" }}>
            <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from scratch</h4>
            <p className="flow-text grey-text text-darken-1">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
                  </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;