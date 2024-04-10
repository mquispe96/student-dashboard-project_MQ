import React,{useState, useEffect, useContext} from "react";
import "../Styles/profile.css";
import { DataContext } from "../Components/DataContext";
import {useParams, Link} from 'react-router-dom';
import formatFullname from "../Helper Functions/format-fullname";
import getReadableDOB from "../Helper Functions/get-readable-dob";
import readableDate from "../Helper Functions/readable-date";
import MoreInfo from "../Components/MoreInfo";
import Notes from "../Components/Notes";

const Profile = () => {
    const {profileId} = useParams();
    const {allProfiles} = useContext(DataContext);
    const {id, names, username, dob, profilePhoto, codewars, certifications, 
            notes, cohort:{cohortCode, cohortStartDate, scores}} = allProfiles[profileId];
    const {resume, linkedin, github, mockInterview} = certifications;
    const onTrack = resume && linkedin && github && mockInterview;

    return (
        <main className="profile-content">
            <section className="back-home">
                <Link className="link" to="/"><i className="fa-solid fa-arrow-left-long"></i> Home</Link>
            </section>
            <section className="profile-info">
                <div className="profile-info__picture">
                    <img src={profilePhoto} alt="Profile Photo" style={{border: onTrack ? '2px green solid' : '2px red solid'}}/>
                </div>
                <div className="profile-info__info">
                    <h3>{formatFullname(names)}</h3>
                    <p><span>Student ID: </span>{id}</p>
                    <p><span>Email: </span>{username}</p>
                    <p><span>Birthday: </span>{getReadableDOB(dob)}</p>
                    <p><span>Cohort: </span>{readableDate(cohortCode)}</p>
                    <p><span>Cohort Starting Date: </span>{getReadableDOB(cohortStartDate)}</p>
                </div>
                <MoreInfo codewars={codewars} certifications={certifications} scores={scores}/>
                <Notes notes={notes} profileId={profileId}/>
            </section>
        </main>
    )
}

export default Profile;