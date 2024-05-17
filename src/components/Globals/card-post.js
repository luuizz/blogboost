import Image from "next/image";
import Link from "next/link";
import ImgPost from "@/assets/img-post-topic-01.jpg"
import Tag from "./tag";
import DetailReading from "./detail-reading";

export default function CardPost() {
    return (
        <Link className="w-full block @laptop:max-w-[384px] group" href="/post/react">
            <div className="relative w-full h-52 rounded-lg overflow-hidden mb-4">
                <Image className="w-full h-full object-cover transition-all ease-linear duration-300 group-hover:scale-105" src={ImgPost} alt="Imagem do post" />
            </div>
            <div>
                <Tag text="Tecnologia" />
                <h6 className="mb-2 mt-1 transition-all ease-linear duration-300 group-hover:text-pink-brand">Realidade virtual: Entendendo a tecnologia</h6>
                <DetailReading />
            </div>
        </Link>
    )
}