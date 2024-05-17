import Image from "next/image";
import Link from "next/link";
import IconShare from "@/assets/icon-share.svg"

const topicsPost = [
    {
        text: "Por que acelar sua startup?"
    },
    {
        text: "Sobre o nosso programa de Inovação Aberta"
    },
    {
        text: "Como vai funcionar o evento?"
    },
    {
        text: "Conclusão"
    }
]

export default function ContentPost() {
    return (
        <>
        <main className="flex items-start mt-20">
            <div className="flex-1 max-w-[236px] sticky top-28">
                <h6 className="font-semibold text-lg text-gray-scale-100 mb-10">Navegue por tópicos</h6>
                <ul className="relative flex flex-col gap-4 pb-10 mb-10">
                    {
                        topicsPost.map((item, index) => (
                            <li className="flex items-start" key={index}>
                                <Link href="#">
                                    <span>{item.text}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <button>
                    <Image src={IconShare} alt="Ícone de compartilhar" />
                    <span>Compartilhar</span>
                </button>
            </div>

            <div>
                <div>
                    <blockquote>
                        <p>A gestora do Vedacit Labs, Rita Gabriela Rezende Oliveira, ao lado dos CEOs e Founders da Prevision, Paula Lunardelli e Francisco Deppermann Fortes, que participaram do segundo ciclo de aceleração do Labs, e do co-founder e diretor da Liga Ventures, Guilherme Massa, promove um bate-papo sobre a jornada de crescimento durante...</p>
                    </blockquote>
                    <h2>Por que acelerar sua startup?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur elit id sapien porta mollis. Maecenas a nulla sit amet est ultrices volutpat. Suspendisse potenti. Nulla sit amet dui turpis. Sed fermentum tincidunt orci a laoreet. Duis egestas ligula vitae consequat rhoncus. Proin tempor risus ac nunc dapibus tincidunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur elit id sapien porta mollis. Maecenas a nulla sit amet est ultrices volutpat. Suspendisse potenti. Nulla sit amet dui turpis. Sed fermentum tincidunt orci a laoreet. Duis egestas ligula vitae consequat rhoncus. Proin tempor risus ac nunc dapibus tincidunt.</p>
                    <h2>Sobre o nosso programa de Inovação Aberta</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur elit id sapien porta mollis. Maecenas a nulla sit amet est ultrices volutpat. Suspendisse potenti. Nulla sit amet dui turpis. Sed fermentum tincidunt orci a laoreet. Duis egestas ligula vitae consequat rhoncus. Proin tempor risus ac nunc dapibus tincidunt.</p>
                    <h2>Como vai funcionar o evento?</h2>
                    <p>Donec vitae interdum nisl. Proin tincidunt malesuada viverra. Fusce porttitor lorem ut est cursus, et sollicitudin sapien pretium. Mauris placerat eros massa, quis semper mauris faucibus et.</p>
                    <ul>
                        <li>Donec vitae interdum nisl. Proin tincidunt malesuada viverra.</li>
                        <li>Donec vitae interdum nisl. Proin tincidunt malesuada viverra.</li>
                        <li>Donec vitae interdum nisl. Proin tincidunt malesuada viverra.</li>
                        <li>Donec vitae interdum nisl. Proin tincidunt malesuada viverra.</li>
                    </ul>
                    <h2>Conclusão:</h2>
                    <p>Donec vitae interdum nisl. Proin tincidunt malesuada viverra. Fusce porttitor lorem ut est cursus, et sollicitudin sapien pretium. Mauris placerat eros massa, quis semper mauris faucibus et. Gravação disponível no canal do </p>
                </div>

                <div>
                    <strong>Compartilhe esse conteúdo</strong>
                </div>
            </div>
        </main>
        </>
    )
}