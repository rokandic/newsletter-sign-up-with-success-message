import styles from "./Banner.module.css";
import breakpoints from "./../breakpoints.module.css";
import { assetPrefixPath } from "../envVars";

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
      <source
        media={breakpoints.mobileBreakpoint}
        srcSet={`${assetPrefixPath}${mobileImg}`}
      />
      <source
        media={breakpoints.desktopBreakpoint}
        srcSet={`${assetPrefixPath}${desktopImg}`}
      />
      <img
        className={styles.headerImg}
        src={`${assetPrefixPath}${mobileImg}`}
        alt="Desktop apps with progress bar"
      />
    </picture>
  );
}
