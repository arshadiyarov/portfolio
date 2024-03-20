import MainBanner from "@/components/banners/MainBanner";
import Quote from "@/components/banners/Quote";

export default function Home() {
  return (
    <main className={"space-y-28 my-14"}>
      <MainBanner />
      <Quote />
    </main>
  );
}
