import { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/login", {
        email,
        password,
      });

      setMessage(res.data.message);
    } catch {
      setMessage("Server Error");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <FaShieldAlt className="shield" />

        <h1>Welcome Back!</h1>

        <p>
          Sign in to continue
          <br />
          to your account.
        </p>

        
      </div>

      <div className="right-panel">

        <div className="login-card">

          <h1>Login</h1>

          <p>Enter your credentials</p>

          <div className="input-group">
            <FaEnvelope />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaLock />

            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span onClick={() => setShow(!show)}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button onClick={login}>
            Login →
          </button>

          {message && (
            <div
              className={
                message === "Login Successful"
                  ? "success"
                  : "error"
              }
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;