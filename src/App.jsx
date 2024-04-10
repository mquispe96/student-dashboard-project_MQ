import React from "react";
import {Route, Routes} from 'react-router-dom';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="Profile/:profileId" element={<Profile />}/>
      </Route>
    </Routes>
  );
}

export default App;