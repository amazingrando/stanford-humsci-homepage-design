import Hero from "@/components/heroAnimated";
import ImageSide from "@/components/imageSide";
import mediaImage from "@/assets/images/foundational-research_iceberg_final-copy-01-01_1.webp"
import TextAndMedia from "@/components/textAndMedia";
import News from "@/components/news";

export default function Home() {
  return (
    <div className="min-h-[600vh]">
      <Hero />
      <TextAndMedia />
      <News />
    </div>
  );
}
