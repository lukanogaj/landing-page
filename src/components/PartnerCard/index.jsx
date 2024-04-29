import styles from "./index.module.scss";

const PartnerCard = () => {
	return (
		<div className={styles.main}>
			{/* elemnst with the text */}

			<div className={styles.sectorPartner}>
				<div className={styles.partnerCardText}>
					<div className={styles.partnerCardHeading}>
						<h1>Design & Built Your Own Landing Pages</h1>
					</div>
					<div className={styles.partnerCardParagraph}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
							ipsum illum. Doloribus nam dignissimos, commodi illo nobis laborum
							corporis adipisci blanditiis molestiae cupiditate repellat
							reiciendis sit minus sapiente perspiciatis quia quisquam, nisi
							iure <br /> <br />
							suscipit sint nulla et neque consequuntur? Minus beatae
							accusantium nostrum minima quia tenetur rerum commodi at sunt!
						</p>
					</div>
				</div>
				{/* elemenets with icons */}
				<div className={styles.partnerCardIcons}>
					<div className={styles.iconsRow}>
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
							<div></div>
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
					<div className={styles.iconsRow}>
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
			</div>

			<div className={styles.samsung}></div>
		</div>
	);
};

export default PartnerCard;
