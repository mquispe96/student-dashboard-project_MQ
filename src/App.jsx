import React,{useState, useEffect} from "react";
import CohortsOpts from "./Components/CohortsOpts";
import data from "./data/data.json";
import Cards from "./Components/Cards";

const App = () => {
  const [allprofiles, setAllProfiles] = useState({...data}); console.log(allprofiles)
  const [filterCohortBy, setFilterCohortBy] = useState('All Students');
  const [profileCardsDisplay, setProfileCardsDisplay] = useState('');

  useEffect(() => {
    setProfileCardsDisplay(<Cards filterCohortBy = {filterCohortBy} allprofiles = {allprofiles}/>)
  }, [filterCohortBy])

  return (
    <>
      <header className="header">
        <h1>Student Dashboard</h1>
      </header>
      <main className="content">
        <CohortsOpts setFilterCohortBy={setFilterCohortBy}/>
        <section className="profiles-section">
          {profileCardsDisplay}
        </section>
      </main>
    </>
  );
}

export default App;