import Image from "next/image";
import Container from "../layout/Container"
import Button from "../ui/Button";

export default function HomeSection() {
    return (
        <section className="min-h-svh overflow-x-hidden">
            <Container className="h-full flex flex-col md:flex-row gap-10 md:py-12 justify-center items-center md:items-start md:justify-between">
                <div className="md:order-2 flex items-center justify-center bg-zinc-800/20 rounded-b-full pt-10 md:pt-45 md:-translate-y-12">

                    <div className="absolute z-0 h-32 w-32 top-46 bg-lime-600/70 blur-3xl rounded-full" />

                        <Image 
                            src="/avatar-perfil3-sem-fundo-editada.png" 
                            alt="Avatar picture"
                            width={250}
                            height={250}
                            className="rounded-b-full md:w-150 h-auto z-10"
                        />
                </div>
                <div className="flex flex-col gap-10 md:gap-32 justify-center items-center md:items-start md:order-1 max-w-3xl">
                    <div 
                        className="w-fit rounded-lg py-1 text-sm/6 bg-zinc-800"
                    >
                        <p className="px-2">
                            <span className="text-lime-600 bg-lime-100 rounded-md ring-1 ring-lime-600/60 mr-1 w-fit px-1 font-medium">
                                {`</Hi>`}
                            </span>
                            <span className="text-zinc-200">
                                {`I'm `}
                            </span>
                            <span className="text-neutral-50 font-medium">
                                Nathan Nolacio
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-2xl md:text-6xl text-center md:text-left leading-tight">
                            I build software solutions for <span className="text-lime-600 ">real problems </span> — that&apos;s my purpose.
                        </h1>
                        <p className="text-center md:text-left md:text-2xl">
                            If you are looking for thoughtful development focused on real impact, you just found it.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-around md:items-center gap-6 md:w-fit md:gap-10">
                        <Button
                            color="cyan"
                            variant="outline"
                            className="md:order-2"
                        >
                            Download CV
                        </Button>
                        <Button
                            color="cyan"
                            variant="primary"
                            className="md:order-1"
                        >
                            {`Let's talk!`}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}