import "./styles.css";

function Skill() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SASS",
    "GIT",
    "Github",
    "Responsive Design",
    "SEO",
    "Terminal",
    "Express Basics",
    "SQL Basics",
  ];
  return (
    <>
      <div className = "section-header-nav" id="skill"></div>
      <div className="section-header">
        <h1 id="skill-header">Skill</h1>
      </div>

      <div className="skill-content">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </>
  );
}

export default Skill;
