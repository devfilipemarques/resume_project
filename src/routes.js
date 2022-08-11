import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from './pages/about/index';
import Resume from './pages/resume/index';
import Skill from './pages/skills/index';

export default () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<About />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/resume" element={<Resume />}></Route>
                <Route path="/skill" element={<Skill />}></Route>
            </Routes>
        </Router>
    )
}