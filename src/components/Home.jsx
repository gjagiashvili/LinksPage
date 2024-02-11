import React from "react";
import { Link } from "react-router-dom";
import styles from "../modules/Home.module.scss";

const Home = () => {
  return (
    <div className={`${styles.page} ${styles.home}`}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.content}>
        <h1>Welcome to the Home Page</h1>
        <p>Explore our amazing website.</p>
        <Link to="/about">
          <button className={styles.goToAboutButton}>Go To About Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
