import { useContext } from "react";
import readableDate from "../Helper Functions/readable-date";
import customSort from "../Helper Functions/custom-sort";
import { DataContext } from "./DataContext";

const CohortsOpts = () => {
    const {allProfiles} = useContext(DataContext);
    const objKeys = Object.keys(allProfiles);
    const cohorts = customSort(
                        Array.from(
                            new Set(
                                objKeys.map(objKey => 
                                    readableDate(
                                        allProfiles[objKey].cohort.cohortCode
                                    )
                                )
                            )
                        )
                    );
    cohorts.unshift('All Cohorts');

    return cohorts.map(cohort => ({value: cohort, label: cohort}))
}

export default CohortsOpts;