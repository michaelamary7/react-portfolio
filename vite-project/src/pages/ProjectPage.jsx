import React from 'react';
import projects from '../components/UI/Projects/ProjectCard';
import Project from '../components/ProjectHeader';

const ProjectGallery = () => {
    return (
        <div >
            <div style={{margin: '4rem', display:'flex', flexWrap:'wrap', justifyContent: 'space-between', gap: '40px'}} >
                {projects.map((project) => (
                    <Project 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        technologies={project.technologies} 
                        imageUrl={project.imageUrl} 
                        githubLink={project.githubLink} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectGallery;