"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { itemsMenu } from "@/data";
import Hamburger from "hamburger-react";
import Logo from "@/assets/logo-codeboost.svg"
import NavBar from "./navbar";
import Search from "./search";
import Container from "../Container";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
        <header className="w-full sticky top-0 left-0 py-6 bg-gray-scale-200 bg-opacity-50 backdrop-blur-xl z-[2025]">
            <Container className="flex items-center justify-between">
                <div>
                    <Link href="/" title="Ir para página inicial">
                        <Image src={Logo} alt="Logo do Blogboost" />
                    </Link>
                </div>
                <NavBar />
                <Search />
                <button className="relative z-[99] @laptop:hidden bg-black rounded-full">
                    <Hamburger size={40} label="Mostrar menu" color="white" toggled={isOpen} toggle={setIsOpen} />
                </button>
            </Container>
        </header>

        <aside className={`fixed top-0 left-0 bg-gray-scale-100 text-white w-full h-screen z-50 overflow-y-auto transition-all ${isOpen ? 'translate-y-0' : 'translate-y-full'} ease-in @laptop:hidden`}>
            <Container className="py-10 h-screen flex items-center justify-center flex-col">
                <nav className="flex flex-col items-center gap-16">
                    {
                        itemsMenu.map((items, index) => (
                            <Link className="flex flex-row gap-2 text-white text-opacity-70" key={index} href={items.path} title={`Ir para ${items.nameUrl}`} onClick={closeMenu}>
                                <Image className="w-[32px]" src={items.icon} alt={items.altText} />
                                <span className="font-normal text-2xl">{items.nameUrl}</span>
                            </Link>
                        ))
                    }
                </nav>
                <Search className="flex @tablet:hidden mt-12 max-w-full h-16" />
            </Container>
        </aside>
        </>
    )
}