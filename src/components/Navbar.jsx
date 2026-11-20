

import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../AuthContext";

function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        Blush Beauty<span>♡</span>
      </Link>

      <div className="navbar-links">

        <Link
          to="/"
          className={location.pathname === "/" ? "active-link" : ""}
        >
          Home
        </Link>

        {user ? (
          <>
            <Link
              to="/dashboard"
              className={location.pathname === "/dashboard" ? "active-link" : ""}
            >
              Dashboard
            </Link>

            <Link
              to="/profile"
              className={location.pathname === "/profile" ? "active-link" : ""}
            >
              Profile
            </Link>

            <button className="navbar-logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="navbar-login"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="navbar-register"
            >
              Register
            </Link>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;
