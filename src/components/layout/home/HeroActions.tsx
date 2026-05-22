import Button from "../../ui/Button";

export default function HeroActions() {
    return (
        <div className="flex flex-col md:flex-row w-full justify-around md:items-center gap-6 md:w-fit md:gap-10">
            <Button
                color="cyan"
                variant="outline"
                className="md:order-2"
                
            >
                <a href="/CV_NathanNolacio_TI_Geral.pdf" target="_blank" rel="noopener noreferrer">
                    Download CV
                </a>
            </Button>
            <Button
                color="cyan"
                variant="primary"
                className="md:order-1"
            >
                <a href="#contact">
                    {`Let's talk!`}
                </a>
            </Button>
        </div>
    );
}