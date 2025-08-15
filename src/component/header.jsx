import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import logo from "../images/Logo.jpg";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  // Update active link on click
  const handleClick = (link) => {
    setActiveLink(link);
  };

  // Update active link on scroll using IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]"); // all sections with an id

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id); // set active link to section's id
          }
        });
      },
      { threshold: 0.6 } // trigger when 60% of section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${styles.header}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Logo */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#home"
          onClick={() => handleClick("home")}
        >
          <img src={logo} alt="Logo" width="50" height="50" className="me-2" />
          Deepshika Singh
        </a>

        {/* Desktop Menu */}
        <ul className={`d-none d-lg-flex ${styles.navList} mb-0`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className={`${styles.navLink} ${activeLink === item.id ? styles.active : ""}`}
                href={`#${item.id}`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Dropdown */}
        <div className="dropdown d-lg-none">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`${styles.navLink} ${activeLink === item.id ? styles.active : ""}`}
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
