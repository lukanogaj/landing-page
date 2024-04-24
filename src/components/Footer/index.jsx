import styles from "./index.module.scss";
import logo from "../media/Icons/trademark.png";
import facebook from "../media/Icons/facebook.png";
import linkedin from "../media/Icons/linkedin.png";
import twitter from "../media/Icons/twitter.png";
import youtube from "../media/Icons/youtube.png";
import instagram from "../media/Icons/instagram.png";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerHeading}>
				<div>
					<img src={logo} alt="logo" />
				</div>
				<div>
					<h1>Landing</h1>
				</div>
				<div className={styles.footerBtn}>
					<button>Purchase Now</button>
				</div>
			</div>
			<div className={styles.footerNavbar}>
				<div className={styles.footerNav}>
					<div>Home </div>
					<div>About</div>
					<div>Contact</div>
				</div>
				<div className={styles.socialIcons}>
					<div>
						<img src={facebook} alt="facebook" />
					</div>
					<div>
						<img src={linkedin} alt="linkedin" />
					</div>
					<div>
						<img src={twitter} alt="twitter" />
					</div>
					<div>
						<img src={youtube} alt="youtube" />
					</div>
					<div>
						<img src={instagram} alt="instagram" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
