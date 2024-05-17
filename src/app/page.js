import SectionPlaylists from "@/components/Footer/section-playlists";
import SectionArticles from "@/components/Home/section-articles";
import SectionHero from "@/components/Home/section-hero";
import SectionPodcasts from "@/components/Home/section-podcasts";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionArticles />
      <SectionPodcasts />
      <SectionPlaylists />
    </>
  )
}
