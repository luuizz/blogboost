import Image from "next/image";
import Link from "next/link";
import FeaturedImg from "@/assets/img-feature.jpg";
import IconCalendar from "@/assets/icon-calendar.svg";
import IconHour from "@/assets/icon-clock.svg"
import Tag from "../Globals/tag";

const arrayDetailPost = [
    {
        icon: IconCalendar,
        text: "16, Fev",
        altText: "Ícone de um calendário",
    },
    {
        icon: IconHour,
        text: "12min de leitura",
        altText: "Ícone de um relógio",
    },
]

export default function FeaturedPost() {
    return (
    <div className="flex-1 max-w-full text-center @tablet:text-left @laptop:max-w-[728px] pb-10 border-b @laptop:border-0 border-white/10">
        <div className="mb-8 @laptop:mb-10">
            <Tag text="Tech blog" />
            <h2 className="mt-2 @laptop:mt-4">Em destaque</h2>
        </div>
        <Link className="block group w-full max-w-[728px]" href="/post/react">
            <div className="w-full h-52 @tablet:h-80 rounded-lg overflow-hidden mb-9">
                <Image className="w-full h-full object-cover transition-all ease-linear duration-300 group-hover:scale-105" src={FeaturedImg} alt="" />
            </div>
            <div>
                <div className="flex items-center justify-center @tablet:justify-between flex-row mb-4">
                    <Tag text="Tecnologia" />
                    <ul className="flex items-center gap-10">
                        {
                            arrayDetailPost.map((items, index) => (
                            <li className="hidden @tablet:flex gap-2 relative featured-list" key={index}>
                                <Image src={items.icon} alt={items.altText} />
                                <span className="text-sm text-gray-scale-500">{items.text}</span>
                            </li>
                            ))
                        }
                    </ul>
                </div>
                <h3 className="transition-colors text-2xl @laptop:text-3xl ease-linear duration-300 group-hover:text-pink-brand">Let your close friends know what you're up to as you move about your day.</h3>
            </div>
        </Link>
    </div>
    )
}