import styles from "./Login.module.css";
import image from "../../assets/blossom-flower.svg";
import googleIcon from "../../assets/icons-google-logo.svg";
import appleIcon from "../../assets/icons-apple-logo.svg";
import { Input } from "@/components/ui/input";

const inputClassName =
  "h-[var(--control-height)]! rounded-[var(--control-radius)]! border-[length:var(--control-border-width)]! border-[color:var(--color-border)]! px-[var(--spacing-control-inline)]! py-0! text-[length:var(--font-size-control)]! text-[color:var(--color-text)]! placeholder:text-[color:var(--color-placeholder)]! focus-visible:border-[color:var(--color-primary)]! focus-visible:ring-0!";

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
            <Input
              className={inputClassName}
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
            <Input
              className={inputClassName}
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

        <div className={styles.divider}>
          <span>Or</span>
        </div>

        <div className={styles.socialButtons}>
          <button className={styles.socialButton} type="button">
            <img src={googleIcon} alt="" />
            <span>Sign in with Google</span>
          </button>
          <button className={styles.socialButton} type="button">
            <img src={appleIcon} alt="" />
            <span>Sign in with Apple</span>
          </button>
        </div>

        <p className={styles.accountPrompt}>
          Don&apos;t have an account? <a href="#sign-up">Sign Up</a>
        </p>
      </section>
      <section className={styles.right}>
        <img src={image} alt="Blossom Flower" />
      </section>
    </main>
  );
}
