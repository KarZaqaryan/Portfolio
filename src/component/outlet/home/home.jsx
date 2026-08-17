import React from "react";
import { Link } from 'react-router-dom';
import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope
} from "react-icons/fa";
import "./home.css";

function Home() {
    return (
        <main className="home">
            <div className="home-content">
                <p className="home-subtitle">Hello, I'm</p>

                <h1>
                    Karen <span>Zaqaryan</span>
                </h1>

                <h2>Frontend Developer</h2>

                <p className="home-description">
                    I build modern, responsive and user-friendly web
                    applications with React and JavaScript.
                </p>

                <div className="home-buttons">
                    <Link to="/projects" className="primary-btn">
                        View Projects
                    </Link>

                    <Link to="/contact" className="secondary-btn">
                        Contact Me
                    </Link>
                </div>

                <div className="social-icons">


                    <a href="https://github.com/KarZaqaryan" aria-label="GitHub">
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/karen-zaqaryan-9993a3331/?skipRedirect=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=zaqaryankaren05@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </main>
    );
}

export default Home;