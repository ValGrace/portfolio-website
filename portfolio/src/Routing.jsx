import React from "react";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./HomePage";
import ProjectsForm from "./ProjectsForm";
const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsForm />} />

        </Routes>
    )
}

export default Routing

