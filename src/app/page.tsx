import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
      <Link href="/acceuil">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Formulaire de réclamation</button>
        </Link>
        <Link href="/page2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Page 2</button>
        </Link>
        <Link href="/page3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Page 3</button>
        </Link>
        <Link href="/page4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Page 4</button>
        </Link>
        <Link href="/page5">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Page 5</button>
        </Link>
        <Link href="/page6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Page 6</button>
        </Link>
        <Link href="/page7">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Page 7</button>
        </Link>
     
      </main>
   
    </div>
  );
}
