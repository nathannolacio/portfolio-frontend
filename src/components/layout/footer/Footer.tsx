import Logo from "../header/Logo";
import Container from "../Container";
import NavigationLinks from "../../navigation/NavigationLinks";
import { useTranslations } from "next-intl";
import type { Dispatch, SetStateAction } from "react";

type FooterProps = {
    setActiveSection: Dispatch<SetStateAction<string>>;
};

export default function Footer({ setActiveSection }: FooterProps) {
    const t = useTranslations("Footer");
    const currentYear = new Date().getFullYear();

    return(
        <footer className="bg-surface py-10">
            <Container className="flex flex-col gap-10 md:flex-row md:justify-between">

                <div className="order-2 md:order-1 flex flex-col gap-6 items-center md:items-start">
                    <Logo />
                    <div>
                        <p className="font-medium text-lg text-center md:text-left">{t("cta")}</p>
                        <a className="font-medium break-all" href="mailto:nathannolacio04@gmail.com">nathannolacio04@gmail.com</a>
                    </div>
                    <p className="font-semibold text-sm text-center md:text-left">{t("copy", { year: currentYear })}</p>
                    
                </div>
                <nav 
                    className="order-1 md:order-2 flex flex-col"
                    aria-label="Footer navigation"
                >
                    <NavigationLinks
                        setActiveSection={setActiveSection}
                        listClassName="flex flex-col gap-4 font-semibold items-center justify-center h-full md:items-end "
                        linkClassName="hover:text-accent transition-colors duration-500"
                        activeLinkClassName="text-accent"
                    />
                </nav>

            </Container>
        </footer>
    );
}