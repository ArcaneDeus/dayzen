import { Link } from "react-router-dom";
import { categories } from "../data/posts";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">My Blog</Link>
      <div className="nav-links">
        {Object.entries(categories).map(([key, cat]) => (
          <Link key={key} to={`/category/${key}`}>
            {cat.emoji} {cat.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;