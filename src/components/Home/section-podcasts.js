"use client"
import React, { useRef } from "react";
import Container from "../Container";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import IconArrow from "@/assets/icon-arrow-right.svg"
import PostPodcast from "../Globals/post-podcast";
import { PodcastListsEp } from "@/data";

export default function SectionPodcasts() {

    const swiperRef = useRef();
    const paginationRef = useRef(null);
    const dataPodcasts = PodcastListsEp;


    return (
        <section className="py-16 @laptop:py-32 border-b-2 border-gray-scale-500/15">
            <Container>
                <div className="flex items-center justify-between mb-10">
                    <h2>Podcasts</h2>
                    <div className="flex @laptop:items-center justify-end @laptop:justify-between max-w-[300px] flex-1">
                        <div className="relative hidden @laptop:block bottom-0 w-auto paginas" ref={paginationRef}></div>
                        <div className="flex item @laptop:items-center">
                            <button className="mr-4 w-full h-full" onClick={() => {
                                swiperRef.current?.slidePrev()
                            }}>
                                <Image className="-rotate-180" src={IconArrow} alt="Ícone de seta" />
                            </button>
                            <button className="w-full h-full" onClick={() => {
                                swiperRef.current?.slideNext()
                            }}>
                                <Image src={IconArrow} alt="Ícone de seta" />
                            </button>
                        </div>
                    </div>
                </div>
                <Swiper
                slidesPerView={4}
                grabCursor={true}
                spaceBetween={33}
                speed={800}
                modules={[Navigation, Pagination]}
                pagination={{
                    clickable: true,
                    el: paginationRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1.1,
                        spaceBetween: 20
                    },
                    500: {
                        slidesPerView: 1.5
                    },
                    768: {
                        slidesPerView: 2.1
                    },
                    991: {
                        slidesPerView: 2.5
                    },
                    1100: {
                        slidesPerView: 3.5,
                        spaceBetween: 32
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }}
                >
                {
                    dataPodcasts.map((item, index) => (
                        <SwiperSlide key={index}>
                            <PostPodcast data={item} />
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </Container>
        </section>
    )
}