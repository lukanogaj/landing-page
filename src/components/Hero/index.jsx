import styles from "./index.module.scss";
// import Navbar from "../NavBar";
import HeroContent from "../HeroContent";
import SectionOne from "../SectionOne";
import Intro from "../Intro";
import PriceCard from "../PriceCard";
import Footer from "../Footer";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<HeroContent />
			<SectionOne />
			<Intro />
			<PriceCard />
			<Footer />
		</div>
	);
};

export default Hero;
