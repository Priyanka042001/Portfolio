// ProjectSection.jsx
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Pizza Store Website',
    description: 'Frontend  application for ordering pizzas online.',
    link: 'https://pizza-store1.netlify.app/',
    image: '/pizza-store.png'
  },
  {
    title: 'To-do List App',
    description: 'A task management tool to track daily activities.',
    link: 'https://whimsical-yeot-ff98f5.netlify.app/',
    image: '/todo-list.png'
  },
  {
    title: 'Hangman Game',
    description: 'A fun word-guessing game built with React.',
    link: 'https://hangmangamess.netlify.app/',
    image: '/hangman-game.png'
  },
];

const ProjectSection = () => {
  return (
    <div className="project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
