import React,{useContext, useState} from "react";
import {Link} from 'react-router-dom';
import formatFullname from "../Helper Functions/format-fullname";
import { DataContext } from "./DataContext";
import copyToClipboard from "../Helper Functions/copy-to-clipboard";

const Card = ({objKey}) => {
  const {allProfiles} = useContext(DataContext);
  const {names, username, profilePhoto, codewars: {current: {total}}, certifications} = allProfiles[objKey];
  const {resume, linkedin, github, mockInterview} = certifications;
  const onTrack = resume && linkedin && github && mockInterview && (total > 600);
  const [copyConfirmation, setCopyConfirmation] = useState(false);
  
  return (
      <div key={objKey} className="card">
          <div className="card__picture">
            <img src={profilePhoto} alt="Profile Photo" style={{border: onTrack ? '5px green solid' : '5px red solid', height: '130px'}}/>
          </div>
          <div className="card__info">
            <h3>{formatFullname(names)}</h3>
            {!copyConfirmation && <p className = 'username' onClick={() => copyToClipboard(username, setCopyConfirmation)}>{username}</p>}
            {copyConfirmation && <p style={{color: 'green'}}>Email copied!</p>}
          </div>
          <div className="card__profile-link">
            <Link className='link' to={`/Profile/${objKey}`}>Profile Page <i className="fa-solid fa-arrow-right-long"></i></Link>
          </div>
      </div>
  )
}

export default Card;