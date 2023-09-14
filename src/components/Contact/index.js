import "./styles.css";

function Contact() {
  return (
    <>
      <div className="section-header-nav" id="contact"></div>
      <div className="section-header">
        <h1 id="contact-header">Contact</h1>
      </div>

      <div className="contact-content">
        <section>
          <img />
          <span>
            <a href="mailto:vinhngocle.05@gmail.com">vinhngocle.05@gmail.com</a>
          </span>
        </section>
        <br />
        <section>
          <img />
          <span>
            <a href="https://www.linkedin.com/in/vinhngocle05/">
              linkedin.com/in/vinhngocle05/
            </a>
          </span>
        </section>
        <br />
        <section>
          <img />
          <span>
            <a href="https://github.com/ngocle05">github.com/ngocle05</a>
          </span>
        </section>
      </div>
    </>
  );
}

export default Contact;
