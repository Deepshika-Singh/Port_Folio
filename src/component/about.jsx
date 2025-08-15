import about_me from "../images/about_me.png";
import styles from "./about.module.css";
import { HiDownload } from "react-icons/hi";
const About = () => {
  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.aboutImg}`}>
        <img
          src={about_me}
          alt="about_me"
          width= "25%"
          height="auto"
        />
      </div>
      <div className={`${styles.aboutText}`}>
        <h1>About Me</h1>
        <p>Hi, I'm Deepshika Singh, a second-year IT student passionate about web development and competitive programming. I love building projects with React and Bootstrap and enjoy solving DSA problems on platforms like CodeChef and LeetCode. I aim to grow as a Software Development Engineer and explore AI and Machine Learning.</p>
        <div className={`${styles.aboutInfo}`}>
        <button type="button" class="btn btn-success">
           <a
            href="/Resume.pdf" // This should be in public folder
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
          Download CV <HiDownload />
          </a>
          </button>
        </div>
        
      </div>
    </div>
  );
};
export default About;
