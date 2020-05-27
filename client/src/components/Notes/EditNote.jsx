import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditNote(props) {

  /* States */
  const [title, set_title] = useState('');
  const [description, set_description] = useState('');

  /* Efects */
  useEffect(() => {
    axios.get('/api/notes/edit/' + props.match.params.id)
      .then(response => {
        set_title(response.data.title);
        set_description(response.data.description);
        console.log(response.data);
      })
      .catch(error => console.error(error));
  }, [props.match.params.id]);

  /* Functions */
  const onChangeTitle = e => set_title(e.target.value);
  const onChangeDescription = e => set_description(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    const obj = {
      title,
      description
    };

    axios.put('/api/notes/edit/' + props.match.params.id, obj)
      .then(res => {
        props.history.push('/notes');
        window.location.reload();
        console.log(res.data);
      })
      .catch(error => console.error(error));

    set_title('');
    set_description('');
  };


  return (
    <div className="container grey lighten-3" style={{ borderRadius: "1em", padding: "1em", margin: "auto", marginTop: "2em", marginBottom: "2em" }}>

      <div className="row">

        <blockquote>
          <h5>Edit Note</h5>
        </blockquote>

        <form className="col s12" onSubmit={onSubmit}>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">title</i>
              <input id="title" type="text" className="validate" value={title} onChange={onChangeTitle} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">subject</i>
              <textarea id="note-body" type="password" className="materialize-textarea" value={description} onChange={onChangeDescription} />
            </div>
          </div>

          <div className="row" style={{ marginLeft: "0.05em" }}>
            <button className="btn waves-effect waves-light red" type="submit" name="action">
              Edit<i className="material-icons right">edit</i>
            </button>
          </div>
        </form>

      </div>

    </div>
  );
}

export default EditNote;