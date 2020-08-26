import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import Header from './Components/Header/Header';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Articles from './Components/Articles/Articles';
// import Landing from './Components/Landing/Landing';
import jwt_decode from 'jwt-decode';
import setAuthHeader from './utils/setAuthHeader';

import './App.css';

class App extends React.Component{
    state={
      currentUser: localStorage.getItem('token'),
    }

    componentDidMount() {
      const token = localStorage.getItem('token');
      if (token) {
        // Set Auth Header
        setAuthHeader(token);
        // Decode Token
        const decodedToken = jwt_decode(token);
        // Set State
        this.setState({currentUser: {id: decodedToken.id, username: decodedToken.username}})
      }
    }
  
    setCurrentUser = (token) => {
      // Store Token
      localStorage.setItem('token', token);
      // Set Auth Header
      setAuthHeader(token);
      // Decode Token
      const decodedToken = jwt_decode(token);
      // Set State
      this.setState({currentUser: {id: decodedToken.id, username: decodedToken.username}})
    };
    
    logout = () => {
      // Remove Token
      localStorage.removeItem('token');
      // Remove Auth Header
      setAuthHeader();
      // Set State
      this.setState({currentUser: ''});
      // Redirect
      this.props.history.push('/login');
    }

    toggle = () => {
      if (this.state.dashHide === 'hidden') {
        this.setState({dashHide: ''})
        this.setState({articlesExpand: ''})
      } else {
        this.setState({dashHide: 'hidden'})
        this.setState({articlesExpand: 'expand'})
      }
    }

    render() {
      return (
      <div className="App">
        <div className="container">
          <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout}/>
        </div>
        {/* action bar */}
        {/* <ActionBar /> */}
      </div>
    );
  }
}

export default withRouter(App);


        // <Landing landingContainer={this.state.landingContainter} authenticate={this.authenticate}/>  
        // {/* header */}
        // <div className={'app-body' + this.state.appBody}>
        //   {/* dashboard */}
        //   <Dashboard dashHide={this.state.dashHide}/>
        //   {/* articles */}
        //   <Articles articlesExpand={this.state.articlesExpand} toggle={this.toggle}/>
        // </div>