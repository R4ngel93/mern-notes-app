import React, { useState } from 'react';
import axios from 'axios';
import { login } from '../../utils/protectRoutes.js';

function Login(props) {
  /* States */
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');

  /* Functions */
  const onChangeEmail = e => set_email(e.target.value);
  const onChangePassword = e => set_password(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    const obj = { email, password };

    /* Axios */
    axios.post('api/users/login', obj)
      .then(res => {
        login();//utils
        props.history.push('/notes');
        window.location.reload();
        console.log(res.data);
      })
      .catch(() => {

      });
    /* End axios */
    set_email('');
    set_password('');
  }

  return (
    <div className="container grey lighten-3" style={{ borderRadius: "1em", padding: "1em", margin: "auto", marginTop: "2em", marginBottom: "2em" }}>

      <div className="row">

        <blockquote>
          <h5>Login</h5>
        </blockquote>

        <form className="col s12" onSubmit={onSubmit}>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input id="log_email" type="text" className="validate" value={email} onChange={onChangeEmail} />
              <label htmlFor="log_email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input id="pwd" type="password" className="validate" value={password} onChange={onChangePassword} />
              <label htmlFor="pwd">Password</label>
            </div>
          </div>

          <div className="row" style={{ marginLeft: "0.05em" }}>
            <button className="btn waves-effect waves-light red" type="submit" name="action">
              Submit<i className="material-icons right">send</i>
            </button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Login;