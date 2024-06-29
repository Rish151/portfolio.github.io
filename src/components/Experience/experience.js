import React from "react";
import "./experience.css";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3, IoLogoPython } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa6";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <h2 className="experience-heading">Explore My</h2>
      <h1 className="experience-title">Experience</h1>
      <div className="experience-container">
        <div className="experience-card">
          <h3>Frontend Development</h3>
          <ul>
            <li>
             <FaHtml5 />HTML<span>Experienced</span>
            </li>
            <li>
            <IoLogoCss3 /> CSS <span>Experienced</span>
            </li>
          </ul>
          <ul>
            <li>
            <IoLogoPython /> Python <span>Intermediate</span>
            </li>
            <li>
            <SiJavascript /> JavaScript <span>Basic</span>
            </li>
          </ul>
        </div>
        <div className="experience-card">
          <h3>
            Backend <br />
            Development
          </h3>
          <ul>
            <li>
            <BiLogoMongodb /> MongoDB <span>Basic</span>
            </li>
            <li>
            <AiOutlineConsoleSql /> SQL <span>Basic</span>
            </li>
          </ul>
          <ul>
            <li>
            <FaNodeJs /> Node JS <span>Basic</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
