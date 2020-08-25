import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';
import Dashboard from '../pages/Dashboard/Dashboard';
import Articles from '../pages/Articles/Articles'

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' render={() => <Login setCurrentUser={setCurrentUser} />} />
    <Route exact path={'/dashboard/:username' } render={() => <Dashboard />}/>


    {/* <Route path='/games/:id' component={GameContainer} />
    <Route path='/games' component={GamesListContainer} /> */}
    <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />
    <Route path='/register' component={Register} setCurrentUser={setCurrentUser}/>
    <Route currentUser={currentUser} path='/dashboard' />
  </Switch>
);
// © 2020 GitHub, Inc.



{/*
 <Route path='/games/new' render={() => 
  currentUser
    ? <NewGameContainer />
    : <Redirect to='/login' />
}/> */}