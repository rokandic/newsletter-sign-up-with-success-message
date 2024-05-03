import styles from "./Banner.module.css";
import breakpoints from "./../breakpoints.module.css";
import mobileImg from "./../_images/illustration-sign-up-mobile.svg";
import desktopImg from "./../_images/illustration-sign-up-desktop.svg";

export default function Banner() {
  return (
    <picture>
      <source media={breakpoints.mobileBreakpoint} srcSet={mobileImg.src} />
      <source media={breakpoints.desktopBreakpoint} srcSet={desktopImg.src} />
      <img
        className={styles.headerImg}
        src={mobileImg.src}
        alt="Desktop apps with progress bar"
      />
    </picture>
  );
}
