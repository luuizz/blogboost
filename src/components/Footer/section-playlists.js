import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import IconPlaylist from "@/assets/icon-playlist.svg"
import { playlistItems } from "@/data";


export default function SectionPlaylists() {
    return (
        <section className="py-16 @laptop:py-20">
            <Container className="flex items-center justify-between flex-col @laptop:flex-row">
                <div className="flex items-center justify-center flex-col max-w-full mb-10 @latpop:mb-0 @laptop:block @laptop:max-w-[205px]">
                    <Image src={IconPlaylist} alt="Ícone de playlists" />
                    <h4 className="mt-4">Algumas playlists do canal</h4>
                </div>
                <div className="flex flex-1 gap-10 w-full max-w-full @laptop:max-w-[824px] items-start justify-between flex-col @tablet:flex-row">
                    {
                        playlistItems.map((playlist, index) => (
                            <Link className="flex flex-col items-center justify-center @laptop:block w-full max-w-full @tablet:max-w-[186px] group" key={index} href={playlist.link} title={`Ir para ${playlist.titleLink}`}>
                                <div className="flex items-center mb-6 flex-row gap-8">
                                {
                                    playlist.items.map((item, itemIndex) => (
                                            <Image key={itemIndex} src={item.image} alt={item.alt} />
                                    ))
                                }
                                </div>
                                <h5 className="text-white text-center @laptop:text-left text-opacity-70 transition-all ease-linear duration-300 group-hover:text-opacity-100">{playlist.namePlaylist}</h5>
                            </Link>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}