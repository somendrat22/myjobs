import React, {  useState } from 'react';
import "./Signup.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from '../../redux/rootReducer';
const Signup = ({setUser}) => {
    // let history = use
    // let [name, setUserName] = useState("");
    let data = {};
    let [userRole, setUserRole] = useState(null);
    let [fullname, setFullname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [skills, setSkills] = useState("");
    const history = useHistory();
    const SetRoleToRecuriter = () =>{
        setUserRole(0);
        console.log(userRole);
    }
    const setRoleToCandidate = () =>{
        setUserRole(1);
        console.log(userRole);
    }
    const handleUserName = (e) =>{
        let value = e.target.value;
        console.log(value);
        setFullname(value);
    }
    const handleEmail = (e) => {
        let value = e.target.value;
        console.log(value);
        setEmail(value);
    }
    const handlePassword = (e) => {
        let value = e.target.value;
        console.log(value);
        setPassword(value);
    }
    const handleConfirmPassword = (e) => {
        let value = e.target.value;
        console.log(value);
        setConfirmPassword(value);
    }
    const handleSkills = (e) =>{
        let value = e.target.value;
        console.log(value);
        setSkills(value);
    }
      function handleSubmit(e){  
        e.preventDefault();
        axios.post("https://jobs-api.squareboat.info/api/v1/auth/register",
        {
            password : password,
            confirmPassword :confirmPassword,
            userRole : userRole,
            email :email,
            name : fullname,
        }).then(function(resp){
            data = resp.data;
            setUser(data);
            console.log(data);
            history.push("/feeds");
        }).catch(function(err){
            console.log(err);
        })
    
    }

    return ( 
        <div className = "signup-main-container">
            <form className = "signup-form">
                <span className = "signup-text">Signup</span>
                <div className = "container">
                    <div className = "rec-cand1">
                        <span>I'm a</span>
                        <div className = "rec_cand2">
                            <div className = "recuriter" onClick = {SetRoleToRecuriter}>
                                <div className = "recuriter-text">
                                    Recuriter
                                </div>
                            </div>
                            <div className = "candidate" onClick = {setRoleToCandidate}>
                                <div className = "candidate-text">
                                    Candidate
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "fullname">
                        <span className = "fullname-text">
                            <label>Fullname</label>
                        </span>
                        <input type = "text" onChange = {handleUserName} value = {fullname}></input>
                    </div>
                    <div className = "email">
                        <span className = "email-text">
                            <label>Email Address</label>
                        </span>
                        <input type = "email" onChange = {handleEmail} value = {email}></input>
                    </div>
                    <div className = "password">
                        <div className = "crp">
                            <span className = "crp-text">
                                <label>Create Password</label>
                            </span>
                            <input type = "password" onChange = {handlePassword} value = {password}></input>
                        </div>
                        <div className = "conp">
                             <span className = "conp-text">
                                 <label>Confirm Password</label>
                             </span>
                             <input type = "password" onChange = {handleConfirmPassword} value = {confirmPassword}></input>  
                        </div>
                    </div>
                    <div className = "skills">
                        <span className = "skills-text">
                            <label>Skills</label>
                        </span>
                        <input type = "text" onChange = {handleSkills}  value = {skills}></input>
                    </div>
                    <div className = "submit-btn"  onClick = {handleSubmit}>
                        <div className ="submit-btn-text">
                            Submit
                        </div>
                    </div>
                </div>
            </form>
        </div>
     );
}



const mapDispatchToProps = (dispatch)=>{
    return {
        setUser : (user) => dispatch(setUser(user)),
    }
}


export default connect(null,mapDispatchToProps)(Signup);