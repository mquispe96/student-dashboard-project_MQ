import React,{useState, useEffect} from "react";
import "../Styles/home.css";
import Cards from "../Components/Cards";
import ShowBy from "../Components/ShowBy";

const Home = () => {
    const [showBy, setShowBy] = useState({
        byCohort: 'All Cohorts',
        byTrack: 'all',
        sortBy: 'default',
        searchName: ''
    });
    const [profileCardsDisplay, setProfileCardsDisplay] = useState('');

    useEffect(() => {
        setProfileCardsDisplay(<Cards showBy = {showBy}/>)
    }, [showBy])

    return (
        <main className="content">
            <ShowBy showBy = {showBy} setShowBy = {setShowBy}/>
            <section className="profiles-section">
                {profileCardsDisplay}
            </section>
        </main>
    )
}

export default Home;