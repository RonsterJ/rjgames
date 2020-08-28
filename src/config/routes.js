import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';
import Dashboard from '../pages/Dashboard/Dashboard';
import ArticleContainer from '../pages/Articles/ArticleContainer';
import OneArticle from '../Components/Articles/OneArticle';
import NewArticle from '../Components/Articles/NewArticle';
import OneUser from '../Components/Users/OneUser'
import UpdateArticle from '../Components/Articles/UpdateArticle';

export default ({ currentUser, setCurrentUser, logout }) => (
  <Switch>
    <Route exact path='/'>{currentUser ? <Redirect currentUser={currentUser} to='/dashboard' /> : <Redirect to='/login' />}</Route>
    <Route path={'/dashboard'} render={() => (
    <div id='dash-container'>
      
      <ArticleContainer />
    </div>)}/>
    <Route path='/profile/:username' render={({match}) => <OneUser match={match}/>} />
    <Route path='/article/new' render={() => <NewArticle currentUser={currentUser}/>}/>
    <Route path='/article/:id/edit' render={() => <UpdateArticle currentUser={currentUser}/>} />
    <Route path='/article/:id' component={OneArticle} />
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