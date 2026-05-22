
import Container from "../layout/Container"
import HeroBadge from "../layout/home/HeroBadge";
import HeroContent from "../layout/home/HeroContent";
import HeroActions from "../layout/home/HeroActions";
import HeroImage from "../layout/home/HeroImage";

export default function HomeSection() {
    return (
        <section 
            id="home" 
            className="overflow-x-hidden py-12 md:py-16"
        >
            <Container className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-center md:items-start">
                
                <HeroImage />
                <div className="flex flex-col gap-8 md:gap-16 justify-start items-center md:items-start md:order-1 max-w-3xl">
                    <HeroBadge name="Nathan Nolacio" />
                    <HeroContent />
                    <HeroActions />
                </div>

            </Container>
        </section>
    );
}