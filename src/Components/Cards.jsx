import React from "react";
import Card from "./Card";

const Cards = ({filterCohortBy, allProfiles}) => {
    let profileCards = [];
    const cohortKeys = Object.keys(allProfiles);
    if(filterCohortBy === 'All Students'){
      profileCards = cohortKeys.map((objKey, idx) => {
        return (
          <Card key = {idx} objKey = {objKey}/>
        )
      })
    }
    else{
      const filterBy = filterCohortBy.split(' ').join('');
      const meetsFilter = cohortKeys.filter(objKey => allProfiles[objKey].cohort.cohortCode === filterBy);
      profileCards = meetsFilter.map((objKey, idx) => {
        return (
          <Card key = {idx} objKey = {objKey}/>
        )
      })
    }
    return (
      <>
        <div className="profiles-section__header">
          <h2>{filterCohortBy}</h2>
          <p>Total Students: <span>{profileCards.length}</span></p>
        </div>
        <div className="profiles-section__cards">
          {profileCards}
        </div>
      </>
    )
  }

  export default Cards;