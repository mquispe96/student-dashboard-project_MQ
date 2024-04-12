import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import { DataContext } from "./DataContext";

const Picture = ({objKey}) => {
    const {allProfiles} = useContext(DataContext);
    const {profilePhoto, certifications} = allProfiles[objKey];
    const {resume, linkedin, github, mockInterview} = certifications;
    const onTrack = resume && linkedin && github && mockInterview;
    
    return (
        <div key={objKey} className="picture-card">
            <Link className='link' to={`/Profile/${objKey}`}>
                <img src={profilePhoto} alt="Profile Photo" style={{border: onTrack ? '5px green solid' : '5px red solid'}}/>
            </Link>
        </div>
    )
}

export default Picture;
