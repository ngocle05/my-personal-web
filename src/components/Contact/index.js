import "./styles.css";

function Contact() {
  return (
    <>
      <div className="section-header-nav" id="contact"></div>
      <div className="section-header colored-background-header">
        <h1 id="contact-header">Contact</h1>
      </div>

      <div className="contact-background">
        <div className="contact-content">
          <section className="motto">
            <h1>Let's bridge the digital gap!</h1>

            <p>
              For any questions, collaborations, or just a friendly chat,
              <br />
              don't hesitate to drop me a message!
            </p>
          </section>

          <section className="contact-platform">
            <img
              className="icon"
              src="image/gmail_icon.png"
            />
            <span>
              <a href="mailto:vinhngocle.05@gmail.com">
                vinhngocle.05@gmail.com
              </a>
            </span>
          </section>

          <section className="contact-platform">
            <img
              className="icon"
              src="image/linkedin_icon.png"
            />
            <span>
              <a href="https://www.linkedin.com/in/vinhngocle05/">
                linkedin.com/in/vinhngocle05/
              </a>
            </span>
          </section>

          <section className="contact-platform">
            <img
              className="icon"
              src="image/github_icon.png"
            />
            <span>
              <a href="https://github.com/ngocle05">github.com/ngocle05</a>
            </span>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contact;
