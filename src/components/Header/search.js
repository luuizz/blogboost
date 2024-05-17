import Image from "next/image";
import IconSearch from "@/assets/icon-search.svg"
import { twMerge } from "tailwind-merge";

export default function Search({ className }) {

    const defaultClass = 'hidden @tablet:flex items-center w-full max-w-72 h-9';
    const combinedClassess = twMerge(defaultClass, className)

    return (
        <form action="" className={combinedClassess}>
            <input className="flex-1 h-full text-base @tablet:text-sm bg-transparent border transition-all ease-linear duration-300 border-gray-scale-500 border-opacity-25 px-4 rounded-r-none rounded-l focus:outline-none placeholder:text-white/50 focus:border focus:border-pink-brand" type="text" placeholder="Pesquise por artigo ou tema" />
            <button className="h-16 w-16 @tablet:w-9 @tablet:h-9 rounded bg-pink-brand flex items-center justify-center -ml-[5px] transition-all ease-linear duration-300 hover:brightness-75" type="submit" title="Pesquisar">
                <Image className="w-6 @tablet:w-4" src={IconSearch} alt="Ícone de uma lupa" />
            </button>
        </form>
    )
}