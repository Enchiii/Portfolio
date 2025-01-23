/* eslint-disable react/prop-types */
import '../styles/SingleProject.css';

// eslint-disable-next-line react/prop-types, no-unused-vars
const SingleProject = ({ project }) => {
  return (
    <div className="project">
      {/* <img src={project.image} alt={`${project.title} thumbnail`} className="project-image" /> */}
      <img src="/Projects/sudoku.png" className='project-image'/>
      <div className='project-description'>
        <h3 className='title'>{project.title}</h3>
        <p>{project.description}</p>

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
