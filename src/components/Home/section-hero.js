import Container from "../Container";
import ListPosts from "./list-posts";
import FeaturedPost from "./feature-post";

export default function SectionHero() {
    return (
        <section className="py-10 @tablet:py-14 @laptop:pt-20 @tablet:pb-28">
            <Container className="grid grid-cols-1 md:grid-cols-hero-section gap-8 @desktop:flex items-start justify-between flex-row">
                <FeaturedPost />
                <div className="flex-1 @laptop:max-w-[384px] mt-10">
                    <h4>Mais populares</h4>
                    <div className=" mt-11">
                        <ListPosts />
                        <ListPosts />
                        <ListPosts />
                    </div>
                </div>
            </Container>
        </section>
    )
}