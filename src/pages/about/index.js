import React from "react";

import Description from '../../components/about/description';
import Services from '../../components/about/services';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="main-content">
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button className="navbar-link active">Sobre</button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link"><Link to='/resume'>Resumo</Link></button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link"><a href="https://www.behance.net/devfilipemarques" target="_blank" rel="noreferrer">Portfolio</a></button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link>Contato</button>
                    </li>
                </ul>
            </nav>
            <article className="about active" data-page="about">
                <header>
                    <h2 className="h2 article-title">Sobre</h2>
                </header>
                <Description />
                <Services />
            </article>
        </div>
    )
}
export default About;