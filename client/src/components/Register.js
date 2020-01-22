import React, { Component } from 'react';
import '../css/register.css';
import { withRouter } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className='container' id='container'>
        <center>
          <form>
            <div class='form-group' id='group'>
              <label id='lblEmail'>Email address</label>

              <input
                type='email'
                class='form-control'
                id='InputEmail'
                aria-describedby='emailHelp'
                placeholder='Enter your email'
              />
              <small id='emailHelp' class='form-text text-muted'>
                We'll never share your email with anyone else.
              </small>
            </div>

            <div class='form-group' id='group'>
              <label id='lblUsername'>Username</label>
              <input
                type='text'
                class='form-control'
                id='InputUsername'
                aria-describedby='emailHelp'
                placeholder='Enter your username'
              />
            </div>

            <div class='form-group' id='group'>
              <label id='InputPassword'>Password</label>
              <input
                type='password'
                class='form-control'
                id='InputPassword'
                placeholder='Password'
              />
            </div>

            <button type='submit' class='btn btn-primary'>
              Register!
            </button>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Register);
