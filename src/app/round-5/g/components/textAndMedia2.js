import mediaImage from "@/assets/images/round-4/thisisengineering-xoCrMyMFt7s-unsplash.jpg"
import Image from "next/image"
import Button from "@/components/button"

export default function TextAndMedia2() {
  return (
    <div className="relative bg-transparent min-h-[500px] flex flex-col">
      <div className="flex-1 max-w-wrapper grid grid-cols-8 gap-16">

        <div className="col-span-4 absolute inset-0 right-1/2">
          <Image src={mediaImage} alt="Foundational Research" className="aspect-auto h-full w-full object-cover absolute inset-0" />
        </div>

        <div className="col-start-5 col-span-4 self-center py-20 pl-10 text-neutrals-black">
          <p className="text-lg tracking-wide uppercase font-bold mb-2 text-balance text-black-70">When tradition meets technology</p>
          <h2 className="text-5xl tracking-tight font-bold mb-6 text-balance text-cardinal-red">Humanities Meet Data</h2>
          <h3 className="text-2xl text-balance">Through initiatives like the Center for Spatial and Textual Analysis (CESTA), Stanford scholars combine humanities inquiry with cutting-edge data science. Projects span from mapping historical social networks to analyzing ancient texts with modern algorithms—reshaping how we understand culture and history.</h3>
          <Button className="mt-12">Explore digital humanities</Button>
        </div>

      </div>
    </div>
  )
}