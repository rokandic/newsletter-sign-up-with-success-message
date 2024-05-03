import styles from "./Banner.module.css";
import breakpoints from "./../breakpoints.module.css";

export default function Banner({
  mobileImg,
  desktopImg,
  altText,
}: {
  mobileImg: string;
  desktopImg: string;
  altText: string;
}) {
  return (
    <picture>
      <source media={breakpoints.mobileBreakpoint} srcSet={mobileImg} />
      <source media={breakpoints.desktopBreakpoint} srcSet={desktopImg} />
      <img
        className={styles.headerImg}
        src={mobileImg}
        alt="Desktop apps with progress bar"
      />
    </picture>
  );
}
