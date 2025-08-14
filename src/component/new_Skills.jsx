import styles from "./new_Skills.module.css";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt, FaReact, FaJsSquare, FaBootstrap, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const New_skills = () => {
  return (
    <>
      <div className="my-3 py-3">
        <h2 className={`display-8 ${styles.heading}`}>My Tech Stack</h2>
      </div>

      <div
        className="alert alert-primary shadow-sm mx-auto"
        style={{
          width: "90%",
          borderRadius: "21px",
          padding: "1rem",
          overflow: "hidden",
          height: "auto",
          backgroundColor: "#06042a",
          color: "white",
        }}
      >
        <div className="row justify-content-center">
          
          <div className={`col-md-6 col-lg-4`}>
            <div className={`card ${styles.card}`}>
              <div className="card-body text-center">
                <h5 className={`card-title ${styles.skillHead}`}>Programming Languages</h5>
                <div className={styles.icons}>
                  <TbDeviceDesktopCode />
                </div>
                <p className="card-text">
                  Proficient in C++, Python, JavaScript, and C. Skilled in writing efficient, optimized code for competitive programming, problem-solving, and software development.
                </p>
              </div>
            </div>
          </div>

          <div className={`col-md-6 col-lg-4`}>
            <div className={`card ${styles.card}`}>
              <div className="card-body text-center">
                <h5 className={`card-title ${styles.skillHead}`}>Web Development</h5>
                <div className={styles.icons}>
                  <SiHtml5 />
                  <FaCss3Alt />
                  <FaJsSquare />
                </div>
                <p className="card-text">
                  Experienced in HTML, CSS, JavaScript, Node.js, and Express.js for building responsive, dynamic, and high-performance web applications.
                </p>
              </div>
            </div>
          </div>

          <div className={`col-md-6 col-lg-4`}>
            <div className={`card ${styles.card}`}>
              <div className="card-body text-center">
                <h5 className={`card-title ${styles.skillHead}`}>Frontend Frameworks</h5>
                <div className={styles.icons}>
                  <FaReact />
                  <FaBootstrap />
                </div>
                <p className="card-text">
                  Hands-on experience with Bootstrap and React for building responsive and user-friendly interfaces.
                </p>
              </div>
            </div>
          </div>

          <div className={`col-md-6 col-lg-4`}>
            <div className={`card ${styles.card}`}>
              <div className="card-body text-center">
                <h5 className={`card-title ${styles.skillHead}`}>Tools & Technologies</h5>
                <div className={styles.icons}>
                  <VscVscode />
                  <FaGithub />
                </div>
                <p className="card-text">
                  Proficient in VS Code, GitHub, and MySQL for efficient development, version control, and database management.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default New_skills;
