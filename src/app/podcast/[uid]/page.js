import Container from "@/components/Container";

export default function PagePodcast({ params }) {
    return (
        <section>
            <Container>
                <h1>Página do Podcast {params.uid}</h1>
            </Container>
        </section>
    )
}