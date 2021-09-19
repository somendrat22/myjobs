import axios from 'axios';
import React, {useEffect, useState} from 'react';
// import {HomeIcon} from '@mui/icons-material';
import { Button } from '@mui/material';
import Job from '../Job/Job';
import Pagination from '../Pagination/Pagination';
import "./Feeds.css"
import {connect} from "react-redux";
const Feeds = ({user}) => {
    console.log(user);
    let [jobsData, setJobsData] = useState([]);
    useEffect(() => {
        axios.get("https://jobs-api.squareboat.info/api/v1/jobs").then(function(resp){
            setJobsData(resp.data.data);
            console.log(resp.data.data);
        }).catch(function(err){
            console.log(err);
        })
    }, []); 
    
   
    return ( 
        <div className = "mainContainer">
            <div className = "feeds-home">
                <Button>Home</Button>
            </div>
            <div className = "posted-job-text">
                <span>Jobs Posted By You </span>
            </div>
            <div className = "posts">
              {
                   jobsData ? jobsData.map((element) => {
                        return <Job key = {element.id} title = {element.title} location = {element.location} description = {element.description}></Job>
                    }) : <></>
                }
               
            </div>
            <div className = "pagination">
                <Pagination></Pagination>
            </div>
        </div>
     );
}

const  mapStateToProps = (store) => {
    return {
        user : store.user,
    }
}

export default connect(mapStateToProps)(Feeds);