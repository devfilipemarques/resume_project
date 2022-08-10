function Nav() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <button className="navbar-link active" data-nav-link>Sobre</button>
                </li>

                <li className="navbar-item">
                    <button className="navbar-link" data-nav-link>Resume</button>
                </li>

                <li className="navbar-item">
                    <button className="navbar-link"><a href="https://www.behance.net/devfilipemarques" target="_blank" rel="noreferrer">Portfolio</a></button>
                </li>

                <li className="navbar-item">
                    <button className="navbar-link" data-nav-link>Contato</button>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;