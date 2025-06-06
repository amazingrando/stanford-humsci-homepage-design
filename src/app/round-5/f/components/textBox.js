import ButtonGhost from "@/components/buttonGhost";
import Image from "next/image";

export default function TextBox({bgImage}) {
  return (
    <div className="bg-cardinal-red text-white py-32 relative">
      <div className="max-w-wrapper grid grid-cols-1 md:grid-cols-8 gap-12 relative z-10">
        <div className="col-span-8 md:col-span-4 md:col-start-2">
          {/* <p className="text-humsci-gold text-lg tracking-wide uppercase font-bold mb-4 text-balance">Scholarship in Action</p> */}
          <h2 className="text-5xl font-bold text-balance mb-4">Scholarship in Action</h2>
          <h3 className="text-2xl text-balance mb-4">From classrooms to communities, H&S faculty and students bring their research to life. Their work on topics like social justice, global health, and artistic expression makes a difference both inside and beyond the university.</h3>
          {/* <p>From classrooms to communities, H&S faculty and students bring their research to life. Their work on topics like social justice, global health, and artistic expression makes a difference both inside and beyond the university.</p> */}
          <ButtonGhost>See their work</ButtonGhost>
        </div>
      </div>
      <Image src={bgImage} alt="Background Image" className="w-full h-full object-cover absolute inset-0 saturate-0 mix-blend-multiply opacity-80" />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red to-transparent mix-blend-multiply" /> */}
    </div>
  );
}