import React, { useState } from 'react';
import axios from 'axios';

function NewNote(props) {

  /* States */
  const [title, set_title] = useState('');
  const [description, set_description] = useState('');

  /* Functions */
  const onChangeTitle = e => set_title(e.target.value);
  const onChangeDescription = e => set_description(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    const obj = { title, description };

    axios.post('/api/notes/add', obj)
      .then(res => {
        props.history.push('/notes');
        window.location.reload();
        console.log(res.data);
      })
      .catch(error => console.error(error));

    set_title('');
    set_description('');
  }

  return (

    <div className="container grey lighten-3" style={{ borderRadius: "1em", padding: "1em", margin: "auto", marginTop: "2em", marginBottom: "2em" }}>

      <div className="row">

        <blockquote>
          <h5>Add new Note</h5>
        </blockquote>

        <form className="col s12" onSubmit={onSubmit}>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">title</i>
              <input id="title" type="text" className="validate" value={title} onChange={onChangeTitle} />
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">subject</i>
              <textarea id="note-body" type="password" className="materialize-textarea" value={description} onChange={onChangeDescription} />
              <label htmlFor="note-body">Description</label>
            </div>
          </div>

          <div className="row" style={{ marginLeft: "0.05em" }}>
            <button className="btn waves-effect waves-light red" type="submit" name="action">
              Add<i className="material-icons right">send</i>
            </button>
          </div>
        </form>

      </div>

    </div>
  );
}

export default NewNote;