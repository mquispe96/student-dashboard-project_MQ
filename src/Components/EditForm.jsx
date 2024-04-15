import React,{useState, useContext} from "react";
import { DataContext } from "../Components/DataContext";

const EditForm = ({profileId, setShowEditForm, darkMode}) => {
    const {allProfiles, setAllProfiles} = useContext(DataContext);
    const [profileChanges, setProfileChanges] = useState({...allProfiles[profileId]});
    const saveChanges = () => {
        setShowEditForm(false);
        setAllProfiles(prevProfiles => ({
            ...prevProfiles,
            [profileId]: profileChanges
        }));
    }

    return (
        <form className="edit-form" onSubmit={(e) => {e.preventDefault(); saveChanges();}} style={{background: darkMode ? 'rgb(41, 41, 41)' : 'white', color: darkMode ? 'white' : 'black'}}>
            <div>
                <fieldset>
                    <legend>Certifications</legend>
                    <div className="certification-section">
                        <p>Resume:</p>
                        <div>
                            <input type="radio" id="resume-true" checked={profileChanges.certifications.resume === true} 
                                onChange={() => 
                                    setProfileChanges(prevProfile => ({
                                            ...prevProfile, 
                                                certifications: {
                                                    ...prevProfile.certifications, 
                                                        resume: true
                                                }
                                        })
                                    )
                                }
                            />
                            <label htmlFor="resume-true"> True</label>
                            <input type="radio" id="resume-false" checked={profileChanges.certifications.resume === false} 
                                onChange={() => 
                                    setProfileChanges(prevProfile => ({
                                            ...prevProfile, 
                                                certifications: {
                                                    ...prevProfile.certifications, 
                                                        resume: false
                                                }
                                        })
                                    )
                                }
                            />
                            <label htmlFor="resume-false"> False</label>
                        </div>
                    </div>
                    <div className="certification-section">
                        <p>LinkedIn:</p>
                        <div>
                            <input type="radio" id="linkedin-true" checked={profileChanges.certifications.linkedin === true} 
                                onChange={() => 
                                    setProfileChanges(prevProfile => ({
                                            ...prevProfile, 
                                                certifications: {
                                                    ...prevProfile.certifications, 
                                                        linkedin: true
                                                }
                                        })
                                    )
                                }
                            />
                            <label htmlFor="linkedin-true"> True</label>
                            <input type="radio" id="linkedin-false" checked={profileChanges.certifications.linkedin === false} 
                                onChange={() => 
                                    setProfileChanges(prevProfile => ({
                                            ...prevProfile, 
                                                certifications: {
                                                    ...prevProfile.certifications, 
                                                        linkedin: false
                                                }
                                        })
                                    )
                                }
                            />
                            <label htmlFor="linkedin-false"> False</label>
                        </div>
                    </div>
                    <div className="certification-section">
                        <p>GitHub:</p>
                        <div>
                            <input type="radio" id="github-true" checked={profileChanges.certifications.github === true} 
                                onChange={() => 
                                    setProfileChanges(prevProfile => ({
                                            ...prevProfile, 
                                                certifications: {
                                                    ...prevProfile.certifications, 
                                                        github: true
                                                }
                                        })
                                    )
                                }
                            />
                            <label htmlFor="github-true"> True</label>
                            <input type="radio" id="github-false" checked={profileChanges.certifications.github === false} 
                                onChange={() => 
                                    setProfileChanges(prevProfile => ({
                                            ...prevProfile, 
                                                certifications: {
                                                    ...prevProfile.certifications, 
                                                        github: false
                                                }
                                        })
                                    )
                                }
                            />
                            <label htmlFor="github-false"> False</label>
                        </div>
                    </div>
                    <div className="certification-section">
                        <p>Mock Interview:</p>
                        <div>
                            <input type="radio" id="mockInterview-true" checked={profileChanges.certifications.mockInterview === true} 
                                onChange={() => 
                                    setProfileChanges(prevProfile => ({
                                            ...prevProfile, 
                                                certifications: {
                                                    ...prevProfile.certifications, 
                                                        mockInterview: true
                                                }
                                        })
                                    )
                                }
                            />
                            <label htmlFor="mockInterview-true"> True</label>
                            <input type="radio" id="mockInterview-false" checked={profileChanges.certifications.mockInterview === false} 
                                onChange={() => 
                                    setProfileChanges(prevProfile => ({
                                            ...prevProfile, 
                                                certifications: {
                                                    ...prevProfile.certifications, 
                                                        mockInterview: false
                                                }
                                        })
                                    )
                                }
                            />
                            <label htmlFor="mockInterview-false"> False</label>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div>
                <fieldset className="scores">
                    <legend>Scores</legend>
                    <label htmlFor="assignments">Assignments: </label>
                    <input type="tel" id="assignments" required autoComplete="off" value={profileChanges.cohort.scores.assignments} 
                        onChange={(e) => 
                            setProfileChanges(prevProfile => ({
                                    ...prevProfile, 
                                        cohort: {
                                            ...prevProfile.cohort, 
                                                scores: {
                                                    ...prevProfile.cohort.scores, 
                                                    assignments: Number(e.target.value)
                                                }
                                        }
                                })
                            )
                        }
                    /><br />
                    <label htmlFor="projects">Projects: </label>
                    <input type="tel" id="projects" required autoComplete="off" value={profileChanges.cohort.scores.projects} 
                        onChange={(e) => 
                            setProfileChanges(prevProfile => ({
                                    ...prevProfile, 
                                        cohort: {
                                            ...prevProfile.cohort, 
                                                scores: {
                                                    ...prevProfile.cohort.scores, 
                                                    projects: Number(e.target.value)
                                                }
                                        }
                                })
                            )
                        }
                    /><br />
                    <label htmlFor="assessments">Assessments: </label>
                    <input type="tel" id="assessments" required autoComplete="off" value={profileChanges.cohort.scores.assessments} 
                        onChange={(e) => 
                            setProfileChanges(prevProfile => ({
                                    ...prevProfile, 
                                        cohort: {
                                            ...prevProfile.cohort, 
                                                scores: {
                                                    ...prevProfile.cohort.scores, 
                                                    assessments: Number(e.target.value)
                                                }
                                        }
                                })
                            )
                        }
                    />
                </fieldset>
            </div>
            <div className="form-btns">
                <button onClick={(e) => {e.preventDefault(); setShowEditForm(false)}}>Cancel</button>
                <button type="submit">Save</button>
            </div>
        </form>
    )
}

export default EditForm;