import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import "./ResetPassword.css";
import { setUser } from '../../redux/rootReducer';
import { useHistory } from 'react-router';
const ResetPassword = (props) => {
    const history = useHistory();
    const [newPassword, setnewPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    let user = {}
    let token = props.token;
    const handlePassword = (e) => {
        let value = e.target.value;
        setnewPassword(value);
    }
    const handleconfirmPassword = (e) => {
        let value = e.target.value;
        setconfirmPassword(value);
    }
    const handleResetPassword = async(e) => {
        e.preventDefault();
        try{
            let resp = await axios.post("https://jobs-api.squareboat.info/api/v1/auth/resetpassword", {
            "password" : newPassword,
            "confirmPassword" : confirmPassword,
            "token" : token
            })
            user = resp.data.data;
            props.setUser(user);
            history.push("/feeds");
        }catch(err){
            console.log(err);
        }
        
    }
    return (  
        <div className = "ResetPassword-form">
            <form className = "ResetPassword-class">
                <span className = "ResetPassword-text">Reset Your Password</span>
                <span className = "ResetPassword-enter-text">
                Enter your new password below.
                </span>
                <div className = "ResetPassword-NewPassword">
                    <span className ="NewPassword-text">
                        <label>New Password</label>
                    </span>
                    <input className = "NewPassword-input" type = "password" onChange = {handlePassword} value = {newPassword}></input>
                </div>
                <div className = "ResetPassword-ConfirmPassword">
                    <span className = "ConfirmPassword-text">
                        <label>Confirm new password</label>
                    </span>
                    <input className = "ConfirmPassword-input" type = "password" onChange= {handleconfirmPassword} value = {confirmPassword}></input>
                </div>
                <div className = "submit-btn" onClick = {handleResetPassword}>
                    <div className = "submit-btn-text">
                        Reset
                    </div>
                </div>
            </form>
        </div>
    );
}
 
const mapStateToProps = (store) => {
    return {
        token : store.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setUser : (user) => dispatch(setUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);