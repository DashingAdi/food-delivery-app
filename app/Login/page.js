"use client"

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const notify = () => {
    event.preventDefault();
    toast.success('Login Sucessful!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }); 
  }

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
              <button class="btn" type="submit" onClick={notify} on>Login</button>
              
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
        <ToastContainer/>
      </div>

    </>
  )
}

export default Login