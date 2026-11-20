


import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="beauty-home">

      {/* HERO SECTION */}
      <section className="beauty-hero">

        <div className="hero-content">
          <p className="hero-tag">♡ YOUR BEAUTY COMMUNITY ♡</p>

          <h1>
            Beauty Begins
            <br />
            <span>With You.</span>
          </h1>

          <p className="hero-description">
            Discover new makeup looks, explore beauty tips,
            and find inspiration to express your unique style.
            Because every face tells a beautiful story.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="beauty-primary-btn">
              Join Our Community ♡
            </Link>

            <Link to="/login" className="beauty-secondary-btn">
              Login
            </Link>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="hero-circle">
            <span>💄</span>
          </div>
          <span className="floating-flower flower-one">🌸</span>
          <span className="floating-flower flower-two">✨</span>
          <span className="floating-flower flower-three">🎀</span>
        </div>

      </section>

      {/* CATEGORIES */}
      <section className="beauty-section">

        <div className="section-heading">
          <p className="section-tag">EXPLORE YOUR STYLE</p>
          <h2>Find Your Beauty Mood</h2>
          <p>Something beautiful for every version of you.</p>
        </div>

        <div className="category-grid">

          <div className="category-card">
            <span>💋</span>
            <h3>Lip Looks</h3>
            <p>Glossy, matte and everything in between.</p>
          </div>

          <div className="category-card">
            <span>🎨</span>
            <h3>Eye Makeup</h3>
            <p>Discover stunning eye makeup styles.</p>
          </div>

          <div className="category-card">
            <span>🌷</span>
            <h3>Soft Glam</h3>
            <p>Fresh, natural and effortless beauty.</p>
          </div>

          <div className="category-card">
            <span>✨</span>
            <h3>Full Glam</h3>
            <p>Bold looks for your special moments.</p>
          </div>

        </div>

      </section>

      {/* TRENDING LOOKS */}
      <section className="trending-section">

        <div className="section-heading">
          <p className="section-tag">BEAUTY INSPIRATION</p>
          <h2>Trending Makeup Looks</h2>
          <p>Get inspired and find your next favorite look.</p>
        </div>

        <div className="trending-grid">

          <div className="trend-card">
            <div className="trend-image pink-look">
              <span>🌸</span>
            </div>
            <div className="trend-info">
              <h3>Rosy Soft Glam</h3>
              <p>Soft pink shades and glowing skin.</p>
              <span>♡ Soft & Romantic</span>
            </div>
          </div>

          <div className="trend-card">
            <div className="trend-image peach-look">
              <span>🍑</span>
            </div>
            <div className="trend-info">
              <h3>Peachy Glow</h3>
              <p>Warm peach tones and a fresh finish.</p>
              <span>♡ Fresh & Natural</span>
            </div>
          </div>

          <div className="trend-card">
            <div className="trend-image glam-look">
              <span>💄</span>
            </div>
            <div className="trend-info">
              <h3>Classic Glam</h3>
              <p>Bold lips and timeless elegance.</p>
              <span>♡ Bold & Elegant</span>
            </div>
          </div>

        </div>

      </section>

      {/* BEAUTY TIPS */}
      <section className="beauty-tips-banner">
        <div>
          <p className="section-tag">A LITTLE BEAUTY KNOWLEDGE</p>
          <h2>Beauty is an art. Make it yours.</h2>
          <p>
            Learn new techniques, discover makeup secrets,
            and explore ways to express yourself.
          </p>
        </div>

        <div className="tips-decoration">🪞🌷</div>
      </section>

      {/* FOOTER */}
      <footer className="beauty-footer">
        <h2>Blush Beauty <span>♡</span></h2>
        <p>Your beauty journey starts here.</p>
        <p>Made with love and a little blush. 🎀</p>
      </footer>

    </div>
  );
}

export default Home;
