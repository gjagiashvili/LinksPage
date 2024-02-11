import styles from "../modules/Error.module.scss";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className={styles.errorPage}>
      <h1>404 - Not Found</h1>
      <p>
        Uh oh! The page you are looking for is not here. Double check the URL!
      </p>
      <Link to="/">
        <button className={styles.returnHomeButton}>Return Home</button>
      </Link>
    </div>
  );
};

export default Error;
