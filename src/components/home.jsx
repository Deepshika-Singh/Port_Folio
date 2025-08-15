import styles from "./home.module.css";
import girl from "../images/girl.png";
const Home = () => {
  return (
    <div className={`${styles.home}`}>
      <div className={`${styles.homeText}`}>
        <h1>Hi,I am Deepshika Singh</h1>
        <h1>and I am  a passionate </h1>
        <h1>Web Developer with strong graps on DSA. . . .</h1>
      </div>
      <div className={`${styles.homeImage}`}>
        <img
          src={girl}
          alt="girl"
          width="500"
          height="500"
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};
export default Home;
