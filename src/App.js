import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import jwt_decode from 'jwt-decode';
import setAuthHeader from './utils/setAuthHeader';
import Dashboard from './pages/Dashboard/Dashboard';


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
          <Dashboard currentUser={this.state.currentUser} logout={this.logout}/>
          <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout}/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);