import styles from "./index.module.scss";
import Navbar from "../NavBar";
import HeroContent from "../HeroContent";
import SectionOne from "../SectionOne";
import Intro from "../Intro";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Navbar />
			<HeroContent />
			<SectionOne />
			<Intro />
		</div>
	);
};

export default Hero;
