import breakthroughPrize from "@/assets/images/awards/breakthrough_prize.jpg.webp"
import gretchenDaily from "@/assets/images/awards/Gretchen Daily_crop.png.webp"
import nicholasJenkins from "@/assets/images/awards/nicholas-jenkins-010.jpg.webp"
import pauledwards from "@/assets/images/awards/pauledwards.jpg.webp"
import rodden2019 from "@/assets/images/awards/rodden2019.jpg.webp"
import ButtonGhost from "@/components/buttonGhost"
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from "next/image"

const awardsData = [
  {
    title: "Nicholas Jenkins wins Warren-Brooks Award",
    image: nicholasJenkins
  },
  {
    title: "Jonthan Rodden named 2025 Andrew Carnegie Fellow",
    image: rodden2019
  },
  {
    title: "Stanford researchers honored with 2025 Breakthrough prizes",
    image: breakthroughPrize
  },
  {
    title: "Paul N. Edwards receives 2025 Society for Social Studies of Science award",
    image: pauledwards
  },
  {
    title: "Gretchen Daily named American Association for the Advancement of Science fellow",
    image: gretchenDaily
  }
];

export default function Awards() {
  return (
    <div className="bg-white text-neutrals-black py-20 bg-gradient-to-br from-black-30 via-white to-black-30">
      <div className="max-w-wrapper space-y-6">
        <div className="">
          <h2 className="text-3xl text-cardinal-red uppercase inline-block tracking-tight font-bold mb-6 text-balance !my-0 mr-auto">Faculty Awards</h2>
          {/* <ButtonGhost className="!mt-0">Add an award or honor</ButtonGhost>
          <span className="flex items-center gap-2">
            <a href="#" className="text-white/90 hover:text-white hover:underline transition-all duration-300">Explore All Awards</a>
            <ArrowRightIcon className="size-4" />
          </span> */}
          {/* <h3 className="text-lg text-balance">Faculty across the School of Humanities and Sciences continue to earn distinguished awards for their innovative research, transformative teaching, and contributions to global scholarship.</h3> */}
        </div>

        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-7">
            <a href="#" className="group">
              <figure className="space-y-4">
                <Image src={awardsData[0].image} alt={awardsData[0].title} />
                <figcaption className="text-4xl font-bold text-balance group-hover:underline group-hover:text-cardinal-red decoration-1 underline-offset-4 tracking-tight">{awardsData[0].title}</figcaption>
              </figure>
            </a>
          </div>
          <div className="space-y-4 divide-y divide-black-30 col-span-5">
            {awardsData.slice(1).map((award) => (
              <div key={award.title} className="pb-4">
                <a href="#" className="group flex flex-row gap-4">
                  <h3 className="text-2xl leading-tight font-semibold group-hover:underline decoration-1 group-hover:text-cardinal-red underline-offset-4 tracking-tight">{award.title}</h3>
                  <Image src={award.image} alt={award.title} className="w-[150px] h-full" />
                </a>
              </div>
            ))}
            <p className="flex items-center gap-2">
              <a href="#" className=" hover:underline hover:text-cardinal-red">Explore All Awards</a>
              <ArrowRightIcon className="size-4" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}