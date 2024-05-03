import Image from "next/image";
import styles from "./thankYou.module.css";
import iconSuccess from "./../_images/icon-success.svg";

export default function ThankYouMessage({ email }: { email: string }) {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.iconContainer}>
        <Image fill src={iconSuccess.src} alt="Success check icon" />
      </div>
      <h1 className={styles.title}>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <strong>{email}</strong>. Please
        open it and click the button inside to confirm your subscription.
      </p>
      <p>
        <em>
          <u>
            Please note that this is just a practice project. No email has
            actually been sent to the provided email address.
          </u>
        </em>
      </p>
      <a href="." role="button" className={styles.dismissBtn}>
        Dismiss message
      </a>
    </main>
  );
}
