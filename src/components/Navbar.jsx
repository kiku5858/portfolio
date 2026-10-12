import { navLinks, profile } from "../data";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="navbar">
      <nav className="navbar__pill" aria-label="Main">
        <a className="navbar__logo" href="#top">{profile.name.split(" ")[0]}</a>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
        <button
          className="navbar__theme"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </nav>
    </header>
  );
}
