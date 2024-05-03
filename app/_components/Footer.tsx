import styles from "./Footer.module.css";
import breakpoints from "./../breakpoints.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.attribution}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/rokandic" target="_blank">
          Rok Andic
        </a>
        .
      </div>
    </>
  );
}
