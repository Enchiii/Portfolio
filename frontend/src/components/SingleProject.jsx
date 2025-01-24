/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/SingleProject.css';

// eslint-disable-next-line react/prop-types, no-unused-vars
const SingleProject = ({ project }) => {
  return (
    <div className="project">
      <div className="project-image-container">
        {/* Obraz jako link */}
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-overlay">
          <img src={project.image} alt={`${project.title} thumbnail`} className="project-image" />
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
        </a>
      </div>
      <div className="project-description">
        <h3 className="title">{project.title}</h3>
        <p className="description">{project.description}</p>
        <p className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="technology">{tech}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default SingleProject;
