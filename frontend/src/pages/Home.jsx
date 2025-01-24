import { useState, useEffect } from "react";
import TechStack from "../components/TechStack";
import projectData from '../assets/projectsList.json';
import SingleProject from "../components/SingleProject";
import '../styles/Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Ładowanie danych z pliku JSON
        setProjects(projectData);
    }, []);

    return (
        <>
            {/* Motto */}
            <p className="motto">Code with purpose, create with passion</p>

            {/* Sekcja "O mnie" */}
            <div className="about">
                <p>Hi, I&apos;m Eryk – a high school student from Kraków, interested in AI and problem-solving.</p>
                <p>I&apos;m excited about exploring new possibilities in artificial intelligence and using them to create innovative solutions.
                    In addition to programming, I am interested in chess, bouldering and skiing - activities that enhance my strategic thinking, 
                    focus and perseverance. These are qualities that help me in any project.</p>
                <p>I believe that together, we can create something amazing.</p>
            </div>

            {/* Pojedynczy projekt */}
            <div className="last-project">
                <h3>One of my last projects</h3>
                {projects.length > 1 ? (
                    <SingleProject project={projects[1]} />
                ) : (
                    <p>Loading project...</p>
                )}
                <p className="more-projects">See more of my projects -&#62; <Link to="/projects" className="link">My projects</Link>  </p>
            </div>

            {/* Tech stack */}
            <TechStack />
        </>
    );
}

export default Home;
