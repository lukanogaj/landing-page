import styles from "./index.module.scss";

const Intro = () => {
	return (
		<div className={styles.intro}>
			<div className={styles.introText}>
				<div className={styles.introIcon}></div>
				<div className={styles.introContent}>
					<div className={styles.introHeading}>
						<h1>Light, Fast & PowerFull</h1>
					</div>
					<div className={styles.introParagraph}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
						culpa hic dicta maiores architecto molestiae laborum, iste quas
						ullam illo rem
						<br />
						<br />
						cum laboriosam nesciunt molestias velit quidem sint! Laudantium
						voluptate atque, mollitia deleniti quis libero nostrum aperiam nam
						eos saepe?
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
