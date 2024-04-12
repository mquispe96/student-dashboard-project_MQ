import React,{useState} from "react";
import "../Styles/layout.css";
import {Outlet} from 'react-router-dom';
import data from "../data/data.json";
import { DataContext } from "../Components/DataContext";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const Layout = () => {
    const [allProfiles, setAllProfiles] = useState({...data});
    const [darkMode, setDarkMode] = useState(false)

    return (
        <DataContext.Provider value = {{allProfiles, setAllProfiles, darkMode}}>
            <header className="header">
                <h1>Student Dashboard</h1>
                <div className="dark-mode">
                    {darkMode && <FaRegMoon onClick={() => setDarkMode(prevState => !prevState)} className="dark-mode__icon"/>}
                    {!darkMode && <IoSunnyOutline onClick={() => setDarkMode(prevState => !prevState)} className="dark-mode__icon"/>}
                </div>
            </header>
            <Outlet />
        </DataContext.Provider>
    );
}

export default Layout;