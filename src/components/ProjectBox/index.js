import "./styles.css";

function ProjectBox(props) {
  return (
    <>
      <div className="bordered-box">
        <div>
          <h3 className="project-title">{props.title}</h3>
          <h3 className="project-year">{props.year}</h3>
          {props.imgSource ? (
            <img className="project-image" src={props.imgSource} />
          ) : null}
          <p className="project-description">{props.description}</p>
        </div>
        <div className="icon-list">
          {props.child.map((element) => (
            <i key={element} className={`${element} tech-icon`} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectBox;
