import React from 'react';

const projects = [
  { title: 'Project 1', image: '/api/placeholder/300/200', deployedLink: '#', githubLink: '#' },
  { title: 'Project 2', image: '/api/placeholder/300/200', deployedLink: '#', githubLink: '#' },
  { title: 'Project 3', image: '/api/placeholder/300/200', deployedLink: '#', githubLink: '#' },
  { title: 'Project 4', image: '/api/placeholder/300/200', deployedLink: '#', githubLink: '#' },
  { title: 'Project 5', image: '/api/placeholder/300/200', deployedLink: '#', githubLink: '#' },
  { title: 'Project 6', image: '/api/placeholder/300/200', deployedLink: '#', githubLink: '#' },
];

export const Portfolio = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex justify-between">
                <a href={project.deployedLink} className="text-blue-500 hover:underline">View Project</a>
                <a href={project.githubLink} className="text-blue-500 hover:underline">GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};