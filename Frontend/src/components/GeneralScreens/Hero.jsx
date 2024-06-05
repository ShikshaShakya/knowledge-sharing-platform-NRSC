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
              <NavLink to="/blog">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact Us</NavLink>
            </li>
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
      <h1 class="isro">BLOG</h1>
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
      {/* <img src={planet2} className="planet2" alt="" />
      <img src={planet3} className="planet3" alt="" />
      <img src={planet4} className="planet4" alt="" />
      <img src={planet5} className="planet5" alt="" /> */}
      <p className="paraa">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos doloribus
        odit molestiae dolorem incidunt, tempore sequi similique quae aliquam
        magnam!
      </p>
    </div>
  );
};

export default Hero;
