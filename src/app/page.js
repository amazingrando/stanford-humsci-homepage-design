import Hero from "@/components/heroAnimated";
import ImageSide from "@/components/imageSide";
import mediaImage from "@/assets/images/foundational-research_iceberg_final-copy-01-01_1.webp"
import TextAndMedia from "@/components/textAndMedia";
import News from "@/components/news";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen text-white bg-stanford-red flex flex-col items-center justify-center space-y-10">
      <h1 className="text-white text-4xl font-bold">Stanford School of Humanities and Sciences</h1>
      <ul className="flex flex-row gap-4 text-2xl">
        <li>
          <a href="#" className="border border-white rounded-full px-4 py-2 hover:underline">
            <Link href="/round-1/a">Homepage A</Link>
          </a>
        </li>
        <li>
          <a href="#" className="border border-white rounded-full px-4 py-2 hover:underline">
            <Link href="/round-1/b">Homepage B</Link>
          </a>
        </li>
      </ul>
    </div>
  );
}
