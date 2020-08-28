import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './landing.css';
require('dotenv').config();

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    axios.post(`http://localhost:4000/api/v1/auth/login`, this.state)
      .then((res) => {
        console.log(res);
        this.props.setCurrentUser(res.data.token);
        this.props.history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        console.log(err.response.data.message);
      });
  }

  render() {
    // console.log(this.props);
    return (
    <div className='landingContainer'>
        <div className='aboutApp'>
          <div id='aboutContainer'>
            <h1>RJGames</h1>
            <p>Welcome stranger to my humble abode! I hope you will have a swell good time here. This is a space dedicated to gaming and every discussion about games is welcomed!</p><br />
            <p>In the future this will also be the place where my future games will be housed. If exploring, testing out 'in development' games an help me be a better game designer feel free to join on the right and stay tuned for updates :) </p><br />
            <p>Looking forward to seeing you in our community!</p>
          </div>
        </div>
        <div className='authForm'>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">                
                    <input onChange={this.handleChange} className='inputField' type="text" id="username" name="username" placeholder='username' value={this.state.username} />
                </div>
                <div className="form-group">
                    <input onChange={this.handleChange} className='inputField' type="password" id="password" name="password" placeholder="password" value={this.state.password} />
                </div>
                <button href='/dashboard' className="articleSubmit" type='submit'>Login</button>
                <p className='switch'>Not a member? <a href='/register'>Join!</a></p>
            </form>
        </div>
    </div>
    )
  }
};

export default withRouter(Login);