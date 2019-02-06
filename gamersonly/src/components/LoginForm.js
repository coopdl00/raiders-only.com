import React, {Component} from 'react';

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.logInUser(e)
    console.log('Login')
  }

  render() {
    return (
      <div>
        <div id="custom-form" className="py-3 container">
          <form>
            <div className="form-group">
              <label id="label-color" htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" autoComplete="username email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="label-color" className="form-text">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label id="label-color" htmlFor="exampleInputPassword1">Password</label>
              <input type="password" autoComplete="current-password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <button type="submit" onClick={(e)=> this.handleSubmit(e)} className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="mt-5">
          <div id="custom-form">
            <p className="container" id="font-color">Don't have an account?<a href="/" onClick={(e)=> {this.props.toggleLogin(e)}}>Click Here</a></p>
          </div>
        </div>
      </div>)
  }

}
export default LoginForm;
