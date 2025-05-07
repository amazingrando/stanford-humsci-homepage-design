import Hero from "@/app/components/hero";
import ImageSide from "@/app/components/imageSide";
import mediaImage from "@/app/assets/images/foundational-research_iceberg_final-copy-01-01_1.webp"
import TextAndMedia from "@/app/components/textAndMedia";
import News from "@/app/components/news";

export default function Home() {
  return (
    <div className="min-h-[600vh]">
      <Hero />
      <TextAndMedia />
      <News />
    </div>
  );
}
