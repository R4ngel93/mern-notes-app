import React from 'react';

function forbidden() {
  return (
    <div className="container center-align" style={{ marginTop: "10%" }}>
      <a href='/' className="waves-effect waves-light btn-large red darken-4">
        <i className="material-icons left">exit_to_app</i>Exit
          </a>
      <h2>401</h2>
      <hr />
      <h3>Unauthorized</h3>
    </div>
  );
}

export default forbidden;