import styles from "./CVPage.module.css";
export default function CVPage() {
  return (
    <div className={styles.cvPage}>
      <img
        className={styles.cvImg}
        src="../../../public/images/CVJPEG.png"
        alt=""
      />
    </div>
  );
}
