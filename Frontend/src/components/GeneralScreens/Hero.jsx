import React from "react";
import img1 from "./hero.png";
import logo from "./logo.png";
import planet from "./planet.png";
import "../../Css/Hero.css";
import { useNavigate, NavLink } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <header className="hero-header">
        <img src={logo} alt="" className="logo" />
        <nav className="hero-nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Content</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact Us</NavLink>
            </li>
            {/*  */}
            {/* <li>
              <a href="#">Applications</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li> */}
            {/* <li>
              <a href="#">R&D Activities</a>
            </li>
            <li>
              <a href="#">Training & Outreach</a>
            </li> */}
          </ul>
        </nav>
      </header>
      <h1 class="heroh1">NRSC</h1>
      <h6 class="isro">Knowledge Sharing</h6>
      <h6 class="isro2">Platform</h6>
      <img src={img1} alt="" className="heroimg" />
      <p class="policy">To excel in promoting enhanced utilization of remote</p>
      <p class="policy2">
        sensing by delivering quality data products, developing
      </p>
      <p class="policy3">
        value added services and implementing outreach programmes
      </p>
      <button
        className="btn login"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        class="btn register"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </button>
      <img src={planet} alt="" className="planet" />
      <p className="paraa">
        National Remote Sensing Centre (NRSC) is one of the primary centres of
        Indian Space Research Organisation (ISRO), Department of Space (DOS).
      </p>
    </div>
  );
};

export default Hero;
