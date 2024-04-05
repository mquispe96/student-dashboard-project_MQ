import React from "react";
import Card from "./Card";

const Cards = ({filterCohortBy, allprofiles}) => {
    let profileCards = [];
    const cohortKeys = Object.keys(allprofiles);
    if(filterCohortBy === 'All Students'){
      profileCards = cohortKeys.map((key, idx) => {
        return (
          <Card key = {idx} profileObj = {allprofiles[key]}/>
        )
      })
    }
    else{
      const filterBy = filterCohortBy.split(' ').join('');
      const meetsFilter = cohortKeys.filter(key => allprofiles[key].cohort.cohortCode === filterBy);
      profileCards = meetsFilter.map((key, idx) => {
        return (
          <Card key = {idx} profileObj = {allprofiles[key]}/>
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