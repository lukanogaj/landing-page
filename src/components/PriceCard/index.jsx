import styles from "./index.module.scss";

const PriceCard = () => {
	return (
		<div className={styles.priceCard}>
			{/* <div className={styles.curvedBackground}> */}
				<div className={styles.priceCardHeading}>
					<h1>A Price To Suit Everyone</h1>
				</div>
				<div className={styles.priceCardParagraph}>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio velit
						at quas deserunt inventore repellat accusantium quam deleniti
						veritatis ipsa! Maxime pariatur quidem, repellat at <br />{" "}
						voluptatem sapiente mollitia!
					</p>
				</div>
				<div className={styles.headingTotal}>
					<h1>$40</h1>
				</div>
				<div className={styles.uiHeading}>
					<h3>UI Design Kit</h3>
				</div>
				<div className={styles.simple}>
					<p>See, One price.Simple</p>
				</div>
				<div className={styles.purchaseBtn}>
					<button>Purchase Now</button>
				{/* </div> */}
			</div>
		</div>
	);
};

export default PriceCard;
