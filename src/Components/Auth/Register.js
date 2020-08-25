  
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
    axios.post(`${process.env.REACT_APP_API}/auth/register`, this.state)
      .then((res) => {
        console.log(res);
        this.props.history.push(`/dashboard/${this.state.username}`);
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
            <div className='aboutApp'>About</div>
            <div className='authForm'>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleChange} type="text" id="username" name="username" placeholder='username' value={this.state.username} />
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleChange} type="email" id="email" name="email" placeholder='email' value={this.state.email} />
                    </div>
                    <div className="form-group">                
                        <input onChange={this.handleChange} type="password" id="password" name="password" placeholder='password' value={this.state.password} />
                    </div>
                    <button type="submit">Register</button>
                    <p>Already registered? <a href='/login'>Log in</a></p>
                </form>
            </div>
      </div>
    )
  }
};

// export default withRouter(Register);
export default (Register);