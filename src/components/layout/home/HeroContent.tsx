import Heading from "../../ui/typography/Heading";

export default function HeroContent() {
    return (
        <div className="flex flex-col gap-4">
            <Heading className="text-center md:text-left">
                I build software solutions for{" "}
                <span className="text-lime-600">
                    real problems
                </span>{" "}
                — that&apos;s my purpose.
            </Heading>

            <p className="text-center text-md md:text-left md:text-2xl">
                If you are looking for thoughtful development focused on real impact, you just found it.
            </p>
        </div>
    );
}