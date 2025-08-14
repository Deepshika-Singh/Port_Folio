import { useState } from 'react';
import styles from './contact.module.css';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import contact_img from "../images/contact_img.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xkgbedow", {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(e.target)
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); 
    }
  };

  return (
    <div className={styles.outer}>
      <h1 className={styles.contactHeader}> Contact Me </h1>
      <div className={styles.contactContainer}>
        <div className={styles.contactGrid}>
          {/* Left image */}
          <div className={styles.contactImg}>
            <img src={contact_img} alt="contact_img" />
          </div>

          {/* Right form section */}
          <div className={styles.contactContent}>
            <h3 className={styles.contactHeading}>Send a Message</h3>
            {submitted && <p className={styles.successMsg}>Thanks for your message!</p>}
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className={styles.contactButton}>
                Send Message
              </button>
            </form>

            <div className={styles.contactInfo}>
              <ContactItem
                icon={<FiMail className={styles.icon} />}
                label="deepshikasingh110@gmail.com"
                href="mailto:deepshikasingh110@gmail.com"
              />
              <ContactItem
                icon={<FiPhone className={styles.icon} />}
                label="+91 9120051835"
                href="tel:+919120051835"
              />
              <ContactItem
                icon={<FaLinkedin className={styles.icon} />}
                label="LinkedIn Profile"
                href="https://www.linkedin.com/in/deepshikha-singh-243a83277/"
              />
              <ContactItem
                icon={<FaGithub className={styles.icon} />}
                label="GitHub Profile"
                href="https://github.com/Deepshika-Singh"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, label, href }) => (
  <div className={styles.contactItem}>
    {icon}
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  </div>
);

export default Contact;
