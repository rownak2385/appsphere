import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Apps", to: "/apps" },
  { label: "Installation", to: "/installation" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/rownak2385", icon: faGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: faLinkedinIn },
  { label: "Facebook", href: "https://www.facebook.com", icon: faFacebookF },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link className="brand-mark brand-mark--footer" to="/">
            <img className="brand-mark__image" src={logo} alt="AppSphere logo" />
            <span className="brand-mark__label">AppSphere</span>
          </Link>
          <p className="site-footer__copy">
            Discover focused productivity tools, install your favorites locally, and
            keep a curated app collection ready across every device size.
          </p>
        </div>

        <div className="site-footer__links">
          <h2 className="site-footer__title">Quick Links</h2>
          <div className="site-footer__link-list">
            {footerLinks.map((item) => (
              <Link key={item.to} className="site-footer__link" to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="site-footer__social">
          <h2 className="site-footer__title">Social Links</h2>
          <div className="site-footer__social-list">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                className="site-footer__social-link"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                title={item.label}
              >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; 2026 AppSphere, Inc | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

