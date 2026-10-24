import styles from "./Signup.module.css";
import image from "../../assets/blossom-flower.svg";

export default function Signup() {
  return (
    <main className={styles.signup}>
      <section className={styles.left}>
        <h1 className={styles.title}>Get Started Now</h1>
      </section>
      <section className={styles.right}>
        <img src={image} alt="Blossom Flower" />
      </section>
    </main>
  );
}
