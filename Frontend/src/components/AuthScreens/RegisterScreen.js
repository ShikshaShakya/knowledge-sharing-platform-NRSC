import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../Css/Register.css";
import register from "./register.jpg";
const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 8000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post("/auth/register", {
        username,
        email,
        password,
      });

      localStorage.setItem("authToken", data.token);

      setTimeout(() => {
        navigate("/blog");
      }, 1800);
    } catch (error) {
      setError(error.response.data.error);

      setTimeout(() => {
        setError("");
      }, 6000);
    }
  };

  return (
    <div className="Inclusive-register-page">
      <div className="bg1"></div>
      <div className="bg2"></div>
      <div className="bg3"></div>
      <div className="bg4"></div>
      <div className="right"></div>
      <div className="left">
        {/* <h2 className="read-more-h2">Read more about us!</h2>
    <button className="read-more-btn">About Us</button> */}
        <img src={register} alt="" className="register-img" />
      </div>
      <div className="register-big-wrapper">
        {/* <div className="register-banner-section ">

          <img src="register2.png" alt="banner" width="500px" className="reg-img"/>
        </div> */}

        <div className="section-wrapper">
          <div className="top-suggest_login">
            <span>Have an account? </span>
            <a href="/login">Sign In</a>
          </div>

          <div className="top-register-explain">
            <h2>Welcome</h2>

            {/* <p>
              It's easy and free to post your thinking on any topic and connect with thounsands of readers.

            </p> */}
          </div>

          <form onSubmit={registerHandler}>
            {error && <div className="error_message">{error}</div>}
            <div className="input-wrapper">
              <input
                type="text" className="input-placeholder"
                required
                id="name"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* <label htmlFor="name">Username</label> */}
            </div>
            <div className="input-wrapper">
              <input
                type="email" className="input-placeholder"
                required
                id="email"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                tabIndex={1}
              />
              {/* <label htmlFor="email">E-mail</label> */}
            </div>
            <div className="input-wrapper">
              <input
                type="password" className="input-placeholder"
                required
                id="password"
                autoComplete="true"
                placeholder="6+ strong character"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                tabIndex={2}
              />
              {/* <label htmlFor="password">
                Password

              </label> */}
            </div>
            <div className="input-wrapper">
              <input
                type="password" className="input-placeholder"
                required
                id="confirmpassword"
                autoComplete="true"
                placeholder="Confirm password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* <label htmlFor="confirmpassword">Confirm Password</label> */}
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      {/* <img src={astro} alt="" className="astro"/> */}
    </div>
  );
};

export default RegisterScreen;
