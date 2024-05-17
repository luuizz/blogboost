"use client"
import Image from "next/image";
import Container from "../Container";
import LogoBoost from "@/assets/logo-boost.svg"
import ArrowUp from "@/assets/icon-arrow-up.svg"
import { useRef } from "react";

export default function Footer() {

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    const topRef = useRef(null);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
        <hr className="linha opacity-20 text-center max-w-grid mx-auto" />
        <footer className="py-16 @laptop:py-20">
            <Container className="flex items-center @laptop:items-start justify-between flex-col @laptop:flex-row">
                <div className="flex-1 max-w-full @laptop:max-w-[829px] flex flex-col @laptop:flex-row gap-6 text-center @laptop:text-left @laptop:gap-[84px] mb-10 @laptop:mb-0">
                    <strong className="font-bold text-sm">©{anoAtual} CodeBoost</strong>
                    <p className="flex-1 font-normal text-sm text-white/80">O curso Codeboost foi desenvolvido por William Moreira. As vagas são distribuídas por turmas de forma sazonal. Caso perca alguma oportunidade é só aguardar a próxima turma que normalmente acontece dentro do período de 3 a 4 meses.</p>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center mr-[71px]">
                        <span className="text-base mr-4">Grupo</span>
                        <Image src={LogoBoost} alt="Logo do Grupo Boost" />
                    </div>
                    <button className="w-[37px] h-[37px] rounded-full border-2 border-white/40 flex items-center justify-center transition-all ease-linear duration-300 hover:bg-pink-brand hover:border-0" onClick={handleScrollToTop} type="button">
                        <Image src={ArrowUp} alt="Seta para cima" />
                    </button>
                </div>
            </Container>
        </footer>
        </>
    )
}