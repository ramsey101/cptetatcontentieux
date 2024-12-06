"use client";

import { DonneesReintegrationomis } from "@/types/donneesreintegrationomis";
import Contenu from "../contenu";
import Inforeintegration from "../communs/inforeintegration";
import Signaturebureaucel from "../communs/signaturebureaucel";

export default function ReintegrationOmis({
  mesdatas,
}: {
  mesdatas: DonneesReintegrationomis;
}) {
  const content = () => {
    return (
      <>
        <div className="entete">
          <p>
            {" "}
            FICHE INDIVIDUELLE DE REINTEGRATION D'ELECTEUR REJETÉ PAR ERREUR DE
            LA LEP (OMIS)
          </p>
          <br />
        </div>

         <Inforeintegration /> 
       
        <Signaturebureaucel />
      </>
    );
  };
  return <Contenu>{content()}</Contenu>;
}
