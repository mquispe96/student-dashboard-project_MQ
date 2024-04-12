import React from "react";
import getScore from "../Helper Functions/get-score";
import formatScorePercentage from "../Helper Functions/format-score-percentage";
import getPercentageColor from "../Helper Functions/get-percentage-color";
import { FcApprove } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";

const MoreInfo = ({codewars, certifications, scores}) => {
    const {current:{total, lastWeek}, goal} = codewars;
    const {resume, linkedin, github, mockInterview} = certifications;
    const {assignments, projects, assessments} = scores;
    const cwGoalPercentage = formatScorePercentage(getScore(total, goal.total));
    const assignmentsPercentage = formatScorePercentage(assignments);
    const projectsPercentage = formatScorePercentage(projects);
    const assessmentsPercentage = formatScorePercentage(assessments);
    
    return (
        <div className="more-info">
            <div className="codewars">
                <h3>Codewars</h3>
                <p><span>Total Goal:</span> {goal.total}</p>
                <p><span>Current Total:</span> {total}</p>
                <p><span>Last Week:</span> {lastWeek}</p>
                <p style={{color: getPercentageColor(cwGoalPercentage)}}><span>% of Goal Achieved:</span> {cwGoalPercentage}</p>
            </div>
            <div className="scores">
                <h3>Scores</h3>
                <p style={{color: getPercentageColor(assignmentsPercentage)}}><span>Assignments:</span> {assignmentsPercentage}</p>
                <p style={{color: getPercentageColor(projectsPercentage)}}><span>Projects:</span> {projectsPercentage}</p>
                <p style={{color: getPercentageColor(assessmentsPercentage)}}><span>Assessments:</span> {assessmentsPercentage}</p>
            </div>
            <div className="certifications">
                <h3>Certifications</h3>
                <p><span>Resume:</span> {resume ? <FcApprove /> : <FcDisapprove />}</p>
                <p><span>LinkedIn:</span> {linkedin ? <FcApprove /> : <FcDisapprove />}</p>
                <p><span>Mock Interview:</span> {mockInterview ? <FcApprove /> : <FcDisapprove />}</p>
                <p><span>GitHub:</span> {github ? <FcApprove /> : <FcDisapprove />}</p>
            </div>
        </div>
    )
}

export default MoreInfo;