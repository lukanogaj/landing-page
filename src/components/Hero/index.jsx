import styles from "./index.module.scss";
import Navbar from "../NavBar";
import HeroContent from "../HeroContent";
import SectionOne from "../SectionOne";
import Intro from "../Intro";
import PriceCard from "../PriceCard";
import Footer from "../Footer";
import PartnerCard from "../PartnerCard";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Navbar />
			<HeroContent />
			<SectionOne />
			<Intro />
			<PartnerCard />
			<PriceCard />
			<Footer />
		</div>
	);
};

export default Hero;
