
import Container from "../layout/Container"
import HeroBadge from "../layout/home/HeroBadge";
import HeroContent from "../layout/home/HeroContent";
import HeroActions from "../layout/home/HeroActions";

export default function HomeSection() {
    return (
        <section
            id="home"
            className="overflow-x-hidden py-16 md:py-28"
        >
            <Container className="flex flex-col items-center">
                <div className="flex flex-col gap-8 md:gap-12 items-center max-w-3xl mx-auto">
                    <HeroBadge name="Nathan Nolacio" />
                    <HeroContent />
                    <HeroActions />
                </div>
            </Container>
        </section>
    );
}
