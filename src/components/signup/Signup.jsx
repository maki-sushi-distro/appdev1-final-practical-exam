import styles from "./Signup.module.css";
import image from "../../assets/blossom-flower.svg";
import googleIcon from "../../assets/icons-google-logo.svg";
import appleIcon from "../../assets/icons-apple-logo.svg";
import { Input } from "@/components/ui/input";

const inputClassName =
  "h-[var(--control-height)]! rounded-[var(--control-radius)]! border-[length:var(--control-border-width)]! border-[color:var(--color-border)]! px-[var(--spacing-control-inline)]! py-0! text-[length:var(--font-size-control)]! text-[color:var(--color-text)]! placeholder:text-[color:var(--color-placeholder)]! focus-visible:border-[color:var(--color-primary)]! focus-visible:ring-0!";

export default function Signup() {
  return (
    <main className={styles.signup}>
      <section className={styles.left}>
        <h1 className={styles.title}>Get Started Now</h1>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <Input
              className={inputClassName}
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
            <label htmlFor="password">Password</label>
            <Input
              className={inputClassName}
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
          Have an account? <a href="#sign-in">Sign In</a>
        </p>
      </section>
      <section className={styles.right}>
        <img src={image} alt="Blossom Flower" />
      </section>
    </main>
  );
}
