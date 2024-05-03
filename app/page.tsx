"use client";
import styles from "./page.module.css";
import StayUpdatedInformation from "./_components/StayUpdatedInformation";
import Banner from "./_components/Banner";
import EmailForm from "./_components/EmailForm";
import Footer from "./_components/Footer";
import ThankYou from "./_components/thankYou";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>("");

  function isEmail(emailValue: string): boolean {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(emailValue);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (event.target instanceof HTMLFormElement) {
      const form: HTMLFormElement = event.target;
      const emailInput: HTMLInputElement = form.email;

      if (isEmail(emailInput.value)) {
        emailInput.setCustomValidity("");
        setEmail(emailInput.value);
      } else {
        emailInput.setCustomValidity("Please provide a valid email address");
      }
      emailInput.reportValidity();
    }
  }

  if (!isEmail(email)) {
    // Subscribe form
    return (
      <div className={styles.pageContainer}>
        <div></div>
        <main className={styles.mainContainer}>
          <Banner />

          <article className={styles.informationContainer}>
            <StayUpdatedInformation />
            <EmailForm submitFn={handleSubmit} />
          </article>
        </main>
        <Footer />
      </div>
    );
  } else {
    // Success message
    return (
      <div className={styles.pageContainer}>
        <div></div>
        <ThankYou email={email} />
        <Footer />
      </div>
    );
  }
}
