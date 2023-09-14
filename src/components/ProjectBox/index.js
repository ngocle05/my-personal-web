import "./styles.css";

function ProjectBox(props) {
  return (
    <>
      <div className="bordered-box">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        {props.child.map((element) => <i key={element} className={element}/>)}
      </div>
    </>
  );
}

export default ProjectBox;
