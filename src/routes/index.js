import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import NewMeetup from '../pages/NewMeetup';
import ShowMeetup from '../pages/ShowMeetup';
import EditMeetup from '../pages/EditMeetup';
import AddEditMeetup from '../pages/AddEditMeetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/newmeetup" component={NewMeetup} isPrivate />
      <Route path="/editmeetup/:id" component={EditMeetup} isPrivate />
      <Route path="/meetup/:id" component={ShowMeetup} isPrivate />
      <Route path="/addedit/:id?" component={AddEditMeetup} isPrivate />

      <Route path="/" component={() => <h1>404 PAGE NOT FOUND =/</h1>} />
    </Switch>
  );
}
