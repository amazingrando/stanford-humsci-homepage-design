import mediaImage from "@/assets/images/round-4/premium_photo-1661962617265-b88538dc15e4.avif"
import Image from "next/image"
import Button from "@/components/button"

export default function TextAndMedia() {
  return (
    <div className="relative bg-transparent min-h-[500px] flex flex-col">
      <div className="flex-1 max-w-wrapper grid grid-cols-8 gap-16">

        <div className="col-span-4 self-center py-20 text-neutrals-black">
          <p className="text-lg tracking-wide uppercase font-bold mb-2 text-balance text-black-70">Understanding change, together</p>
          <h2 className="text-5xl tracking-tight font-bold mb-6 text-balance text-cardinal-red">Exploring the Changing Human Experience</h2>
          <h3 className="text-2xl text-balance">The Changing Human Experience initiative fuels interdisciplinary research that examines how we live, adapt, and relate to one another in an evolving world—from climate change to global politics.</h3>
          <Button className="mt-12">Explore the initiative</Button>
        </div>

        <div className="col-span-4 absolute inset-0 left-1/2">
          <Image src={mediaImage} alt="Foundational Research" className="aspect-auto h-full w-full object-cover absolute inset-0" />
        </div>

      </div>
    </div>
  )
}