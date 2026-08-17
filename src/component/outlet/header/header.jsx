import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <NavLink to="/" className="logo">
                    <span>P</span>
                    PortFolio
                </NavLink>

                <nav className="nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Me</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/contact">Contact Me</NavLink>
                </nav>

                <a href="/cv.pdf" download className="cv-btn">
                    Download CV
                </a>

                <button className="menu-btn">
                    ☰
                </button>
            </div>
        </header>
    );
}

export default Header;