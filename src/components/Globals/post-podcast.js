import Image from "next/image";
import Link from "next/link";
import IconTime from "@/assets/icon-timer.svg"
import IconPlay from "@/assets/icon-play.svg"

export default function PostPodcast({ data }) {


    return (
        <Link className="relative block w-full @laptop:max-w-[280px] h-[420px] overflow-hidden group" href={`/podcast/${data.slug}`} title={`Ir para o podcast ${data.name}`}>
            <div className="relative w-full h-full rounded-lg overflow-hidden z-0 image">
                <Image className="w-full h-full object-cover transition-all ease-linear duration-300 group-hover:scale-105" src={data.bannerPodcast} alt="Imagem" />
            </div>
            <div className="absolute bottom-10 @laptop:bottom-0 w-full z-[1] px-6 transition-all ease-linear duration-300 group-hover:bottom-10">
                <div className="flex items-center mb-2 gap-4">
                    <span className="inline-block py-[6px] px-[10px] bg-white/10 backdrop-blur-lg rounded-full text-pink-brand text-[13px] tracking-wider uppercase font-semibold">Ep {data.numberEp}</span>
                    <div className="flex gap-2 item-center">
                        <Image src={IconTime} alt="Ícone de um relógio" />
                        <span className="text-opacity-70">{data.readingTime} min</span>
                    </div>
                </div>
                <h6>{data.name}</h6>
                <div className="flex items-center opacity-100 @laptop:opacity-0 mt-4 transition-all ease-linear duration-300 gap-2 group-hover:opacity-100">
                    <Image src={IconPlay} alt="Ícone de play" />
                    <span className="text-sm text-pink-brand font-semibold">Ouvir agora</span>
                </div>
            </div>
        </Link>
    )
}