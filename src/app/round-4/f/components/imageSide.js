import Image from "next/image";

export default function ImageSide({ image, alt='', bg='bg-blue-500', children }) {
  return (
    <div className={`relative ${bg} text-white min-h-[70svh]`}>
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="lg:col-span-7 lg:px-0 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0 flex flex-col justify-center items-center">
            {children}
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image src={image} alt={alt} className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" />
        </div>
      </div>
    </div>
  )
}
