import styles from "./project.module.css";
import to_do_list from "../images/to_do_list.png";
import calculator from "../images/calculator.jpg";
import portfolio from "../images/portfolio_img.jpg";
import { IoLogoGithub } from "react-icons/io";
const Projects = () => {
  return (
    <>
      <h1 className={`${styles.projectHeader}`}>Projects</h1>
      <div className={`${styles.projectContainer}`}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={to_do_list}
            width="100%"
            height="auto"
            className="card-img-top"
            alt="to_do_list"
          />
          <center>
          <div className="card-body">
            <h5 className="card-title">To-do-list</h5>
            <p className="card-text">
              A simple and interactive task manager that lets users add, delete, and mark tasks as completed in real-time.
            </p>
            <a href="https://github.com/Deepshika-Singh/todo-app" className="btn btn-primary">
              <IoLogoGithub /> Check here
            </a>
          </div>
          </center>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={calculator}
            width="100%"
            height="auto"
            className="card-img-top"
            alt="calculator"
          />
          <div className="card-body">
            <center>
            <h5 className="card-title">Link Shortener</h5>
            <p className="card-text">
              A web app that converts long URLs into short, shareable links for easy access and management.
            </p>
            <a href="https://github.com/Deepshika-Singh/Link-Shorten" className="btn btn-primary">
              <IoLogoGithub /> Check here
            </a>
            </center>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={portfolio}
            width="100%"
            height="auto"
            className="card-img-top"
            alt="portfolio"
          />
          <div className="card-body">
            <center>
            <h5 className="card-title">Portfolio</h5>
            <p className="card-text">
               A personal portfolio website showcasing projects, skills, and contact information in a visually appealing layout.
            </p>
            <a href="https://github.com/Deepshika-Singh/Port_Folio" className="btn btn-primary">
              <IoLogoGithub /> Check here
            </a>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
