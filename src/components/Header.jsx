import styles from "./Header.module.css";
function Header() {
	return (
		<header>
			<h1 className={styles.head}>Contact App</h1>
			<p className={styles.paraHead}>
				<span>TaskMan</span> | ReactJs Full Course
			</p>
		</header>
	);
}

export default Header;
