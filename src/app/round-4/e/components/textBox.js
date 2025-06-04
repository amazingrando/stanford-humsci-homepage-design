import ButtonGhost from "@/components/buttonGhost";
import Image from "next/image";

export default function TextBox({bgImage}) {
  return (
    <div className="bg-humsci-blue text-white py-16 relative">
      <div className="max-w-wrapper grid grid-cols-1 md:grid-cols-8 gap-12 relative z-10">
        <div className="col-span-8 md:col-span-4 md:col-start-2">
          <p className="text-humsci-gold text-lg tracking-wide uppercase font-bold mb-4 text-balance">Scholarly Series</p>
          <h2 className="text-5xl font-bold text-balance mb-4">Scholarly Series from H&S Faculty</h2>
          <h3 className="text-2xl text-balance mb-4">Ongoing Series That Spotlight Scholarship and Impact</h3>
          <p>Stay connected with the work, recognition, and ideas shaping the School of Humanities and Sciences. Whether you’re following faculty achievements or diving into their latest books, these series offer a window into the intellectual life of Stanford.
          </p>
          <ButtonGhost>Explore all series</ButtonGhost>
        </div>
      </div>
      <Image src={bgImage} alt="Background Image" className="w-full h-full object-cover absolute inset-0 saturate-0 mix-blend-multiply opacity-50" />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red to-transparent mix-blend-multiply" /> */}
    </div>
  );
}