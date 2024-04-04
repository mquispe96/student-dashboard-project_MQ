import data from "../data/data.json";
import readableDate from "../Helper Functions/readable-date";
import customSort from "../Helper Functions/custom-sort";

const CohortsOpts = () => {
    const cohorts = customSort(Array.from(new Set(data.map(personObj => readableDate(personObj.cohort.cohortCode)))));
    cohorts.unshift('All Students');

    const cohortsDisplay = cohorts.map((cohort, idx) => {
        return (
            <div key={cohort + idx} className="cohort-opts-section__ea-opt">
                <h4>{cohort}</h4>
            </div>
        )
    })

    return (
        <section className="cohort-opts-section">
            <div className="cohort-opts-section__title">
                <h3>Choose a Class by Start Date</h3>
            </div>
            {cohortsDisplay}
        </section>
    )
}

export default CohortsOpts;