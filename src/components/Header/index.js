import "./styles.css";

function Header() {
  return (
    <>
      <div id="top-header">
        <nav>
          <ul className="list">
            <li className="menu-item">
              <a href="#">Home</a>
            </li>
            <li className="menu-item">
              <a href="#about">About</a>
            </li>
            <li className="menu-item">
              <a href="#skill">Skill</a>
            </li>
            <li className="menu-item">
              <a href="#work">Work</a>
            </li>
            <li className="menu-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
