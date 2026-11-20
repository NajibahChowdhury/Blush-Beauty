


import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="profile-page">

      <div className="profile-header">
        <span>YOUR PERSONAL SPACE ♡</span>
        <h1>My Beauty Profile</h1>
        <p>
          Every beauty journey is unique. This is your little
          corner of Blush Beauty!
        </p>
      </div>

      <div className="profile-card">

        <div className="profile-avatar">
          💗
        </div>

        <h2>Beauty Enthusiast</h2>
        <p className="profile-subtitle">
          A proud member of the Blush Beauty community
        </p>

        <div className="profile-divider"></div>

        <div className="profile-details">
          <div className="profile-detail">
            <span>👤 Account Name</span>
            <strong>Beauty Enthusiast</strong>
          </div>

          <div className="profile-detail">
            <span>✉️ Email Address</span>
            <strong>{user?.email}</strong>
          </div>

          <div className="profile-detail">
            <span>🌸 Membership</span>
            <strong>Blush Beauty Member</strong>
          </div>
        </div>

        <Link to="/dashboard" className="profile-dashboard-btn">
          Back to Dashboard
        </Link>

        <button
          className="profile-logout-btn"
          onClick={handleLogout}
        >
          Log Out
        </button>

      </div>

      <div className="profile-message">
        <h3>Stay Beautiful, Stay Confident! ✨</h3>
        <p>
          Remember, makeup is an art, and you are the masterpiece.
          Keep exploring, experimenting, and expressing yourself.
        </p>
      </div>

      <footer className="profile-footer">
        <h3>Blush Beauty ♡</h3>
        <p>Your Beauty. Your Style. Your Community.</p>
      </footer>

    </div>
  );
}

export default Profile;
