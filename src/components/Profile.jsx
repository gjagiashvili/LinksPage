import styles from "../modules/Profile.module.scss";
import { useParams } from "react-router-dom";
const Profile = () => {
  const { name } = useParams();
  return (
    <div className={`${styles.page} ${styles.profile}`}>
      <div className={styles.content}>
        <h1>{`${name ? name : "John Doe"}`}</h1>
        <h3>Web Designer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          totam placeat tempore?
        </p>
      </div>
    </div>
  );
};

export default Profile;
