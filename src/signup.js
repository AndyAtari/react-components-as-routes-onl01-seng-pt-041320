import React from 'react'


class SignUp extends React.Component {
  render() {
    return (
      <div>
      <h1>Please Sign Up!</h1>
      <form>
        <div>
          <input type="text" name="username"
          placeholder="Username"/>
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
    )
  }
}

export default SignUp;
