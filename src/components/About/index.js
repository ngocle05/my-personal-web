import "./styles.css";

function About() {
  return (
    <>
      <div className = "section-header-nav" id="about"></div>
      <div className="section-header">
        <h1 id="about-header">About</h1>
      </div>

      <section className="about-content">
        <ul>
          <li>Born and raised in Vietnam 🇻🇳</li>
          <li>
            A senior majoring in Computer Computer Science and Applied
            Mathematics
          </li>
          <li>A food and sport lover</li>
        </ul>
      </section>
    </>
  );
}

export default About;
