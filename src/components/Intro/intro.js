import React from "react";
import "./intro.css";
import bg from "../../assets/bg.avif"
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Rishab</span><br /> Web Developer</span>
        <p className="introPara">I'm a skilled web developer with a  <br /> diverse portfolio spanning various industries.</p>
        <Link to="contact"><button className="btn">Hire Me</button></Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
