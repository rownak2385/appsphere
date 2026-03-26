import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.png";
import AppCard from "../components/AppCard";
import apps from "../data/apps";

const stats = [
  { label: "Total Downloads", value: "29.6M", note: "23% more than last month" },
  { label: "Total Reviews", value: "906K", note: "48% more than last month" },
  { label: "Active Apps", value: "132+", note: "31 more this launch" },
];

function HomePage() {
  const topApps = apps.slice(0, 8);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-section__content">
          <h1>
            We Build <span>Productive</span> Apps
          </h1>
          <p className="hero-section__summary">
            At AppSphere, we craft intuitive apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas into
            digital experiences that truly make an impact.
          </p>

          <div className="hero-section__actions">
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
              Google Play
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
              App Store
            </a>
          </div>
        </div>

        <div className="hero-section__visual">
          <img src={heroImage} alt="AppSphere app showcase" />
        </div>
      </section>

      <section className="stats-strip">
        <h2>Trusted By Millions, Built For You</h2>
        <div className="stats-strip__grid">
          {stats.map((item) => (
            <article key={item.label} className="stats-strip__card">
              <p>{item.label}</p>
              <h3>{item.value}</h3>
              <span>{item.note}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="apps-section">
        <div className="apps-section__heading">
          <h2>Trending Apps</h2>
          <p>Explore all trending apps on the market developed by us</p>
        </div>

        <div className="app-grid">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="apps-section__action">
          <Link to="/apps">Show All</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
