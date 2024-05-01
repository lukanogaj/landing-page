import styles from "./index.module.scss";

const PriceCard = () => {
	return (
		<div className={styles.priceCard}>
			<div className={styles.priceCardIntro}>
				<div className={styles.priceCardHeading}>
					<h1 className={styles.headPriceCard}> A Price To Suit Everyone</h1>
				</div>
				<div className={styles.priceCardParagraph}>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio velit{" "}
						at quas <br /> deserunt inventore repellat accusantium quam deleniti
						veritatis ipsa! Maxime <br /> pariatur quidem, repellat at
						voluptatem sapiente mollitia!
					</p>
				</div>
			</div>
			<div className={styles.priceCardSum}>
				<div className={styles.headingTotal}>
					<h1>$40</h1>
				</div>
				<div className={styles.uiHeading}>
					<h3 className={styles.uiHead}>UI Design Kit</h3>
				</div>
				<div className={styles.simple}>
					<p>See, One price.Simple</p>
					<div className={styles.purchaseBtn}>
						<button className={styles.priceCardBtn}> Purchase Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceCard;
