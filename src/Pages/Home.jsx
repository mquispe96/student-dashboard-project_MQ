import React,{useState, useEffect, useContext} from "react";
import "../Styles/home.css";
import Cards from "../Components/Cards";
import ShowBy from "../Components/ShowBy";
import { DataContext } from "../Components/DataContext";

const Home = () => {
    const {darkMode} = useContext(DataContext);
    const [showBy, setShowBy] = useState({
        byCohort: {value: 'All Cohorts', label: 'All Cohorts'},
        byTrack: {value: 'all', label: 'All Students'},
        sortBy: {value: 'default', label: 'Default'},
        searchName: ''
    });
    const [profileCardsDisplay, setProfileCardsDisplay] = useState('');

    useEffect(() => {
        setProfileCardsDisplay(<Cards showBy = {showBy}/>)
    }, [showBy])

    return (
        <main className="content" style={{background: darkMode ? 'rgb(41, 41, 41)' : 'white', color: darkMode ? 'white' : 'black'}}>
            <ShowBy showBy = {showBy} setShowBy = {setShowBy}/>
            <section className="profiles-section">
                {profileCardsDisplay}
            </section>
        </main>
    )
}

export default Home;