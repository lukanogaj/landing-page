import styles from "./index.module.scss";
import Navbar from "../NavBar";
import HeroContent from "../HeroContent";
import SectionOne from "../SectionOne";
import Intro from "../Intro";

// import PriceCard from "../PriceCard";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Navbar />
			<HeroContent />
			<SectionOne />
			<Intro />
			{/* <PriceCard /> */}
		</div>
	);
};

export default Hero;
