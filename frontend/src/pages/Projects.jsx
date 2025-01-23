import { useState, useEffect } from "react";
import projectData from '../assets/projectsList.json';
import SingleProject from "../components/SingleProject";
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Ładowanie danych z pliku JSON
    setProjects(projectData);
  }, []);

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <SingleProject key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
