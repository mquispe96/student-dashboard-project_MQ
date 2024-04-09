import React,{useState, useEffect} from "react";
import CohortsOpts from "./Components/CohortsOpts";
import data from "./data/data.json";
import Cards from "./Components/Cards";
import { DataContext } from "./Components/DataContext";

const App = () => {
  const [allProfiles, setAllProfiles] = useState({...data}); 
  const [filterCohortBy, setFilterCohortBy] = useState('All Students');
  const [profileCardsDisplay, setProfileCardsDisplay] = useState('');

  useEffect(() => {
    setProfileCardsDisplay(<Cards filterCohortBy = {filterCohortBy} allProfiles = {allProfiles}/>)
  }, [filterCohortBy])

  return (
    <DataContext.Provider value = {{allProfiles, setAllProfiles}}>
      <header className="header">
        <h1>Student Dashboard</h1>
      </header>
      <main className="content">
        <CohortsOpts setFilterCohortBy={setFilterCohortBy}/>
        <section className="profiles-section">
          {profileCardsDisplay}
        </section>
      </main>
    </DataContext.Provider>
  );
}

export default App;