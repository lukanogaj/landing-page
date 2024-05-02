import styles from "./index.module.scss";

const PartnerCard = () => {
	return (
		<div className={styles.main}>
			<div className={styles.sectorPartner}>
				<div className={styles.partnerCardText}>
					<div className={styles.partnerCardHeading}>
						<h1 className={styles.headPartner}>
							Design & Built Your Own Landing Pages
						</h1>
					</div>
					<div className={styles.partnerCardParagraph}>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
							quasi quibusdam nesciunt modi suscipit natus rem sit non
							voluptates, sapiente, esse quae? Laudantium <br />
							<br /> vero odit error ad neque suscipit fugiat fugit, et dolorem
							nemo possimus quas a tempora, mollitia eos.
						</p>
					</div>
				</div>
				{/* elemenets with icons */}
				<div className={styles.partnerCardIcons}>
					<div className={styles.iconsRow}>
						<div className={styles.icons}>
							<div className={styles.icon}></div>
							<h2 className={styles.headIconPartner}>Title Goes Here</h2>
							<div className={styles.iconsParagraph}>
								<p>
									Lorem ipsum dolor sit amet consectetur <br />
									adipisicing elit. Rerum officiis quis nesciunt? Atque!
								</p>
							</div>
						</div>
						<div className={styles.icons}>
							<div className={styles.icon}></div>
							<h2 className={styles.headIconPartner}>Title Goes Here</h2>
							<div className={styles.iconsParagraph}>
								<p>
									Lorem ipsum dolor sit amet consectetur <br />
									adipisicing elit. Rerum officiis quis nesciunt? Atque!
								</p>
							</div>
						</div>
					</div>
					<div className={styles.iconsRow}>
						<div className={styles.icons}>
							<div className={styles.icon}></div>
							<h2 className={styles.headIconPartner}>Title Goes Here</h2>
							<div className={styles.iconsParagraph}>
								<p>
									Lorem ipsum dolor sit amet consectetur <br />
									adipisicing elit. Rerum officiis quis nesciunt? Atque!
								</p>
							</div>
						</div>
						<div className={styles.iconRow}></div>
						<div className={styles.icons}>
							<div className={styles.icon}></div>
							<h2 className={styles.headIconPartner}>Title Goes Here</h2>
							<div className={styles.iconsParagraph}>
								<p>
									Lorem ipsum dolor sit amet consectetur <br />
									adipisicing elit. Rerum officiis quis nesciunt? Atque!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PartnerCard;
