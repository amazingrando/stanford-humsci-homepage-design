import mediaImage from "@/assets/images/foundational-research_iceberg_final-copy-01-01_1.webp"
import Image from "next/image"

export default function TextAndMedia() {
  return (
    <div className="relative bg-black-10 min-h-[500px] flex flex-col">
      <div className="flex-1 max-w-wrapper grid grid-cols-8 gap-16">

        <div className="col-span-4 self-center py-20 text-neutrals-black">
          <p className="text-lg tracking-wide uppercase font-bold mb-2 text-balance text-black-70">Where Discovery Begins</p>
          <h2 className="text-5xl tracking-tight font-bold mb-6 text-balance text-cardinal-red">Foundational Research. Transformational Impact.
          </h2>
          <h3 className="text-2xl text-balance">Behind every breakthrough is the unseen work that drives discovery, innovation, and progress for all humankind.</h3>
          <a href="#" className="text-lg inline-block mt-12 px-4 py-2 font-bold border border-humsci-gold hover:bg-white hover:text-stanford-red transition-all duration-300">The Research Behind the Breakthroughs</a>
        </div>

        <div className="col-span-4 absolute inset-0 left-1/2">
          <Image src={mediaImage} alt="Foundational Research" className="aspect-auto h-full w-full object-cover absolute
inset-0" />
        </div>

      </div>
    </div>
  )
}