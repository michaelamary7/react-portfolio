
export default function Project({ 
  title,
  description,
  technologies,
  imageUrl,
  githubLink 
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="project-card">
      <img 
        src={imageError ? "/api/placeholder/600/400" : imageUrl} 
        alt={title}
        className="project-image"
        onError={() => setImageError(true)}
      />

      <div className="project-overlay">
        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{title}</h3>
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                title="View Code"
              >
                <Github size={24} className="github-icon" />
              </a>
            )}
          </div>

          <p className="project-description">{description}</p>

          <div className="project-technologies">
            {technologies?.map((tech, index) => (
              <span key={index} className="technology-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <div className="mb-6">
        <a
          href="#"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
          download
        >
          Download Resume
        </a>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Technical Proficiencies</h3>
        <ul className="list-disc pl-6">
          {proficiencies.map((skill, index) => (
            <li key={index} className="mb-2">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
