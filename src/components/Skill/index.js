import "./styles.css";

function Skill() {
  const skills = [
    "Python",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Github",
    "SQL Basics",
    "Swift"
  ];
  return (
    <>
      <div className="section-header">
        <div className="section-header-nav" id="skill"></div>
        <h1>Skills</h1>
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
