import axios from 'axios';
import React, { useState } from 'react';
import "./Forgotpassword.css";
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { setToken } from '../../redux/rootReducer';
const Forgotpassword = ({setToken}) => {
    let token;
    
    const history = useHistory();
    const [email, setEmail] = useState("");
    const handleInput = (e) =>{
        let value = e.target.value;
        setEmail(value);
    }
    const handleEmail = () => {
        axios.get(`https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=${email}`).then(function(resp){
            token = resp.data.data.token;
            console.log(token);
            setToken(token);
            history.push("/resetpassword");
        }).catch(function(err){
            console.log(err);
        })
    }
    return (
        <div className = "forgotpassword-container">
            <form>
                        <span className = "forgotpassword-text"> Forgot your password?</span>
                        <div className = "forgotpassword-content">
                            <span>
                                Enter the email associated with your account and we’ll send you instructions to reset your password.
                            </span>
                        </div>
                        <div className = "forgotpassword-email">
                            <span className = "forgotpassword-email-text">
                                <label>Email</label>
                            </span>
                            <input type = "email" onChange = {handleInput} value = {email}></input>
                        </div>
                        <div className = "submit-btn" onClick = {handleEmail}>
                            <div className ="submit-btn-text">
                                Submit
                            </div>
                        </div>
            </form>
        </div>
     );
}

const mapDispatchToProps = (dispatch) => {
    return{
        setToken : (token) => dispatch(setToken(token))
    }
}


export default connect(null, mapDispatchToProps)(Forgotpassword);