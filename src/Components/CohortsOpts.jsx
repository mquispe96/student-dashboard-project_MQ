import React from "react";
import data from "../data/data.json";
import readableDate from "../Helper Functions/readable-date";
import customSort from "../Helper Functions/custom-sort";

const CohortsOpts = ({setFilterCohortBy}) => {
    const cohorts = customSort(Array.from(new Set(data.map(personObj => readableDate(personObj.cohort.cohortCode)))));
    cohorts.unshift('All Students');

    const cohortsDisplay = cohorts.map((cohort, idx) => {
        return (
            <div key={cohort + idx} className="cohort-opts-section__ea-opt">
                <h3 onClick={() => setFilterCohortBy(cohort)}>{cohort}</h3>
            </div>
        )
    })

    return (
        <section className="cohort-opts-section">
            <div className="cohort-opts-section__title">
                <h2>Choose a Class by Start Date</h2>
            </div>
            {cohortsDisplay}
        </section>
    )
}

export default CohortsOpts;