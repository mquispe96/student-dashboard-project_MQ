import CohortsOpts from "./Components/CohortsOpts";
import data from "./data/data.json";

const App = () => {
  

  return (
    <>
      <header className="header">
        <h1>Student Dashboard</h1>
      </header>
      <main className="content">
        <CohortsOpts />
        <section className="profiles-display">
          
        </section>
      </main>
    </>
  );
}

export default App;