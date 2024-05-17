import IconTech from "@/assets/icon-tecnologia.svg"
import IconReact from "@/assets/icon-react.svg"
import IconHTMLCSS from "@/assets/icon-html-css.svg"
import Img01Pod from "@/assets/img-podcast-01.jpg"
import Img02Pod from "@/assets/img-podcast-02.jpg"
import Img03Pod from "@/assets/img-podcast-03.jpg"
import Img04Pod from "@/assets/img-podcast-04.jpg"
import LogoHTML5 from "@/assets/icon-html5.svg"
import LogoCSS from "@/assets/icon-css.svg"
import LogoJS from "@/assets/icon-js.svg"
import LogoWP from "@/assets/icon-wordpress.svg"
import LogoReact from "@/assets/icon-react-xs.svg"

export const itemsMenu = [
    {
        icon: IconTech,
        path: "/categoria/tecnologia",
        nameUrl: "Tecnologia",
        altText: "Ícone de um quadrado com elementos de código"
    },
    {
        icon: IconReact,
        path: "/categoria/reactjs",
        nameUrl: "ReactJS",
        altText: "Ícone do React"
    },
    {
        icon: IconHTMLCSS,
        path: "/categoria/html-css",
        nameUrl: "HTML & CSS",
        altText: "Ícone de um quadrado com elementos de código"
    }
]

export const arrayListPostsXs = [
    {
        text: "16, Fev",
    },
    {
        text: "12min de leitura",
    }
]

export const PodcastListsEp = [
    {
        name: "Realidade virtual: Entendendo a tecnologia",
        readingTime: 12,
        numberEp: 1,
        slug: "react-nactive-aprender",
        bannerPodcast: Img01Pod,
    },
    {
        name: "Realidade virtual: Entendendo a tecnologia",
        readingTime: 12,
        numberEp: 2,
        slug: "react-nactive-aprender",
        bannerPodcast: Img02Pod,
    },
    {
        name: "Realidade virtual: Entendendo a tecnologia",
        readingTime: 12,
        numberEp: 3,
        slug: "react-nactive-aprender",
        bannerPodcast: Img03Pod,
    },
    {
        name: "Realidade virtual: Entendendo a tecnologia",
        readingTime: 12,
        numberEp: 4,
        slug: "react-nactive-aprender",
        bannerPodcast: Img04Pod,
    },
    {
        name: "Realidade virtual: Entendendo a tecnologia",
        readingTime: 12,
        numberEp: 1,
        slug: "react-nactive-aprender",
        bannerPodcast: Img01Pod,
    },
    {
        name: "Realidade virtual: Entendendo a tecnologia",
        readingTime: 12,
        numberEp: 2,
        slug: "react-nactive-aprender",
        bannerPodcast: Img02Pod,
    },
    {
        name: "Realidade virtual: Entendendo a tecnologia",
        readingTime: 12,
        numberEp: 3,
        slug: "react-nactive-aprender",
        bannerPodcast: Img03Pod,
    },
    {
        name: "Realidade virtual: Entendendo a tecnologia",
        readingTime: 12,
        numberEp: 4,
        slug: "react-nactive-aprender",
        bannerPodcast: Img04Pod,
    },
]

export const playlistItems = [
    {
        link: "/playlist/front-end",
        titleLink: "Front-end",
        namePlaylist: "Desenvolvimento HTML + CSS3 + JS",
        items: [
            {
                image: LogoHTML5,
                alt: "Logo do HTML5",
            },
            {
                image: LogoCSS,
                alt: "Logo do CSS3",
            },
            {
                image: LogoJS,
                alt: "Logo do JS",
            },
        ]
    },
    {
        link: "/playlist/back-end",
        titleLink: "Back-end",
        namePlaylist: "O mundo da Tecnologia",
        items: [
            {
                image: LogoWP,
                alt: "Logo do WordPress",
            },
        ]
    },
    {
        link: "/playlist/server-components",
        titleLink: "Server Components e Javascript",
        namePlaylist: "Desenvolvimento React JS",
        items: [
            {
                image: LogoReact,
                alt: "Logo do React",
            },
        ]
    },
];