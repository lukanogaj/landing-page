import styles from "./index.module.scss";
// import Navbar from "../NavBar";
// import heroPicture from "../media/Icons/designer_1.png";

const HeroContent = () => {
	return (
		<div className={styles.heroContent}>
			<div className={styles.wrapper}>
				<div className={styles.textHero}>
					<div className={styles.heroHeading}>
						<h1>
							Introduce Your Product <br /> Quickly & Effectively
						</h1>
					</div>
					<div className={styles.heroParagraph}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
						quod porro nemo, omnis ducimus voluptas harum hic voluptatum
						assumenda accusamus quidem a enim quam tempore <br />
						<br /> necessitatibus saepe nostrum neque accusantium? Perferendis
						dolore dignissimos rerum magni dolorum culpa vel impedit
						consequuntur.
					</div>
					<div className={styles.heroBtn}>
						<button className={styles.btnPurchase}>Purchase UI Kit</button>
						<button className={styles.btnLearn}>Learn More</button>
					</div>
				</div>
				<div className={styles.heroImage}>
					<img src="../media/Icons/group.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default HeroContent;
