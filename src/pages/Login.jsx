


import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-icon">🌸</div>

        <span className="login-tag">WELCOME BACK TO BLUSH BEAUTY</span>

        <h1>Welcome Back!</h1>

        <p className="auth-description">
          Your beauty journey continues here. Log in and
          discover new inspiration, makeup looks, and beauty tips.
        </p>

        <form className="auth-form" onSubmit={handleLogin}>

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In ♡"}
          </button>

        </form>

        <p className="auth-switch">
          Don't have an account?
          <Link to="/register"> Create Account</Link>
        </p>

        <Link to="/" className="auth-home-link">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Login;
