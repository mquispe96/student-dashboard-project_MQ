import React,{useContext, useState} from "react";
import formatFullname from "../Helper Functions/format-fullname";
import getReadableDOB from "../Helper Functions/get-readable-dob";
import MoreInfo from "./MoreInfo";
import Notes from "./Notes";
import { DataContext } from "./DataContext";

const Card = ({objKey}) => {
  const {allProfiles} = useContext(DataContext);
    const {id, names, username, dob, profilePhoto, 
        codewars, certifications, 
        notes, cohort:{cohortCode, cohortStartDate, scores}} = allProfiles[objKey];
    const {resume, linkedin, github, mockInterview} = certifications;
    const onTrack = resume && linkedin && github && mockInterview;

    const [expanded, setExpanded] = useState(false);
    
    return (
        <div key={id} className="card">
            <div className="card__picture">
              <img src={profilePhoto} alt="Profile Photo" style={{height: '130px'}}/>
            </div>
            <div className="card__info">
              <h3>{formatFullname(names)}</h3>
              <p>{username}</p>
              <p><span>Birthday:</span> {getReadableDOB(dob)}</p>
            </div>
            <div className="card__track">
              <span style={{color: !onTrack ? 'red' : ''}}>{onTrack ? 'On track to Graduate' : 'Some Requirements Needed'}</span>
            </div>
            <div className="card__expandBtn-section">
              <span onClick={() => setExpanded(prevExpanded => !prevExpanded)} className="expand-btn">{!expanded ? 'Show More...' : 'Show Less...'}</span>
            </div>
            {expanded && (
                <div className="card__expanded-section">
                  <MoreInfo codewars = {codewars} certifications = {certifications} scores = {scores}/>
                  <Notes objKey = {objKey} notes = {notes}/>
                </div>
            )}
        </div>
    )
}

export default Card;