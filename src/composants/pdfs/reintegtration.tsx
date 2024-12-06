"use client";

import { DonneesReintegration } from "@/types/donneesreintegration";
import Contenu from "../contenu";
import Signrecep from "../communs/signrecep";
import Inforeintegration from "../communs/inforeintegration";


export default function Reintegration({mesdatas}:{mesdatas: DonneesReintegration} ) {
  const content = () => {
    return (
      <>
       <div className="entete">
          <p>
            {" "}
            FICHE INDIVIDUELLE DE REINTEGRATION D'ELECTEUR REJETÉ PAR ERREUR DE
            LA LEP 
          </p>
          <br />
        </div>
      <Inforeintegration 
      />
      <Signrecep />
      </>
    );
  }
  

  return <Contenu>{content()}</Contenu>;
}
