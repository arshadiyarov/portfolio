import MainBanner from "@/components/banners/MainBanner";
import QuoteBanner from "../components/banners/QuoteBanner";
import ProjectsBanner from "@/components/banners/ProjectsBanner";
import SkillsBanner from "@/components/banners/SkillsBanner";
import AboutMeBanner from "@/components/banners/AboutMeBanner";
import ContactsBanner from "@/components/banners/ContactsBanner";

export default function Home() {
  return (
    <main className={"space-y-28 mt-14 mb-32"}>
      <MainBanner />
      <QuoteBanner />
      <ProjectsBanner />
      <SkillsBanner />
      <AboutMeBanner />
      <ContactsBanner />
    </main>
  );
}
