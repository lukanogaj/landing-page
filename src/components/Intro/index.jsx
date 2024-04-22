import styles from "./index.module.scss";
import dataForIntro from "../DataForIntro";

const Intro = () => {
	return (
		<div className={styles.intro}>
			{dataForIntro.map((card) => (
				<div className={styles.introText} key={card.id}>
					<div className={styles.introIcon}>
						<img src={card.image} alt="" />
					</div>
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
			))}
		</div>
	);
};

export default Intro;
