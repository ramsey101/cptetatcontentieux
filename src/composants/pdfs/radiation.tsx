"use client";
import Contenu from "../contenu";
import { DonneesRadiation } from "@/types/donneesradiation";
import Enteteradiation from "../communs/enteteradiation";
import Tabradiation from "../communs/tabradiation";
import Signatureradiation from "../communs/signradiation";
import Entete from "../communs/entete";

export default function Radiation({
  mesdatas,
}: {
  mesdatas: DonneesRadiation;
}) {
  const content = () => {
    return (
      <>
      <Entete />
        <div className="entete">
          <p> FICHE RECAPITULATIVE DES RADIATIONS Á OPERER</p>
          <br />
        </div>
        <Enteteradiation mesdatas={mesdatas} />
        <Tabradiation
          numelec={mesdatas.numelec}
          daterad={mesdatas.daterad}
          nomrad={mesdatas.nomrad}
          prenomrad={mesdatas.prenomrad}
          datenaissrad={mesdatas.datenaissrad}
          motifrad={mesdatas.motifrad}
        />
        <Signatureradiation />
      </>
    );
  };

  return <Contenu>{content()}</Contenu>;
}
