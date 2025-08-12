import React from "react";
import "./project.css";
import photo from "../../assets/work.png";
import photo2 from "../../assets/work1.png";
import photo3 from "../../assets/work3.png"
import photo4 from "../../assets/work4.png"
import photo5 from "../../assets/work5.png"
import photo6 from "../../assets/work6.png"
import { HiArrowUpRight } from "react-icons/hi2";


const Card = ({ image, title, description, link }) => {
  return (
    <div id="project" className="card">
      <img src={image} alt={title} />
      <div className="overlay"></div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <HiArrowUpRight />
        </a>
      </div>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      image: photo,
      title: "IT Services Web Application",
      description:
        "Developed with the MERN stack, utilizing Custom hooks, Local Storage, and Context API for enhanced functionality.", 
      link: "#",
    },
    {
      image: photo2,
      title: "Comprehensive Restaurant Website",
      description: "Developed a feature-rich and robust restaurant website using Django and Bootstrap.",
      link: "https://rishab15.pythonanywhere.com/",
    },
    {
      image: photo3,
      title: "Blood Donation Website",
      description: "A Frontend Project built using ReactJS, Bootstrap and CSS, featuring a donor filtering system for easy search and accessibility.",
      link: "https://haemoshare.netlify.app/",
    },
    {
      image: photo4,
      title: "Responive Resturant Website",
      description: " Designed and Deployed using WordPress and Elementor, enhanced with plugins like table reservation and slide-in offers to provide a seamless and engaging user experience.",
      link: "https://persiadarbar.rf.gd/",
    },
    {
      image: photo5,
      title: "Explore 3D Solar System",
      description: "Created a Web Calculator Application using HTML, CSS, and JavaScript for quick calculations.",
      link: "https://rish151.github.io/3DSolarSystem/",
    },
    {
      image: photo6,
      title: "Gym Website Landing Page",
      description: "Created a Web Calculator Application using HTML, CSS, and JavaScript for quick calculations.",
      link: "https://rish151.github.io/website-gym/",
    },
  ];

  return (
    <div className="projectHeading">
      <h1>My Work</h1>
      <div className="cards-container">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
