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
        <div className='aboutApp'>About</div>
        <div className='authForm'>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">                
                    <input onChange={this.handleChange} type="text" id="username" name="username" placeholder='username' value={this.state.username} />
                </div>
                <div className="form-group">
                    <input onChange={this.handleChange} type="password" id="password" name="password" placeholder="password" value={this.state.password} />
                </div>
                <button href='/dashboard' className="btn btn-primary float-right" type='submit'>Login</button>
                <p>Not a member? <a href='/register'>Join!</a></p>
            </form>
        </div>
    </div>
    )
  }
};

export default withRouter(Login);