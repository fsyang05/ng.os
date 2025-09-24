import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <strong>ng.os</strong>
      </header>
      <main className={styles.main}>
        <h1>AI-native operating system for nonprofits.</h1>
        <div className={styles.ctas}>
          <a className={styles.primary} href="mailto:felixyang2028@u.northwestern.edu">
            Get in contact
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} ng.os</span>
      </footer>
    </div>
  );
}
