import React,{useContext, useState} from "react";
import {Link} from 'react-router-dom';
import formatFullname from "../Helper Functions/format-fullname";
import { DataContext } from "./DataContext";

const Card = ({objKey}) => {
  const {allProfiles} = useContext(DataContext);
  const {id, names, username, profilePhoto, certifications} = allProfiles[objKey];
  const {resume, linkedin, github, mockInterview} = certifications;
  const onTrack = resume && linkedin && github && mockInterview;
  
  return (
      <div key={id} className="card" style={{border: onTrack ? '3px green solid' : '3px red solid'}}>
          <div className="card__picture">
            <img src={profilePhoto} alt="Profile Photo" style={{height: '130px'}}/>
          </div>
          <div className="card__info">
            <h3>{formatFullname(names)}</h3>
            <p>{username}</p>
          </div>
          <div className="card__profile-link">
            <Link className='link' to={`/Profile/${objKey}`}>Profile Page <i className="fa-solid fa-arrow-right-long"></i></Link>
          </div>
      </div>
  )
}

export default Card;