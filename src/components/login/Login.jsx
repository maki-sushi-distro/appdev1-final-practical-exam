import styles from "./Login.module.css";
import image from "../../assets/blossom-flower.svg";

export default function Login() {
  return (
    <main className={styles.signup}>
      <section className={styles.left}>
        <h1 className={styles.title}>Welcome back!</h1>
        <p className={styles.subtitle}>
          Enter your Credentials to access your account
        </p>
      </section>
      <section className={styles.right}>
        <img src={image} alt="Blossom Flower" />
      </section>
    </main>
  );
}
