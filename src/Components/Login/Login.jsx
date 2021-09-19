import axios from 'axios';
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import { useHistory } from 'react-router'
import { connect } from 'react-redux';
import { setUser } from '../../redux/rootReducer';
const Login = ({setUser}) => {

  let user = {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleEmail = (e) =>{
    let value = e.target.value;
    setEmail(value);
  }
  const handlePassword = (e) => {
    let value = e.target.value;
    setPassword(value);
  }
  const handleLogin = (e) =>{
    e.preventDefault();
    axios.post("https://jobs-api.squareboat.info/api/v1/auth/login",{
      email, password
    }).then(function(resp){
      user = resp.data.data;
      console.log(user);
      setUser(user);
      history.push("/feeds");
    }).catch(function(err){
      console.log(err);
    })
  }
    return (
          <div className = "login-form">
            <form className = "login-form">
                <div className = "login-text">Login</div>
                <div className = "container">
                  <div className = "email">
                    <span className = "mainspan">
                      <label>Email</label>
                    </span>
                    <input type = "email" onChange = {handleEmail} value = {email}></input>
                  </div>
                  <div className = "password">
                   <div className = "mainspan">
                      <span className = "p1">Password</span>
                      <span className = "p2"><Link exact to = "/forgotpassword">Forgot Your Password ?</Link></span>
                   </div>
                   <div className = "input-div">
                    <input type = "password" onChange = {handlePassword} value = {password}></input>
                   </div>
                      
                  </div>
                  <div className = "submit-btn" onClick = {handleLogin}>
                    <div className = "btn">
                      <div className  = "btn-text">
                        Submit
                      </div>
                    </div>
                  </div>

                  <div className = "ntmj">
                    <span>New to myjobs ? </span>
                    <span>
                      <Link to = {{pathname : "/signup"}}>Create an account</Link>
                    </span>
                  </div>
                </div>
            </form>
          </div>
      );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser : (user) => dispatch(setUser(user))
  }
}


export default connect(null, mapDispatchToProps)(Login);