"use client";

import { Button } from "antd";

import ReactDOMServer from "react-dom/server";

type ContenuProps = {
  children: JSX.Element;
};

export default function Contenu({ children }: ContenuProps) {

    const opt = {
        margin: 1,
        filename: "Annexe 41.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      
    const handlePrint = async () => {
        const html2pdf = (await import("html2pdf.js/dist/html2pdf.min.js")).default;
        const printContent = ReactDOMServer.renderToString(children);
        html2pdf().set(opt).from(printContent).save();
      };

  return (
    <>
       
        <div>
          <div className="mt-2 flex  flex-col items-center">
            {children}
            <br />
            <Button  type="primary" onClick={handlePrint}>
              Imprimer
            </Button>
            <br />
          </div>
        </div>
    </>
  );
}
