import Image from "next/image";
import Link from "next/link";
import { itemsMenu } from "@/data";

export default function NavBar() {
    return (
        <nav className="hidden @laptop:flex items-center gap-16">
            {
                itemsMenu.map((items, index) => (
                    <Link className="flex flex-row gap-2 transition-colors ease-linear text-white text-opacity-70 hover:text-pink-brand" key={index} href={items.path} title={`Ir para ${items.nameUrl}`}>
                        <Image src={items.icon} alt={items.altText} />
                        <span className="font-normal text-sm">{items.nameUrl}</span>
                    </Link>
                ))
            }
        </nav>
    )
}