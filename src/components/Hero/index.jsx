import styles from "./index.module.scss";
import Navbar from "../NavBar";
import HeroContent from "../HeroContent";
import SectionOne from "../SectionOne";
import Intro from "../Intro";
import Intro2 from "../Intro2";
import Intro3 from "../Intro3";
import Intro4 from "../Intro4";
import PriceCard from "../PriceCard";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Navbar />
			<HeroContent />
			<SectionOne />
			<Intro />
			<Intro2 />
			<Intro3 />
			<Intro4 />
			<PriceCard />
		</div>
	);
};

export default Hero;
