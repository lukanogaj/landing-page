import styles from "./index.module.scss";

const HeroContent = () => {
	return (
		<div className={styles.heroContent}>
			<div className={styles.heroHeading}>
				<h1>Introduce Your Product Quickly & Effectively</h1>
			</div>
			<div className={styles.heroParagraph}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
				similique atque distinctio nihil quo maiores aspernatur expedita fugiat
				ut placeat sequi assumenda ipsam, voluptatum quia soluta optio totam
				consequuntur cumque?
			</div>
			<div className={styles.heroBtn}>
				<button>Purchase UI Kit</button>
				<button>Learn More</button>
			</div>
		</div>
	);
};

export default HeroContent;
