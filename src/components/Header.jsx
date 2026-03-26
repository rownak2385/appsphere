import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Apps", to: "/apps" },
  { label: "Installation", to: "/installation" },
];

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const renderNavLinks = () =>
    navItems.map((item) => (
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
    ));

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand-mark" to="/" aria-label="AppSphere home">
          <img className="brand-mark__image" src={logo} alt="AppSphere logo" />
          <span className="brand-mark__label">AppSphere</span>
        </Link>

        <nav className="site-nav site-nav--desktop" aria-label="Primary navigation">
          {renderNavLinks()}
        </nav>

        <a
          className="contribute-button contribute-button--desktop"
          href="https://github.com/rownak2385"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contribute-button__icon">
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span>Contribute</span>
          <FontAwesomeIcon icon={faHeart} />
        </a>

        <button
          className="site-header__menu-toggle"
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
        </button>

        {isMobileMenuOpen ? (
          <div className="site-mobile-panel">
            <nav className="site-nav site-nav--mobile" aria-label="Mobile navigation">
              {renderNavLinks()}
            </nav>

            <a
              className="contribute-button contribute-button--mobile"
              href="https://github.com/rownak2385"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contribute-button__icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>Contribute</span>
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
