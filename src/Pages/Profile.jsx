import React,{useState, useContext} from "react";
import "../Styles/profile.css";
import { DataContext } from "../Components/DataContext";
import {useParams, Link} from 'react-router-dom';
import formatFullname from "../Helper Functions/format-fullname";
import getReadableDOB from "../Helper Functions/get-readable-dob";
import readableDate from "../Helper Functions/readable-date";
import MoreInfo from "../Components/MoreInfo";
import Notes from "../Components/Notes";
import EditForm from "../Components/EditForm";
import { FaUserEdit } from "react-icons/fa";

const Profile = () => {
    const {profileId} = useParams();
    const {allProfiles, darkMode} = useContext(DataContext);
    const {names, username, dob, profilePhoto, codewars, certifications, 
            cohort:{cohortCode, cohortStartDate, scores}} = allProfiles[profileId];
    const {current: {total}} = codewars;
    const {resume, linkedin, github, mockInterview} = certifications;
    const onTrack = resume && linkedin && github && mockInterview && (total > 600);
    const [showEditForm, setShowEditForm] = useState(false);

    return (
        <main className="profile-content" style={{background: darkMode ? 'rgb(41, 41, 41)' : 'white', color: darkMode ? 'white' : 'black'}}>
            <section className="back-home">
                <Link className="link" to="/"><i className="fa-solid fa-arrow-left-long"></i> Home</Link>
            </section>
            <section className="profile-info">
                <div className="profile-info__main">
                    <div className="info">
                        <div>
                            <img src={profilePhoto} alt="Profile Photo" style={{border: onTrack ? '5px green solid' : '5px red solid'}}/>
                        </div>
                        <div>
                            <h3>{formatFullname(names)} <FaUserEdit onClick={() => setShowEditForm(true)} className="edit"/></h3>
                            <p><span>Email: </span>{username}</p>
                            <p><span>Birthday: </span>{getReadableDOB(dob)}</p>
                            <p><span>Cohort: </span>{readableDate(cohortCode)}</p>
                            <p><span>Cohort Started: </span>{getReadableDOB(cohortStartDate)}</p>
                        </div>
                    </div>
                </div>
                <MoreInfo codewars={codewars} certifications={certifications} scores={scores}/>
                <Notes profileId={profileId}/>
            </section>
            {showEditForm && <EditForm profileId={profileId} setShowEditForm={setShowEditForm}/>}
        </main>
    )
}

export default Profile;