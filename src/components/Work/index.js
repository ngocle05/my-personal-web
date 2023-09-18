import ProjectBox from "../ProjectBox";
import "./styles.css";

function Work() {
  return (
    <>
      <div className="section-header-nav" id="work"></div>
      <div className="section-header">
        <h1 id="work-header">Work</h1>
      </div>
      <div className="work-content">
        <ProjectBox
          title="Vinh Foodie"
          year="2023"
          description="Coming soon"
          child={[
            "devicon-html5-plain-wordmark colored",
            "devicon-css3-plain-wordmark colored",
            "devicon-javascript-plain colored",
            "devicon-react-original-wordmark colored",
          ]}
        />
        <ProjectBox
          title="3D RPG Terrain Editor"
          year="2022"
          description="An application that allows users to design game board maps in a depth-map format and preview them in immersive 3D"
          child={["devicon-java-plain-wordmark colored"]}
          imgSource="image/3D.png"
        />
        <ProjectBox
          title="Productivity Visualization"
          year="2021"
          description="An application that empowers students to enhance productivity through powerful visualization."
          child={["devicon-python-plain-wordmark"]}
          imgSource="image/productivity_visualization.png"
        />
      </div>
    </>
  );
}

export default Work;
