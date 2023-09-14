import ProjectBox from "../ProjectBox";
import "./styles.css";

function Work() {
  return (
    <>
      <div className = "section-header-nav" id="work"></div>
      <div className="section-header">
        <h1 id="work-header">Work</h1>
      </div>
      <div className="work-content">
        <ProjectBox
          title="Vinh Foodie"
          description="Java"
          child={["devicon-python-plain"]}
        />
        <ProjectBox
          title="3D RPG Terrain Editor"
          description="Python"
          child={["devicon-java-plain"]}
        />
        <ProjectBox
          title="TaskGraph"
          description="web"
          child={["devicon-javascript-plain", "devicon-css3-plain"]}
        />
      </div>
    </>
  );
}

export default Work;
