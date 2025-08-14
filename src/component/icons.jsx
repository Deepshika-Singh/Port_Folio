import styles from "./icons.module.css";
import SkillsIcon from "./skillsIcon";

const Icons = () => {
  return (
    <div className={`me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden ${styles.skillBox}`}>
      <div className="my-3 py-3">
        <h2 className={`display-8 ${styles.headingText}`}>My Tech Stack</h2>
      </div>
      <div
        className={`alert alert-primary shadow-sm mx-auto ${styles.iconBox}`}
        style={{
          width: "80%",
          borderRadius: "21px",
          padding: "1rem",
          overflow: "hidden", // ✅ prevent visual overflow
          height: "auto",     // ✅ let it grow with content
          backgroundColor: "#06042a",
          color: "white",
        }}
      >
        <SkillsIcon />
      </div>
    </div>
  );
};

export default Icons;
