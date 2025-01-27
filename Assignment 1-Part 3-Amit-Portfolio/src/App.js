import React from "react";
import "./portfolio.css";
import profilePhoto from "./profile.jpg";
import favicon from "./favicon.ico";

const App = () => {
    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Personal Portfolio</title>
                <link rel="icon" href={favicon} type="image/x-icon" />
            </head>
            <body>
                <header className="header">
                    <div className="logo">My Portfolio</div>
                    <nav className="navbar">
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>

                <main>
                    {/* About part */}
                    <section id="about" className="about-section">
                        <div className="about-content">
                            <h1>Welcome to My Portfolio</h1>
                            <p>Hello! I'm a passionate web developer with huge intrest in creating stunning websites and applications using modern technologies.</p>
                        </div>
                        <div className="about-photo">
                            <img src={profilePhoto} alt="Profile" />
                        </div>
                    </section>

                    {/* Skills part */}
                    <section id="skills" className="skills-section">
                        <h2>Skills</h2>
                        <div className="skills-container">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">JavaScript</div>
                            <div className="skill">React</div>
                            <div className="skill">Node.js</div>
                            <div className="skill">Python</div>
                        </div>
                        <div className="skills-layout">
                            <div className="skill-box">Flexbox and Grid</div>
                            <div className="skill-box">UI/UX Principles</div>
                            <div className="skill-box">Responsive Design</div>
                            <div className="skill-box">Mobile Application</div>
                            <div className="skill-box">API Integration</div>
                            <div className="skill-box">Database Management</div>
                        </div>
                    </section>

                    {/* Projects part */}
                    <section id="projects" className="projects-section">
                        <h2>Projects</h2>
                        <div className="projects-container">
                            <div className="project-card">
                                <h3>Project One</h3>
                                <p>A responsive e-commerce website with a clean design.</p>
                            </div>
                            <div className="project-card">
                                <h3>Project Two</h3>
                                <p>An interactive blogging platform with user authentication.</p>
                            </div>
                            <div className="project-card">
                                <h3>Project Three</h3>
                                <p>A weather app displaying real-time weather data.</p>
                            </div>
                        </div>
                        <div className="projects-grid">
                            <div className="project-grid-item">
                                <h3>Portfolio Website</h3>
                                <p>A personal portfolio showcasing my skills and projects.</p>
                            </div>
                            <div className="project-grid-item">
                                <h3>Task Manager</h3>
                                <p>An application for tracking daily tasks and progress.</p>
                            </div>
                            <div className="project-grid-item">
                                <h3>Chat Application</h3>
                                <p>A real-time chat app with WebSocket integration.</p>
                            </div>
                            <div className="project-grid-item">
                                <h3>Social Media Dashboard</h3>
                                <p>An analytics dashboard for tracking social media metrics.</p>
                            </div>
                        </div>
                    </section>

                    {/* Contact part */}
                    <section id="contact" className="contact-section">
                        <h2>Contact Me</h2>
                        <form className="contact-form">
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                            <textarea placeholder="Message" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </section>
                </main>

                <footer className="footer">
                    <p>&copy;2025 Emerging Tech Assignment by Amit Ghimire </p>
                </footer>
            </body>
        </>
    );
};

export default App;
