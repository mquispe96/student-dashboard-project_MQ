import React,{useState, useEffect} from "react";
import data from "./data/data.json";
import Cards from "./Components/Cards";
import { DataContext } from "./Components/DataContext";
import ShowBy from "./Components/ShowBy";

const App = () => {
  const [allProfiles, setAllProfiles] = useState({...data}); 
  const [showBy, setShowBy] = useState({
    byCohort: 'All Cohorts',
    byTrack: 'all',
    sortBy: 'default',
    searchName: ''
  });
  const [profileCardsDisplay, setProfileCardsDisplay] = useState('');

  useEffect(() => {
    setProfileCardsDisplay(<Cards />)
  }, [showBy])

  return (
    <DataContext.Provider value = {{allProfiles, setAllProfiles, showBy, setShowBy}}>
      <header className="header">
        <h1>Student Dashboard</h1>
      </header>
      <main className="content">
        <ShowBy />
        <section className="profiles-section">
          {profileCardsDisplay}
        </section>
      </main>
    </DataContext.Provider>
  );
}

export default App;