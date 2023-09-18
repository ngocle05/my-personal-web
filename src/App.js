import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Home />
      <div className="App">
        <About />
        <Skill />
        <Work />
      </div>
      <Contact />
    </>
  );
}

export default App;
