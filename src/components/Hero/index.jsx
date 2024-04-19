import styles from "./index.module.scss";
import Navbar from "../NavBar";
import HeroContent from "../HeroContent";
const Hero = () => {
	return (
		<div className={styles.hero}>
			<Navbar />
			<HeroContent />
		</div>
	);
};

export default Hero;
