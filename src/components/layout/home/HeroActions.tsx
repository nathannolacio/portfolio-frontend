import { useTranslations } from "use-intl";
import Button from "../../ui/Button";

export default function HeroActions() {
    const t = useTranslations("Hero");

    return (
        <div className="flex flex-col md:flex-row w-full justify-around md:items-center gap-6 md:w-fit md:gap-10">
            <Button
                variant="outline"
                className="md:order-2"
                href="/CV_NathanNolacio_TI_Geral.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t("cvButton")}
            </Button>
            <Button
                variant="primary"
                className="md:order-1"
                href="#contact"
            >
                {t("contactButton")}
            </Button>
        </div>
    );
}