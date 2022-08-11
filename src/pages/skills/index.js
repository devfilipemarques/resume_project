import React from "react";
import { Link } from "react-router-dom";

import Habilidades from "../../components/skills/skills";

const Skill = () => {
    return (
        <div className="main-content">
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button className="navbar-link"><Link to='/about'>Sobre</Link></button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link"><Link to='/resume'>Resumo</Link></button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link active">Habilidades</button>
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
                    <h2 className="h2 article-title">Habilidades</h2>
                </header>
                <Habilidades />
            </article>
        </div>
    )
}
export default Skill;