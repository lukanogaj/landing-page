import styles from "./index.module.scss";
// import dataForHero from "../DataForHero";

const HeroContent = () => {
	return (
		<div className={styles.heroContent}>
			<div className={styles.textHero}>
				<div className={styles.heroHeading}>
					<h1>Introduce Your Product Quickly & Effectively</h1>
				</div>
				<div className={styles.heroParagraph}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
					culpa hic dicta maiores architecto molestiae laborum, iste quas ullam
					illo rem cum laboriosam nesciunt molestias velit quidem sint!
					Laudantium voluptate atque, mollitia deleniti quis libero nostrum
					aperiam nam eos saepe?
				</div>
				<div className={styles.heroBtn}>
					<button className={styles.btnPurchase}>Purchase UI Kit</button>
					<button className={styles.btnLearn}>Learn More</button>
				</div>
			</div>
			<div className={styles.heroContentImage}></div>
		</div>
	);
};

export default HeroContent;
