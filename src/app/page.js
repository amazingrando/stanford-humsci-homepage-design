import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-stanford-red flex flex-col items-center justify-center space-y-10">
      <h1 className="text-white text-4xl font-bold">Stanford School of Humanities and Sciences</h1>
      <ul className="flex flex-row gap-4 text-2xl">
        <li>
          <a href="#" className="border border-white rounded-full px-4 py-2 hover:underline">
            <Link href="/round-2">Round 2</Link>
          </a>
        </li>
      </ul>
      <div className="text-center">
        <h2 className="text-white text-2xl font-bold">Round 1</h2>
        <ul className="flex flex-row gap-4 text-base">
          <li>
            <a href="#" className="hover:underline">
              <Link href="/round-1/a">Homepage A</Link>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <Link href="/round-1/b">Homepage B</Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
