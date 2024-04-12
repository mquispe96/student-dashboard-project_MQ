import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import formatFullname from "../Helper Functions/format-fullname";
import { DataContext } from "./DataContext";

const FullName = ({objKey}) => {
    const {allProfiles} = useContext(DataContext);
    const {names, certifications} = allProfiles[objKey];
    const {resume, linkedin, github, mockInterview} = certifications;
    const onTrack = resume && linkedin && github && mockInterview;

    return (
        <div className="name-card">
            <Link className='link' to={`/Profile/${objKey}`}>
                <h3 style={{color: onTrack ? 'green' : 'red'}}>{formatFullname(names)}</h3>
            </Link>
        </div>
    )
}

export default FullName;
