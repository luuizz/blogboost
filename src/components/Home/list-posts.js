import Image from "next/image";
import Link from "next/link";
import ImgPlaceholder from "@/assets/image-post-xs-01.jpg"
import Tag from "../Globals/tag";
import DetailReading from "../Globals/detail-reading";

export default function ListPosts({ title, linkUrl, category, timeReading, datePublication }) {
    return (
        <div className="relative pb-8 mb-8 last:pb-0 last:mb-0 bordinha">
            <Link className="flex items-center w-full @tablet:max-w-[384px] h-[104px] group" href="/post/react">
                <div className="w-[104px] h-[104px] rounded-lg overflow-hidden">
                    <Image className="w-full h-full object-cover transition-all ease-linear duration-300 group-hover:scale-105" src={ImgPlaceholder} alt="Imagem do post" />
                </div>
                <div className="flex-1 ml-8">
                <Tag text="Tecnologia" />
                    <h6 className="mt-3 mb-1 transition-all ease-linear duration-300 group-hover:text-pink-brand">Você fica inseguro(a) na hora de escrever?</h6>
                    <DetailReading />
                </div>
            </Link>
        </div>
    )
}