import styles from "./skillsIcon.module.css";
import cppLogo from "../images/C++.png";
import bootstrapLogo from "../images/bootstrap.png";
import jsLogo from "../images/JavaScript-logo.png";
import pyLogo from "../images/python.png";

const SkillsIcon = () => {
  return (
    <div className={`list-group ${styles.listSkill} `}>
      {/* Programming Languages */}
      <SkillSection title="Programming Languages :"  logos={[
        { src: cppLogo, alt: "C++" },
        { src: pyLogo, alt: "Python" },
        { src: jsLogo, alt: "JavaScript" },
      ]} />

      {/* Web Development */}
      <SkillSection title="Web Development :" logos={[
        { src: jsLogo, alt: "JavaScript" },
        { src: cppLogo, alt: "C++" }, 
      ]} />

      {/* Frontend Frameworks */}
      <SkillSection title="Frontend Frameworks :" logos={[
        { src: bootstrapLogo, alt: "Bootstrap" },
      ]} />

      {/* Tools & Technologies */}
      <SkillSection title="Tools & Technologies :" logos={[
        { src: cppLogo, alt: "C++" }, 
      ]} />
    </div>
  );
};

const SkillSection = ({ title, logos }) => (
  <div aria-current="true">
    <div className={`d-flex ${styles.outerContainer} `}>
      <h5 className={`${styles.skillName}`}>{title}</h5>
      <div className={`${styles.list}`}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={styles.skillImg}
            style={{ borderRadius: "10%", marginBottom:"1rem" }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default SkillsIcon;
