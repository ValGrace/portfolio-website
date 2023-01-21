import React from "react";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./HomePage";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" component="" />

        </Routes>
    )
}

export default Routing

