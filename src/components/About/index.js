import "./styles.css";

function About() {
  return (
    <>
      <div className="section-header-nav" id="about"></div>
      <div className="section-header">
        <h1 id="about-header">About</h1>
      </div>

      <section className="about-content">
        <div className="about-column">
          <ul>
            <li>I was born and raised in Vietnam 🇻🇳</li>
            <li>Currently, I live in Illinois, USA 🇺🇸</li>
            <li>
              I'm now a senior majoring in Computer Science and Applied
              Mathematics 👩‍💻
            </li>

            <li>
              In my free time, I enjoy playing sports 🎾 🏓, taking photos 📷
              and cooking Vietnamese food 🍽
            </li>
          </ul>
        </div>
        <div className="about-column">
          <ul>
            <li>
              I'm on a dedicated journey to fulfill my dream of becoming a
              software engineer.
            </li>
            <li>
              The rapid and ever-evolving nature of technology and its
              remarkable problem-solving capabilities, have
              always held a profound fascination for me.
            </li>
            <li>
              As I embark on this exhilarating path, my enthusiasm knows no
              bounds. I'm excited about the journey ahead, eager to learn, grow,
              and make a lasting impact in the ever-evolving technology
              landscape
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
