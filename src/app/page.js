import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-stanford-red flex flex-col items-center justify-center space-y-10">
      <h1 className="text-white text-4xl font-bold">Stanford School of Humanities and Sciences</h1>
      <ul className="flex flex-row gap-4 text-2xl">
        <li>
          <Link href="/round-5/g" className="border border-white rounded-full px-4 py-2 hover:underline">Round 5G</Link>
        </li>
      </ul>
      
      <div className="text-center">
        <h2 className="text-white text-2xl font-bold">Round 4</h2>
        <ul className="flex flex-row justify-center gap-4 text-base">
          <li>
            <Link href="/round-4/e" className="hover:underline">Round 4E</Link>
          </li>
          <li>
            <Link href="/round-4/f" className="hover:underline">Round 4F</Link>
          </li>
        </ul>

        <h2 className="text-white text-2xl font-bold mt-4">Round 3</h2>
        <ul className="flex flex-row justify-center gap-4 text-base">
          <li>
            <Link href="/round-3/c" className="hover:underline">Round 3C</Link>
          </li>
          <li>
            <Link href="/round-3/d" className=" hover:underline">Round 3D</Link>
          </li>
        </ul>
        <h2 className="text-white text-2xl font-bold mt-4">Round 2</h2>
        <ul className="flex flex-row justify-center gap-4 text-base">
          <li>
            <Link href="/round-2" className="hover:underline">Round 2</Link>
          </li>
        </ul>
        <h2 className="text-white text-2xl font-bold mt-4">Round 1</h2>
        <ul className="flex flex-row gap-4 text-base">
          <li>
            <Link href="/round-1/a" className="hover:underline">Homepage A</Link>
          </li>
          <li>
            <Link href="/round-1/b" className="hover:underline">Homepage B</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
