import Image from "next/image";
import iconTimer from "@/assets/icon-timer-2.svg"

export default function ReadingTimePost() {
    return (
        <div className="flex items-center gap-2">
            <Image src={iconTimer} alt="Ícone de relógio" />
            <span className="font-semibold text-sm text-gray-scale-400">4min de leitura</span>
        </div>
    )
}