"use client";

import { DonneesReintegrationomis } from "@/types/donneesreintegrationomis";
import Inforeintegration from "../communs/inforeintegration";
import Signaturebureaucel from "../communs/signaturebureaucel";
import Entete from "../communs/entete";
import Cartofc from "../communs/cartofc";
import Contenuh from "../contenuh";

export default function ReintegrationOmis({
  mesdatas,
}: {
  mesdatas: DonneesReintegrationomis;
}) {
  const content = () => {
    return (
      <>
        <Entete />
        <div>
          <p className="entete underline">
            FICHE INDIVIDUELLE D INSCRIPTION REINTEGRATION D ELECTEUR REJETE PAR
            ERREUR DE LA LISTE ELECTORALE PROVISOIRE (Omis)
          </p>
          <p className="text-xs text-red-600 text-center">
            UNIQUEMENT POUR LES PERSONNES DUMENT ENROLEES LORS DU RECENSEMENT
            ELECTORAL MAIS NE FIGURANT PAS SUR LA LISTE PROVISOIRE, NI SUR LES
            LISTE DE REJETS POUR CAUSE DE DECES OU DE PERTE DE DROIT DE VOTE"
          </p>
          <br />
        </div>
        <Cartofc />
        <Inforeintegration />
        <Signaturebureaucel />
      </>
    );
  };
  return <Contenuh>{content()}</Contenuh>;
}
