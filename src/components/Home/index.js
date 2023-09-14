import "./styles.css";

function Home() {
  return (
    <>
      <div  className="header-padding"></div>

      <div className="section-header">
        <h1 id="home-header">Home</h1>
      </div>

      <div className="home">
        <div className="home-content">
          <h1>
            <strong>👋</strong>
          </h1>
          <h1>
            <strong>Hi,</strong>
            <br />
            <strong>I'm Ngoc Le</strong>
            <br />
            <br />A dedicated learner
            <br />
            with
            <br />a curious mind
          </h1>
        </div>
        <div className="home-content">
          <img
            src="https://drive.google.com/uc?export=view&id=1c2ORaoNjAdutvPLYqP86FPwbhvI4c7BN"
            className="profile-photo"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
