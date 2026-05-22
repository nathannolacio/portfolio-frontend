import Image from "next/image";

export default function HeroImage() {
    return (
        <div className="relative md:order-2 flex items-center justify-center bg-zinc-800/20 rounded-b-full pt-10 md:pt-45 md:-translate-y-12">

            <div className="absolute z-0 h-32 w-32 top-46 bg-lime-600/70 blur-3xl rounded-full" />

                <Image 
                    src="/avatar-perfil3-sem-fundo-editada.png" 
                    alt="Avatar picture"
                    width={250}
                    height={250}
                    className="rounded-b-full md:w-150 h-auto z-10"
                />
        </div>
    );
}