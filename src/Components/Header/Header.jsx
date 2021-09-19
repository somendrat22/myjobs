import React, { Component } from 'react';
import "./Header.css"
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { setUser } from '../../redux/rootReducer';
import {Button} from "@mui/material";
const Header = (props) => {
    let history = useHistory();
    let user = props.user;
    const handleClick = () => {
        console.log(history);
        history.push("/login");
    }
    let handleUser = () => {
        props.setUser(null);
        history.push("/");
    }
    let handlePostJob = () => {
        history.push("/postjob");
    }
    return ( 
        <div className = "header">
            <div className = "title">
                <span className = "my">My</span><span className = "jobs">Jobs</span>
            </div>
            {
                !user ? (<>
                    <div className = "Login-btn">
                        <div className = "btn" onClick = {handleClick} >
                            Login/SignUp
                        </div>
                    </div>
                </>) : (
                    <>
                    <div className = "mui-btn" onClick = {handlePostJob}>
                        <Button>Post a Job</Button>
                    </div>
                    <button type="button" class="btn btn-primary" onClick = {handleUser}>SignOut</button>
                  </>
                )
            }
            
        </div>
     );
}

const mapStateToProps = (store) => {
    return {
        user : store.user,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser : (user) => dispatch(setUser(user)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
