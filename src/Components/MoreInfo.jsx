import React from "react";
import getScore from "../Helper Functions/get-score";
import formatScorePercentage from "../Helper Functions/format-score-percentage";

const MoreInfo = ({codewars, certifications, scores}) => {
    const {current:{total, lastWeek}, goal} = codewars;
    const {resume, linkedin, github, mockInterview} = certifications;
    const {assignments, projects, assessments} = scores;
    return (
        <div className="card__more-info">
            <div className="codewars">
                <h3>Codewars:</h3>
                <p><span>Current Total:</span> {total}</p>
                <p><span>Last Week:</span> {lastWeek}</p>
                <p><span>Goal:</span> {goal.total}</p>
                <p><span>Percentage of Goal Achieved:</span> {formatScorePercentage(getScore(total, goal.total))}</p>
            </div>
            <div className="scores">
                <h3>Scores</h3>
                <p><span>Assignments:</span> {formatScorePercentage(assignments)}</p>
                <p><span>Projects:</span> {formatScorePercentage(projects)}</p>
                <p><span>Assessments:</span> {formatScorePercentage(assessments)}</p>
            </div>
            <div className="certifications">
                <h3>Certifications</h3>
                <p><span>Resume:</span> {resume ? '✅' : '❌'}</p>
                <p><span>LinkedIn:</span> {linkedin ? '✅' : '❌'}</p>
                <p><span>Mock Interview:</span> {mockInterview ? '✅' : '❌'}</p>
                <p><span>GitHub:</span> {github ? '✅' : '❌'}</p>
            </div>
        </div>
    )
}

export default MoreInfo;