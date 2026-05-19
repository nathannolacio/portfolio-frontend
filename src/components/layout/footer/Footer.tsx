import Logo from "../header/Logo";
import Container from "../Container";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import NavigationLinks from "../../navigation/NavigationLinks";

type FooterProps = {
    setActiveSection: (section: string) => void;
};

export default function Footer({ setActiveSection }: FooterProps) {
    return(
        <footer className="bg-neutral-200 py-10">
            <Container className="flex flex-col gap-10 md:flex-row md:justify-between">

                <div className="order-2 md:order-1 flex flex-col gap-6 items-center md:items-start">
                    <Logo />
                    <div>
                        <p className="font-medium text-lg text-center md:text-left">Get in touch!</p>
                        <a className="font-medium break-all" href="mailto:nathannolacio04@gmail.com">nathannolacio04@gmail.com</a>
                    </div>
                    <div className="flex gap-4">
                        <a 
                            aria-label="Linkedin profile"
                            href="https://www.linkedin.com/in/nathannolacio/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="transition-colors duration-500 hover:text-lime-600"
                        >
                            <FaLinkedinIn size={30} />
                        </a>
                        <a 
                            aria-label="GitHub profile"
                            href="https://github.com/nathannolacio" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="transition-colors duration-500 hover:text-lime-600"
                        >
                            <FaGithub size={30} />
                        </a>
                    </div>
                    <p className="font-semibold text-sm text-center md:text-left">&copy;{new Date().getFullYear()} Nathan Nolacio. All rights reserved.</p>
                    
                </div>
                <nav 
                    className="order-1 md:order-2 flex flex-col"
                    aria-label="Footer navigation"
                >
                    <NavigationLinks
                        setActiveSection={setActiveSection}
                        listClassName="flex flex-col gap-4 font-semibold items-center justify-center h-full md:items-end "
                        linkClassName="hover:text-lime-600 transition-colors duration-500"
                        activeLinkClassName="text-lime-600"
                    />
                </nav>

            </Container>
        </footer>
    );
}