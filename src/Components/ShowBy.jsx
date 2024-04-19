import React, { useContext } from "react";
import Select from 'react-select';
import CohortsOpts from "./CohortsOpts";
import { DataContext } from "./DataContext";

const ShowBy = ({showBy, setShowBy}) => {
    const {darkMode} = useContext(DataContext)
    const trackOpts = [
        {value: 'all', label: 'All Students'},
        {value: 'onTrack', label: 'On Track'},
        {value: 'offTrack', label: 'Off Track'}
    ];
    const defaultSortOpt = [
        {value: 'default', label: 'Default'}
    ];
    const codewarsSortOpts = [
        {value: 'a-b', label: 'Lowest - Highest'},
        {value: 'b-a', label: ' Highest - Lowest'}
    ]
    const nameSortOpts = [
        {value: 'a-z', label: 'A - Z'},
        {value: 'z-a', label: 'Z - A'}
    ]
    const groupedOpts = [
        {label: 'Default', options: defaultSortOpt},
        {label: 'Codewars', options: codewarsSortOpts},
        {label: 'Names', options: nameSortOpts}
    ]

    return (
        <section className="showBy-section">
            <div className="showBy-section__eaBy">
                <label htmlFor="byCohort">Filter Cohorts by: </label>
                <Select className='select-container' classNamePrefix='Select' inputId="byCohort" value = {showBy.byCohort} onChange = {selected => setShowBy({...showBy, byCohort: selected})} options={CohortsOpts()}
                    styles={{menu: provided => ({...provided, background: darkMode ? 'rgb(41, 41, 41)' : 'white'})}}
                />
            </div>
            <div className="showBy-section__eaBy">
                <label htmlFor="byTrack">Filter Students Track by: </label>
                <Select className='select-container' classNamePrefix='Select' inputId="byTrack" value = {showBy.byTrack} onChange = {selected => setShowBy({...showBy, byTrack: selected})} options={trackOpts}
                    styles={{menu: provided => ({...provided, background: darkMode ? 'rgb(41, 41, 41)' : 'white'})}}
                />
            </div>
            <div className="showBy-section__eaBy">
                <label htmlFor="sortBy">Sort Students by: </label>
                <Select className='select-container' classNamePrefix='Select' inputId="sortBy" value = {showBy.sortBy} onChange = {selected => setShowBy({...showBy, sortBy: selected})} options={groupedOpts}
                    styles={{menu: provided => ({...provided, background: darkMode ? 'rgb(41, 41, 41)' : 'white'})}}
                />
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