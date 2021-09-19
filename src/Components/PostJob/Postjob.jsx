import React, { useState } from 'react';
import "./Postjobs.css";
import axios from "axios";
import { useHistory } from 'react-router';
import { connect } from 'react-redux';


const Postjobs = ( { token } ) => {
    let history = useHistory();
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ location, setLocation ] = useState("");
    const handleOnClick = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post("https://jobs-api.squareboat.info/api/v1/recruiters/jobs/", { title, description, location }, {
                headers:{
                    "KEY" : "Authorization", 
                    "VALUE":token, 
                    "TYPE":"text"
                }
            })
            console.log(res.data);
            history.push("/feeds");
        }catch(err) {
            console.log(err.message);
        }
    }
    
    return (
        <div className="postjobs">
            <form className="container">
                <label className="job-title">Post a Job</label>
                <div className="post-job-title">
                    <label>Job title</label>
                    <input type="text" onChange={(e)=> setTitle(e.target.value) } value={ title } className="form-control" id="exampleInputPassword1" placeholder="Enter your job title" />
                </div>
                <div className="post-job-description">
                    <label>Description</label>
                    <input type="text" className="form-control" onChange={ (e) => setDescription(e.target.value) } value={ description } id="exampleInputPassword1" placeholder="Enter Description" />
                </div>
                <div className="post-job-location">
                    <label>Job Location</label>
                    <input type="text" className="form-control" onChange={ (e) => setLocation(e.target.value) } value={ location } id="exampleInputPassword1" placeholder="Enter your job Location" />
                </div>
                <div className="signup-btn" onClick={ handleOnClick }>
                    <div className = "sign-btn">Submit</div>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = ( Store ) =>{
    return {
        token:Store.token,
    }
}

export default connect( mapStateToProps,  )(Postjobs);