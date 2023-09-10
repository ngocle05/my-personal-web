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
              <a href="#">About</a>
            </li>
            <li className="menu-item">
              <a href="#">Skill</a>
            </li>
            <li className="menu-item">
              <a href="#">Work</a>
            </li>
            <li className="menu-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
