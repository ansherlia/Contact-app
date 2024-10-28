import styles from "./Header.module.css";
function Header({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Contact App</h1>
        <h3>React JS || Full course</h3>
      </header>
      {children}
      <footer className={styles.footer}>
        <h1>
          Developed by reza with{" "}
          <span style={{ color: "red", fontSize: "2.5rem" }}>
            &#x2665;&#xfe0f;
          </span>
        </h1>
      </footer>
    </>
  );
}

export default Header;
