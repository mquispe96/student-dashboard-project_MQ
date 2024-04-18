import React from "react";
import Select from 'react-select';
import CohortsOpts from "./CohortsOpts";

const ShowBy = ({showBy, setShowBy}) => {
    const trackOpts = [
        {value: 'all', label: 'All Students'},
        {value: 'onTrack', label: 'On Track'},
        {value: 'offTrack', label: 'Off Track'}
    ];
    const sortOpts = [
        {value: 'default', label: 'Default'},
        {value: 'a-b', label: 'CodeWars Low - High'},
        {value: 'b-a', label: 'CodeWars High - Low'},
        {value: 'a-z', label: 'Name A - Z'},
        {value: 'z-a', label: 'Name Z - A'}
    ];

    return (
        <section className="showBy-section">
            <div className="showBy-section__eaBy">
                <label htmlFor="byCohort">Filter Cohorts by: </label>
                <Select className='select-container' classNamePrefix='Select' inputId="byCohort" value = {showBy.byCohort} onChange = {selected => setShowBy({...showBy, byCohort: selected})} options={CohortsOpts()}/>
            </div>
            <div className="showBy-section__eaBy">
                <label htmlFor="byTrack">Filter Students Track by: </label>
                <Select className='select-container' classNamePrefix='Select' inputId="byTrack" value = {showBy.byTrack} onChange = {selected => setShowBy({...showBy, byTrack: selected})} options={trackOpts}/>
            </div>
            <div className="showBy-section__eaBy">
                <label htmlFor="sortBy">Sort Students by: </label>
                <Select className='select-container' classNamePrefix='Select' inputId="sortBy" value = {showBy.sortBy} onChange = {selected => setShowBy({...showBy, sortBy: selected})} options={sortOpts}/>
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