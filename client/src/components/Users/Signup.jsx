import React, { useState } from 'react';
import axios from 'axios';

function Signup(props) {
  /* States */
  const [username, set_username] = useState('');
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');
  const [password2, set_password2] = useState('');

  /* Fucntions */
  const onChangeUsername = e => set_username(e.target.value);
  const onChangeEmail = e => set_email(e.target.value);
  const onChangePassword = e => set_password(e.target.value);
  const onChangePassword2 = e => set_password2(e.target.value);

  const onSubmit = event => {
    event.preventDefault();

    const obj = { username, email, password, password2 };

    /* Axios */
    axios.post('api/users/signup', obj)
      .then(res => {
        props.history.push('/login');
        console.log(res.data);
      })
      .catch(error => console.error(error));
    /* End axios */

    set_username('');
    set_email('');
    set_password('');
    set_password2('');

  }

  return (
    <div className="container grey lighten-3" style={{ borderRadius: "1em", padding: "1em", margin: "auto", marginTop: "2em", marginBottom: "2em" }}>

      <div className="row">

        <blockquote>
          <h5>Sign Up</h5>
        </blockquote>

        <form className="col s12" onSubmit={onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_username" type="text" className="validate" value={username} onChange={onChangeUsername} />
              <label htmlFor="icon_username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input id="icon_email" type="text" className="validate" value={email} onChange={onChangeEmail} />
              <label htmlFor="icon_email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input id="icon_pwd" type="password" className="validate" value={password} onChange={onChangePassword} />
              <label htmlFor="icon_pwd">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input id="icon_confirm_pwd" type="password" className="validate" value={password2} onChange={onChangePassword2} />
              <label htmlFor="icon_confirm_pwd">Confirm password</label>
            </div>
          </div>
          <div className="row" style={{ marginLeft: "0.2em" }}>
            <p>
              <label>
                <input type="checkbox" className="filled-in" />
                <span>Acepta los términos y condiciones de uso (opcional)</span>
              </label>
            </p>
          </div>
          <div className="row" style={{ marginLeft: "0.05em" }}>
            <button className="btn waves-effect waves-light red" type="submit">
              Submit<i className="material-icons right">send</i>
            </button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Signup;