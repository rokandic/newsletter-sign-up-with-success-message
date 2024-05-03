import styles from "./StayUpdatedInformation.module.css";

export default function StayUpdatedInformation() {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>Stay updated!</h1>

      <p className={styles.text}>
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
    </article>
  );
}
