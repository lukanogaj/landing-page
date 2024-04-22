import styles from "./index.module.scss";

const SectionOne = () => {
	return (
		<div className={styles.sectionOne}>
			<div className={styles.sectionOneText}>
				<div className={styles.sectioOneHeading}>
					<h1>Light, Fast & PowerFull</h1>
				</div>
				<div className={styles.sectionOneParagraph}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
					culpa hic dicta maiores architecto molestiae laborum, iste quas ullam
					illo rem <br />
					cum laboriosam nesciunt molestias velit quidem sint! Laudantium
					voluptate atque, mollitia deleniti quis libero nostrum aperiam nam eos
					saepe?
				</div>
			</div>
			<div className={styles.icons}>
				<div className={styles.titleContent}>
					<div className={styles.icon}></div>
					<h2>Title Goes Here</h2>
					<div className={styles.iconsParagraph}>
						<p>
							Lorem ipsum dolor sit amet consectetur <br />
							adipisicing elit. Rerum officiis quis nesciunt? Atque!
						</p>
					</div>
				</div>
				<div>
					<div className={styles.titleContent}>
						<div className={styles.icon}></div>
						<h2>Title Goes Here</h2>
						<div className={styles.iconsParagraph}>
							<p>
								Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.
								Saepe amet recusandae ducimus voluptatem.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionOne;
