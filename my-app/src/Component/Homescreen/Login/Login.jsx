import React from "react";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import "./Login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${username}, ${password}`);
  };

  return (
    <div className="Login-container">
    <div className="Login-headers">Login</div>
      <div className="avatar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMM19ibc2ZGK72i5uLElaeQOu33N02S8xeQ&s" alt="Profile" className="login-image" />
      </div>
      <h2>Logan</h2>
      <p>Owner</p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="ADMIN"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="Loginbutton" type="submit">
          <FaSignInAlt /> Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
