import React,{useState} from "react";
import "../Styles/layout.css";
import {Outlet} from 'react-router-dom';
import data from "../data/data.json";
import { DataContext } from "../Components/DataContext";

const Layout = () => {
    const [allProfiles, setAllProfiles] = useState({...data}); 

    return (
        <DataContext.Provider value = {{allProfiles, setAllProfiles}}>
        <header className="header">
            <h1>Student Dashboard</h1>
        </header>
        <Outlet />
        </DataContext.Provider>
    );
}

export default Layout;