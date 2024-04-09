import React, { useContext } from "react";
import Card from "./Card";
import { DataContext } from "./DataContext";
import sortBy from "../Helper Functions/sort-by";

const Cards = () => {
    const {showBy, allProfiles} = useContext(DataContext);
    const objKeys = Object.keys(allProfiles);
    let sortedKeys = sortBy(showBy, allProfiles, objKeys);
    let profileCards = [];
    if(showBy.searchName !== ''){
      sortedKeys = sortedKeys.filter(objKey => {
        const fullName = `${allProfiles[objKey].names.preferredName} ${allProfiles[objKey].names.middleName} ${allProfiles[objKey].names.surname}`;
        return fullName.toLowerCase().includes(showBy.searchName.toLowerCase());
      })
    }
    if(showBy.byCohort === 'All Cohorts'){
      if(showBy.byTrack === 'all'){
        profileCards = sortedKeys.map((objKey, idx) => {
          return (
            <Card key = {idx} objKey = {objKey}/>
          )
        })
      }
      else if(showBy.byTrack === 'onTrack'){
        const meetsTrackFilter = sortedKeys.filter(objKey => allProfiles[objKey].certifications.resume && allProfiles[objKey].certifications.linkedin && allProfiles[objKey].certifications.github && allProfiles[objKey].certifications.mockInterview);
        profileCards = meetsTrackFilter.map((objKey, idx) => {
          return (
            <Card key = {idx} objKey = {objKey}/>
          )
        })
      }
      else{
        const meetsTrackFilter = sortedKeys.filter(objKey => !allProfiles[objKey].certifications.resume || !allProfiles[objKey].certifications.linkedin || !allProfiles[objKey].certifications.github || !allProfiles[objKey].certifications.mockInterview);
        profileCards = meetsTrackFilter.map((objKey, idx) => {
          return (
            <Card key = {idx} objKey = {objKey}/>
          )
        })
      }
    }
    else{
      const filterCohortBy = showBy.byCohort.split(' ').join('');
      const meetsCohortFilter = sortedKeys.filter(objKey => allProfiles[objKey].cohort.cohortCode === filterCohortBy);
      if(showBy.byTrack === 'all'){
        profileCards = meetsCohortFilter.map((objKey, idx) => {
          return (
            <Card key = {idx} objKey = {objKey}/>
          )
        })
      }
      else if(showBy.byTrack === 'onTrack'){
        const meetsTrackFilter = meetsCohortFilter.filter(objKey => allProfiles[objKey].certifications.resume && allProfiles[objKey].certifications.linkedin && allProfiles[objKey].certifications.github && allProfiles[objKey].certifications.mockInterview);
        profileCards = meetsTrackFilter.map((objKey, idx) => {
          return (
            <Card key = {idx} objKey = {objKey}/>
          )
        })
      }
      else{
        const meetsTrackFilter = meetsCohortFilter.filter(objKey => !allProfiles[objKey].certifications.resume || !allProfiles[objKey].certifications.linkedin || !allProfiles[objKey].certifications.github || !allProfiles[objKey].certifications.mockInterview);
        profileCards = meetsTrackFilter.map((objKey, idx) => {
          return (
            <Card key = {idx} objKey = {objKey}/>
          )
        })
      }
    }

    return (
      <>
        <div className="profiles-section__header">
          <h2>{showBy.byCohort}</h2>
          <p>Total Students: <span>{profileCards.length}</span></p>
        </div>
        <div className="profiles-section__cards">
          {profileCards}
        </div>
      </>
    )
  }

  export default Cards;