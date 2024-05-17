import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import IconHome from "@/assets/icon-home.svg"
import IconArrowLeft from "@/assets/icon-arrow-left.svg"
import BannerPost from "@/assets/img-banner.jpg"
import Tag from "../Globals/tag";
import AuthorLink from "./author-link";
import ReadingTimePost from "./reading-time-post";
import IconTime from "@/assets/icon-time.svg"
import ContentPost from "./content-post";

const itemsBreadcrumbs = [
    {
        path: "/categoria/front-end",
        titlePath: "Front-end",
    },
]

export default function SectionHeroPost() {
    return (
        <section className="detail-post relative bg-white pt-12 pb-32">
            <Container>
                <div className="relative z-10 flex items-center justify-between">
                    <ul className="flex items-center gap-10 breadcrumbs">
                        <li className="relative">
                            <Link 
                            href="/" 
                            title="Voltar para página inicial"
                            >
                                <Image src={IconHome} alt="Ícone da Home" />
                            </Link>
                        </li>
                        {
                            itemsBreadcrumbs.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.path} title="Voltar para página inicial"
                                    className="block text-base font-semibold leading-normal text-gray-scale-500 transition-all duration-300"
                                    >
                                        {item.titlePath}
                                    </Link>
                                </li>
                            ))
                        }
                        <li>
                            <span className="font-semibold text-base text-white">Página atual</span>
                        </li>
                    </ul>

                    <Link className="flex items-center text-base text-white transition-all duration-300 ease-linear gap-4 font-semibold" href="/" title="Ir para página inicial">
                        <Image src={IconArrowLeft} alt="Ícone de seta" />
                        Voltar para o início
                    </Link>
                </div>

                <div className="relative z-10 mt-12 mb-20">
                    <div className="w-full h-[472px] rounded-lg overflow-hidden">
                        <Image className="w-full h-full object-cover" src={BannerPost} alt="Banner do post" />
                    </div>

                    <div className="relative z-20 bg-white rounded-lg w-full max-w-[1008px] py-12 px-18 mx-auto -mt-[106px] shadow-lg">
                        <Tag text="Tecnologia" />
                        <h1 className="text-gray-scale-100 mt-5 mb-7">Let your close friends know what you're up to as you move about your day.</h1>

                        <div className="flex items-center gap-6">
                            <AuthorLink />
                            <div className="flex items-center gap-2">
                                <Image src={IconTime} alt="Ícone de um relógio" />
                                <span className="font-semibold text-sm text-gray-scale-400">21, dez. 2020</span>
                            </div>
                            <ReadingTimePost />
                        </div>
                    </div>
                </div>

                <ContentPost />
            </Container>
        </section>
    )
}