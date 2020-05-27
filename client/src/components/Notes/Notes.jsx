import React, { useEffect, useState } from 'react';
import { logout } from '../../utils/protectRoutes.js'
import axios from 'axios';

import Note from './Note.jsx';

function Notes(props) {

  /* States */
  const [notes, set_notes] = useState([]);

  /* Effects */
  useEffect(() => {
    //Hide login and sign up
    const target = document.getElementsByClassName('target');
    for (let i = 0; i < target.length; i++) {
      target[i].style.visibility = 'hidden';
    }


    //Get notes
    axios.get('api/notes')
      .then(res => {
        console.log(res.data)
        set_notes(res.data)
      })
      .catch(error => console.error('Error: ', error));

    set_notes([]);
  }, []);//componentDidMount


  /* Functions */
  const renderNotes = () => {
    if (notes) {
      return notes.map((object, i) => {
        return <Note obj={object} key={i} />;
      });
    }

  }

  const handleLogout = () => {
    logout();

    axios.get('api/users/logout')
      .then(res => {
        props.history.push('/');
        window.location.reload();
        console.log(res.data);
      })
      .catch(error => console.error(error));
  }

  const handleNewNote = () => props.history.push('/new');

  return (
    <div>

      {/* Notes */}
      <div>
        <h5>Notes</h5>

        <div className="row">
          {renderNotes()}
        </div>

      </div>

      {/* Floating button */}
      <div className="fixed-action-btn">
        <button className="btn-floating btn-large green">
          <i className="large material-icons">keyboard_arrow_up</i>
        </button>
        <ul>
          <li><button className="btn-floating blue" onClick={handleNewNote}><i className="material-icons">fiber_new</i></button></li>
          <li><button className="btn-floating red accent-4" onClick={handleLogout}><i className="material-icons">exit_to_app</i></button></li>
        </ul>
      </div>

    </div>
  );
}

export default Notes;