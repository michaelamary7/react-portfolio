
export default function AboutMe() {
  return (
    <div style={{ margin: '20px' }}>
      <img 
      src="/api/placeholder/200/200"
      alt="Developer Avatar"
      className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mb-4 md:mb-0 md:mr-8"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I'm a passionate web developer with experience in creating responsive and user-friendly applications. 
          My expertise includes React, Node.js, and modern web technologies. I love solving complex problems 
          and continuously learning new skills to stay up-to-date with the latest industry trends.
        </p>
        </div>
      </div>);
}
