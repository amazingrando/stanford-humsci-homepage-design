import newsDataJson from "@/data/newsData.json";
import Image from "next/image";

const Card = ({ title, image, date, description, useDefaultImage = false }) => {
  const defaultImage = "https://placehold.co/600x400"
  
  return (
    <div className="bg-white border border-humsci-gold-dark text-humsci-gold-dark">
      <Image src={defaultImage} alt={title} width={600} height={400} className="block" />
      <div className="p-6">
        <p className="text-sm mb-2 font-bold text-semantic-bg-charcoal">{date}</p>
        <h2 className="text-2xl tracking-tight font-medium text-cardinal-red-dark mb-4">{title}</h2>
        <p className="text-base text-semantic-bg-charcoal">{description}</p>
      </div>
    </div>
  )
}

export default function Collection1() {
  return (
    <div className="bg-cardinal-red-dark min-h-screen py-20">
      <div className="max-w-wrapper grid grid-cols-1 md:grid-cols-7 gap-12">
        <div className="col-span-2 text-white">
          <p className="text-humsci-gold text-lg tracking-wide uppercase font-bold mb-6 text-balance">Faculty Awards</p>
          <h2 className="text-5xl tracking-tight font-bold mb-6 text-balance">Honoring the Impact of H&S Faculty
          </h2>
          <h3 className="text-lg text-balance">Faculty across the School of Humanities and Sciences continue to earn distinguished awards for their innovative research, transformative teaching, and contributions to global scholarship.</h3>
          <a href="#" className="text-lg inline-block mt-12 px-4 py-2 font-bold border border-humsci-gold hover:bg-white hover:text-stanford-red transition-all duration-300">Add an Award or Honor</a>
        </div>
        <div className="col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsDataJson.newsData.map((item) => (
            <Card key={item.title} title={item.title} image={item.image} date={item.date} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
}