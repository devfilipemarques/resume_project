import React from "react";
import { Link } from "react-router-dom";

import Certificate from "../../components/resume/certificate";
import Work from '../../components/resume/work';

const Resume = () => {
    return (
        <div className="main-content">
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button className="navbar-link"><Link to='/about'>Sobre</Link></button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link active">Resumo</button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link"><Link to='/skill'>Habilidades</Link></button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link"><a href="https://www.behance.net/devfilipemarques" target="_blank" rel="noreferrer">Portfolio</a></button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link"><a href="https://beacons.ai/devfilipemarques" target="_blank" rel="noreferrer">Contato</a></button>
                    </li>
                </ul>
            </nav>
            <article className="resume active" data-page="resume">
                <header>
                    <h2 className="h2 article-title">Resumo</h2>
                </header>
                <Work />
                <Certificate />
            </article>
        </div>
    )
}
export default Resume;