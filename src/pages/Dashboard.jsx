

import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard-page">

      <section className="dashboard-welcome">
        <div className="welcome-text">
          <span className="dashboard-tag">YOUR BEAUTY SPACE ♡</span>

          <h1>
            Hello, Dear User! <br />
            Welcome to Blush Beauty.
          </h1>

          <p>
            We're so happy to have you here. Discover beautiful makeup
            looks, learn new techniques, and let your creativity shine.
          </p>

          <p className="dashboard-email">
            Logged in as: <strong>{user?.email}</strong>
          </p>

          <Link to="/explore" className="dashboard-button">
            Explore Makeup Looks
          </Link>
        </div>

        <div className="welcome-decoration">
          <span>💗</span>
          <p>Be your own kind of beautiful.</p>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="dashboard-heading">
          <span>EXPLORE YOUR STYLE</span>
          <h2>Discover Your Beauty World</h2>
          <p>
            Find inspiration, experiment with styles, and celebrate
            your unique beauty.
          </p>
        </div>

        <div className="dashboard-categories">
          <div className="dashboard-category">
            <div className="category-icon">🌸</div>
            <h3>Natural Makeup</h3>
            <p>Soft and fresh looks for everyday beauty.</p>
          </div>

          <div className="dashboard-category">
            <div className="category-icon">💄</div>
            <h3>Glam Makeup</h3>
            <p>Explore bold looks and glamorous styles.</p>
          </div>

          <div className="dashboard-category">
            <div className="category-icon">✨</div>
            <h3>Soft Glam</h3>
            <p>Discover the perfect balance of subtle and glam.</p>
          </div>
        </div>
      </section>

      <section className="dashboard-feature">
        <div>
          <span>BEAUTY TIPS & TRICKS</span>
          <h2>A little tip can make a big difference!</h2>
          <p>
            Learn simple makeup techniques and discover new ways
            to improve your beauty routine.
          </p>
          <Link to="/beauty-tips" className="dashboard-button">
            Discover Beauty Tips
          </Link>
        </div>

        <div className="feature-emoji">🪞</div>
      </section>

      <footer className="dashboard-footer">
        <h3>Blush Beauty ♡</h3>
        <p>Your Beauty. Your Style. Your Community.</p>
      </footer>

    </div>
  );
}

export default Dashboard;
