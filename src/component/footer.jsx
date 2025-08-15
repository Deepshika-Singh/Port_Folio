import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.pta}>🤝 <strong>Let's connect!</strong></div>

      <div className={styles["social-links"]}>
        <a
          href="https://www.linkedin.com/in/deepshikha-singh-243a83277/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["social-link"]}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 .633-.325 1.146-.725 1.146H.725A.72.72 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.21c.837 0 1.358-.554 1.358-1.248-.015-.71-.521-1.248-1.342-1.248C2.953 2.688 2.418 3.226 2.418 3.936c0 .694.521 1.248 1.31 1.248h.015zm4.908 8.21V9.359c0-.202.015-.404.074-.547.163-.404.534-.822 1.158-.822.817 0 1.144.62 1.144 1.528v3.876h2.4V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.19h.03V6.17H6.651c.03.65 0 7.224 0 7.224h2.4z"></path>
          </svg>
          LinkedIn
        </a>

        <a
          href="https://github.com/Deepshika-Singh"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["social-link"]}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8a8.003 8.003 0 005.47 7.59c.4.075.55-.175.55-.388 0-.19-.007-.693-.01-1.36-2.23.485-2.7-1.075-2.7-1.075-.364-.925-.89-1.17-.89-1.17-.727-.497.055-.487.055-.487.803.057 1.225.823 1.225.823.715 1.223 1.874.87 2.33.666.072-.518.28-.87.508-1.07-1.78-.203-3.645-.89-3.645-3.953 0-.873.312-1.587.823-2.147-.083-.203-.357-1.022.078-2.13 0 0 .672-.215 2.2.82a7.68 7.68 0 012-.27c.68 0 1.36.092 2 .27 1.527-1.035 2.198-.82 2.198-.82.437 1.108.163 1.927.08 2.13.513.56.822 1.274.822 2.147 0 3.072-1.867 3.748-3.65 3.947.287.247.54.735.54 1.48 0 1.068-.01 1.93-.01 2.19 0 .216.148.468.553.387A8.003 8.003 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          GitHub
        </a>
      </div>

      <div className={styles.subtext}>🚀 More details will be updated soon •</div>
    </footer>
  );
};

export default Footer;
