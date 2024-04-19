import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import formatFullname from "../Helper Functions/format-fullname";
import { DataContext } from "./DataContext";

const FullName = ({objKey}) => {
    const {allProfiles} = useContext(DataContext);
    const {names, codewars: {current: {total}}, certifications} = allProfiles[objKey];
    const {resume, linkedin, github, mockInterview} = certifications;
    const onTrack = resume && linkedin && github && mockInterview && (total > 600);

    return (
        <div className="name-card">
            <Link className='link' to={`/Profile/${objKey}`} style={{background: onTrack ? 'rgba(0, 128, 1, .8)' : 'rgba(255, 0, 0, .8)'}}>
                {formatFullname(names)}
            </Link>
        </div>
    )
}

export default FullName;