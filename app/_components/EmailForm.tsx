import styles from "./EmailForm.module.css";

export default function EmailForm({
  submitFn,
}: {
  submitFn: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  function inputFieldClick(
    event: React.SyntheticEvent<HTMLInputElement>
  ): void {
    if (event.target instanceof HTMLInputElement)
      event.target.setCustomValidity("");
  }

  return (
    <form
      noValidate
      method="post"
      className={styles.emailForm}
      onSubmit={submitFn}
    >
      <label className={styles.addressLabel} htmlFor="email">
        Email address{" "}
        <span className={`${styles.errorText} ${styles.hidden}`}>
          Valid email required
        </span>
      </label>
      <input
        className={styles.inputField}
        id="email"
        type="email"
        name="email"
        onClick={inputFieldClick}
        onFocus={inputFieldClick}
        placeholder="email@company.com"
      ></input>
      <button role="button" type="submit" className={styles.subscribeBtn}>
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}
