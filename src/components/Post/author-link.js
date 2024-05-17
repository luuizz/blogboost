import Image from "next/image";
import Link from "next/link";
import IconUser from "@/assets/icon - user.svg"

export default function AuthorLink() {
    return (
        <Link className="flex items-center gap-2" href="/author/luiz-ricardo" title="Acessar publicações do autor">
            <Image src={IconUser} alt="Ícone de usuário" />
            <span className="font-semibold text-sm text-gray-scale-400">Luiz Ricardo</span>
        </Link>
    )
}