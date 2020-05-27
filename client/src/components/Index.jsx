import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from '../utils/PrivateRoute.jsx';
import PublicRoute from '../utils/PublicRoute.jsx';

import Navbar from './Menu/Navbar.jsx';

import Home from './Menu/Home.jsx'

import Login from './Users/Login.jsx';
import Signup from './Users/Signup.jsx';

import Notes from './Notes/Notes.jsx';
import NewNote from './Notes/NewNote.jsx';
import EditNote from './Notes/EditNote.jsx';

import Footer from './Menu/Footer.jsx';

import Forbidden from '../utils/Forbidden.jsx';

function Index() {

  return (
    <Router >
      <Navbar />
      <div className='container' style={{ minHeight: "80vh" }}>
        <Switch >
          <PublicRoute restricted={false} exact path='/' component={Home} />
          <PublicRoute restricted={false} path='/login' component={Login} />
          <PublicRoute restricted={false} path='/signup' component={Signup} />

          <PrivateRoute path='/notes' component={Notes} />
          <PrivateRoute path='/new' component={NewNote} />
          <PrivateRoute path='/edit/:id' component={EditNote} />

          <PublicRoute restricted={true} path='/exception' component={Forbidden} />

        </Switch>
      </div>
      <Footer style={{ position: "absolute", width: "100%", bottom: "0" }} />

    </Router>
  )
}

export default Index;