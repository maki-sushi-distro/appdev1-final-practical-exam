import styles from "./Signup.module.css";
import image from "../../assets/blossom-flower.svg";

export default function Signup() {
  return (
    <main className={styles.signup}>
      <section className={styles.left}></section>
      <section className={styles.right}>
        <img src={image} alt="Blossom Flower" />
      </section>
    </main>
  );
}
