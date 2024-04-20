import styles from "./index.module.scss";
import Navbar from "../NavBar";
import HeroContent from "../HeroContent";
import SectionOne from "../SectionOne";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Navbar />
			<HeroContent />
			<SectionOne />
		</div>
	);
};

export default Hero;
