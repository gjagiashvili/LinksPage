import React from "react";
import { Link } from "react-router-dom";
import styles from "../modules/About.module.scss";
import aboutImg from "../assets/aboutUs.jpg";
const About = () => {
  return (
    <div className={`${styles.page} ${styles.about}`}>
      <div className={`${styles.content} ${styles.aboutContent}`}>
        <div className={`${styles.leftSection}`}>
          <img src={aboutImg} className={styles.smallImage} />
        </div>
        <div className={`${styles.rightSection}`}>
          <h1 className={styles.headerText}>About Us</h1>
          <p className={styles.roleText}>
            Frontend developer and{" "}
            <span style={{ color: "#4287f5" }}>designer</span>
          </p>
          <p className={styles.paragraphText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quia odit consectetur at ab expedita quisquam dolor magnam, nihil
            officiis, placeat eaque deserunt vero vel reprehenderit eum, nisi
            odio alias.
          </p>
          <Link to="/profile">
            <button className={styles.hireMeButton}>Hire Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
