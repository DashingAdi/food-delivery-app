import React from 'react'

const Login = () => {
  return (
    <>
      <div class="wrapper">
        <div class="login box">
          <h1>Log In</h1>
          <p>Enter your account details below.</p>
          <form class="formbox" action="form">
            <div class="input">
              <span class="icon"><ion-icon name="mail"></ion-icon></span>
              <label for="mail">Email : </label>
              <input id="mail" type="email" placeholder="Mail id" />
            </div>
            <div class="input">
              <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
              <label for="pass">Password : </label>
              <input id="pass" type="password" placeholder="Password" />
            </div>
            <div class="login">
              <button class="btn" type="submit">Login</button>
            </div>
            <div class="google">
              <button class="btn" type="submit">Login in with Google</button>
            </div>
            <div class="forgot">
              <a href="http://">Forget your password?</a>
            </div>
            <div class="acc">
              <p>Don't have an account?</p>
              <a href="http://">Sign up</a>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login