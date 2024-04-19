import styles from "./index.module.scss";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbarItems}>
				<div>Home</div>
				<div>About</div>
				<div>Contact</div>
			</div>
			<div className={styles.pageHeading}>
				<h1 className={styles.navHeading}>Landing</h1>
			</div>
			<div className={styles.btnNavbar}>
				<button>Buy Now</button>
			</div>
		</div>
	);
};

export default Navbar;
