import styles from "./Signup.module.css";
import image from "../../assets/blossom-flower.svg";

export default function Signup() {
  return (
    <main className={styles.signup}>
      <section className={styles.left}>
        <h1 className={styles.title}>Get Started Now</h1>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              required
            />
          </div>

          <label className={styles.terms}>
            <input name="terms" type="checkbox" required />
            <span>
              I agree to the <a href="#terms">terms &amp; policy</a>
            </span>
          </label>

          <button className={styles.submit} type="submit">
            Signup
          </button>
        </form>
      </section>
      <section className={styles.right}>
        <img src={image} alt="Blossom Flower" />
      </section>
    </main>
  );
}
