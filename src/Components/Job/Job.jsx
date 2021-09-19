import React from 'react';
import "./Job.css"
const Job = ({title, description, location,}) => {
    return ( 
        <div className = "job-container">
            <div className = "job-title">
                <span className = "job-title-text">{title}</span>
            </div>
            <div className = "job-description">
                <span className = "job-description-text">{description}</span>
            </div>
            <div className = "location-application">
                <div className = "location">
                    <span>{location}</span>
                </div>
                <div className = "application">
                    <div className = "application-text">
                       View Application
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Job;