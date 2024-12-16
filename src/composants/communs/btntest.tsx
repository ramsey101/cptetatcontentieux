"use client";

import { useRef, useState } from "react";


import pdfMake from "pdfmake/build/pdfmake";
import { vfs } from "./custumfont";

pdfMake.vfs = vfs;

 

export default function PdfViewer() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleGeneratePdf = () => {
    const docDefinition = {
      content: [
        { text: "Hello, this is a PDF generated with pdfmake!", fontSize: 18 },
        { text: "Here is some additional content.", margin: [0, 20, 0, 0] },
      ],
    };

    // Créer le PDF et obtenir l'URL de type "data:"
    pdfMake.createPdf(docDefinition).getDataUrl((dataUrl: string) => {
      setPdfUrl(dataUrl); // Met à jour l'URL pour affichage dans l'iframe
    });
  };

  const handlePrint = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.print();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Aperçu du PDF</h1>

      <div className="flex space-x-4">
        {/* Bouton pour afficher le PDF */}
        <button
          onClick={handleGeneratePdf}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Générer le PDF
        </button>

        {/* Bouton pour imprimer le PDF */}
        {pdfUrl && (
          <button
            onClick={handlePrint}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Imprimer
          </button>
        )}
      </div>

      {/* Affichage conditionnel de l'iframe */}
      {pdfUrl && (
        <iframe
          ref={iframeRef}
          src={pdfUrl}
          className="w-full h-[500px] mt-6 border border-gray-300"
          title="PDF Viewer"
        ></iframe>
      )}
    </div>
  );
}
