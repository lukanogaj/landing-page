import styles from "./index.module.scss";

const PartnerCard = () => {
	return (
		<div className={styles.main}>
			{/* elemnst with the text */}

			<div className={styles.sectorPartner}>
				<div className={styles.partnerCardText}>
					<div className={styles.partnerCardHeading}>
						<h1>Design & BUilt Your Own Landing Pages</h1>
					</div>
					<div className={styles.partnerCardparapgraph}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque
							odio nostrum at eius harum temporibus, sapiente maiores unde! Id
							nostrum temporibus quas possimus quod quibusdam commodi
							doloremque? Optio culpa ducimus sapiente eius magni maxime
							accusamus placeat magnam, explicabo aspernatur!
						</p>
					</div>
				</div>
				{/* elemenets with icons */}
				<div className={styles.partnerCardIcons}>
					<div className={styles.iconsText}>
						<div className={styles.icon}></div>
						<h2>Title Goes Here</h2>
						<div className={styles.iconsParagraph}>
							<p>
								Lorem ipsum dolor sit amet consectetur <br />
								adipisicing elit. Rerum officiis quis nesciunt? Atque!
							</p>
						</div>
					</div>

					<div className={styles.icons}>
						<div className={styles.icon}></div>
						<h2>Title Goes Here</h2>
						<div className={styles.iconsParagraph}>
							<p>
								Lorem ipsum dolor sit amet consectetur <br />
								adipisicing elit. Rerum officiis quis nesciunt? Atque!
							</p>
						</div>
					</div>
					<div className={styles.icons}>
						<div className={styles.icon}></div>
						<h2>Title Goes Here</h2>
						<div className={styles.iconsParagraph}>
							<p>
								Lorem ipsum dolor sit amet consectetur <br />
								adipisicing elit. Rerum officiis quis nesciunt? Atque!
							</p>
						</div>
					</div>
					<div className={styles.icons}>
						<div className={styles.icon}></div>
						<h2>Title Goes Here</h2>
						<div className={styles.iconsParagraph}>
							<p>
								Lorem ipsum dolor sit amet consectetur <br />
								adipisicing elit. Rerum officiis quis nesciunt? Atque!
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.samsung}></div>
		</div>
	);
};

export default PartnerCard;
