  
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:4000/api/v1/auth/register`, this.state)
      .then((res) => {
        console.log(res);
        this.props.setCurrentUser(this.state.currentUser);
        this.props.history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        console.log(err.response.data.message);
      });
  }

  render() {
    console.log(this.props);
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
                        <input onChange={this.handleChange} className='inputField' type="email" id="email" name="email" placeholder='email' value={this.state.email} />
                    </div>
                    <div className="form-group">                
                        <input onChange={this.handleChange} className='inputField' type="password" id="password" name="password" placeholder='password' value={this.state.password} />
                    </div>
                    <button className='articleSubmit' type="submit">Register</button>
                    <p className='switch'>Already registered? <a href='/login'>Log in</a></p>
                </form>
            </div>
      </div>
    )
  }
};

// export default withRouter(Register);
export default (Register);