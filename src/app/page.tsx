import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href="/acceuil">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Formulaire de réclamation cel</button>
        </Link>
        <Link href="/recepisse">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Recepisse de reception de reclamation</button>
        </Link>
        <Link href="/radiation">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">fiche récapitulative des radiations à opérer </button>
        </Link>
        <Link href="/reclamationrecues">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">liste récapitulative des réclamations reçues </button>
        </Link>
        <Link href="/reclamationrecuesday">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">liste journaliere des réclamations reçues </button>
        </Link>
        <Link href="/reintegrationomis">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">réintégration d électeur rejeté par erreur de la lep (omis)</button>
        </Link>
        <Link href="/reintegrationmotiferrone">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">fiche individuelle inscription réintégration d électeur rejeté par erreur de la lep (motif de rejet avéré erroné)</button>
        </Link>
        <Link href="/correctionmentionpersonnelles">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">fiche individuelle de correction de mention personnelles</button>
        </Link>
        <Link href="/mptest">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">test pdfmake</button>
        </Link>
      </main>
    </div>
  );
}
