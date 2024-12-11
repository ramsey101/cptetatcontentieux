"use client";

import { DonneesReintegration } from "@/types/donneesreintegration";
import Contenuh from "../contenuh";
import Signrecep from "../communs/signrecep";
import Inforeintegration from "../communs/inforeintegration";
import Entete from "../communs/entete";
import Cartofc from "../communs/cartofc";
import Signaturebureaucel from "../communs/signaturebureaucel";

export default function Reintegration({
  mesdatas,
}: {
  mesdatas: DonneesReintegration;
}) {
  const content = () => {
    return (
      <>
        <Entete />
        <div >
          <p className="entete underline">
            FICHE INDIVIDUELLE D INSCRIPTION REINTEGRATION D ELECTEUR REJETE PAR
            ERREUR DE LA LISTE ELECTORALE PROVISOIRE (Motif de rejet avéré
            erroné)
          </p>
          <p className="text-xs text-red-600 text-center">
            UNIQUEMENT POUR LES PERSONNES FIGURANT SUR LA LISTE PROVISOIRE DES
            REQUERANTS REJETES AVEC LE MOTIF "Décès présumé" ou "Interdiction
            des droits civiques et politiques"
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
