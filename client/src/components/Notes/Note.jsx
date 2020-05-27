import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Note(props) {

  /* Functions */
  const deleteData = () => {
    axios.delete('api/notes/delete/' + props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));
    window.location.reload();
  }

  return (
    <div className="col s12 m5">
      <div className="card-panel blue darken-1">
        <h5 className="white-text" style={{ marginTop: '0' }}>{props.obj.title}</h5>
        <hr />

        <span className="white-text">{props.obj.description}</span>

        <div className="right" style={{ marginTop: '1em' }}>
          <Link to={'/edit/' + props.obj._id} className="btn-floating btn waves-effect waves-light green">
            <i className="material-icons">edit</i>
          </Link><span> </span>
          <button className="btn-floating btn waves-effect waves-light red accent-4" onClick={deleteData}>
            <i className="material-icons">delete</i>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Note;