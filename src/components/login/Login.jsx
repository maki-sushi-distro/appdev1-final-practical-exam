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
        <form className={styles.form}>
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
            <div className={styles.labelRow}>
              <label htmlFor="password">Password</label>
              <a href="#forgot-password">Forgot password?</a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>

          <label className={styles.remember}>
            <input name="remember" type="checkbox" />
            <span>Remember for 30 days</span>
          </label>

          <button className={styles.submit} type="submit">
            Login
          </button>
        </form>
      </section>
      <section className={styles.right}>
        <img src={image} alt="Blossom Flower" />
      </section>
    </main>
  );
}
