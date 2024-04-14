import React from "react";
import CohortsOpts from "./CohortsOpts";

const ShowBy = ({showBy, setShowBy}) => {
    return (
        <section className="showBy-section">
            <div className="showBy-section__eaBy">
                <label htmlFor="byCohort">Filter Cohorts by: </label>
                <select id="byCohort" value = {showBy.byCohort} onChange = {(e) => setShowBy({...showBy, byCohort: e.target.value})}>
                    <CohortsOpts />
                </select>
            </div>
            <div className="showBy-section__eaBy">
                <label htmlFor="byTrack">Filter Students Track by: </label>
                <select id="byTrack" value = {showBy.byTrack} onChange = {(e) => setShowBy({...showBy, byTrack: e.target.value})}>
                    <option value = 'all'>All Students</option>
                    <option value = 'onTrack'>On Track</option>
                    <option value = 'offTrack'>Off Track</option>
                </select>
            </div>
            <div className="showBy-section__eaBy">
                <label htmlFor="cwScore">Sort Students by: </label>
                <select id="cwScore" value = {showBy.sortBy} onChange = {(e) => setShowBy({...showBy, sortBy: e.target.value})}>
                    <option value = 'default'>Default</option>
                    <option value = 'a-b'>CodeWars Lowest - Highest</option>
                    <option value = 'b-a'>CodeWars Highest - Lowest</option>
                    <option value = 'a-z'>Name A - Z</option>
                    <option value = 'z-a'>Name Z - A</option>
                </select>
            </div>
            <div className="showBy-section__eaBy searchName">  
                <label htmlFor="searchName">Search Students by Name: </label>
                <input type = 'search' placeholder='Search' id = 'searchName' value = {showBy.searchName} 
                    onChange = {(e) => setShowBy({...showBy, searchName: e.target.value})} autoComplete = 'off'/>
            </div>
        </section>
    )
}

export default ShowBy;