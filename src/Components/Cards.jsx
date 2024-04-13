import React, { useContext, useState } from "react";
import { DataContext } from "./DataContext";
import sortBy from "../Helper Functions/sort-by";
import LayoutIcons from "./LayoutIcons";
import cardsDisplayLogic from "../Helper Functions/cards-display-logic";

const Cards = ({showBy}) => {
  const {allProfiles} = useContext(DataContext);
  const objKeys = Object.keys(allProfiles);
  let sortedKeys = sortBy(showBy, allProfiles, objKeys);
  let profileCards = [];
  const [layout, setLayout] = useState('grid');

  if(showBy.searchName !== ''){
    sortedKeys = sortedKeys.filter(objKey => {
      const fullName = `${allProfiles[objKey].names.preferredName} ${allProfiles[objKey].names.middleName} ${allProfiles[objKey].names.surname}`;
      return fullName.toLowerCase().includes(showBy.searchName.toLowerCase());
    })
  }
  if(showBy.byCohort === 'All Cohorts'){
    profileCards = cardsDisplayLogic(showBy, sortedKeys, allProfiles, layout);
  }
  else{
    const filterCohortBy = showBy.byCohort.split(' ').join('');
    const meetsCohortFilter = sortedKeys.filter(objKey => allProfiles[objKey].cohort.cohortCode === filterCohortBy);
    profileCards = cardsDisplayLogic(showBy, meetsCohortFilter, allProfiles, layout);
  }

  return (
    <>
      <div className="profiles-section__header">
        <div>
          <h2>{showBy.byCohort}</h2>
          <p>Total Students: <span>{profileCards.length}</span></p>
        </div>
        <LayoutIcons setLayout = {setLayout}/>
      </div>
      {layout === 'grid' && <div className="profiles-section__cards">
        {profileCards}
      </div>}
      {layout === 'picture' && <div className="profiles-section__pictures">
        {profileCards}
      </div>}
      {layout === 'list' && <div className="profiles-section__names">
        {profileCards}
      </div>}
    </>
  )
}

  export default Cards;