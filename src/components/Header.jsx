import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Apps", to: "/apps" },
  { label: "Installation", to: "/installation" },
];

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand-mark" to="/" aria-label="AppSphere home">
          <img className="brand-mark__image" src={logo} alt="AppSphere logo" />
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          className="contribute-button"
          href="https://github.com/rownak2385"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contribute-button__icon">GH</span>
          <span>Contribute</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
