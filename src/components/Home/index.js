import "./styles.css";

function Home() {
  const fontSize = "20px";
  const fontFamily = "Source Code Pro";

  return (
    <>
      <div id="home"></div>

      <div className="section-header colored-background-header">
        <h1 id="home-header">Home</h1>
      </div>

      <div className="home-background">
        <div className="home">
          <div className="home-content">
            <h1>
              <strong style={{ fontFamily: fontFamily, fontSize: fontSize }}>
                Hi, my name is{" "}
              </strong>
              <br />
              <strong>Ngoc Le</strong>
              <br />
              <br />A dedicated learner
              <br />
              with a curious mind
            </h1>
          </div>
          <div className="home-content">
            <img src="image/profile_image.jpg" className="profile-photo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
