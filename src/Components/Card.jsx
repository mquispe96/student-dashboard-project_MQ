import React,{useState} from "react";
import formatFullname from "../Helper Functions/format-fullname";
import getReadableDOB from "../Helper Functions/get-readable-dob";
import MoreInfo from "./MoreInfo";

const Card = ({profileObj}) => {
    const {id, names, username, dob, profilePhoto, 
        codewars, certifications, 
        notes: allNotes, cohort:{cohortCode, cohortStartDate, scores}} = profileObj;
    const {resume, linkedin, github, mockInterview} = certifications;
    const onTrack = resume && linkedin && github && mockInterview;
    const needsWork = !resume || !linkedin || !github || !mockInterview;

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };

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
              <span style={{color: needsWork ? 'red' : ''}}>{onTrack ? 'On track to Graduate' : 'Some Requirements Needed'}</span>
            </div>
            <div className="card__expandBtn-section">
              <span onClick={toggleExpand} className="expand-btn">{!expanded ? 'Show More...' : 'Show Less...'}</span>
            </div>
            {/* {expanded && ( */}
                <MoreInfo codewars = {codewars} certifications = {certifications} scores = {scores}/>
            {/* )} */}
        </div>
    )
}

export default Card;