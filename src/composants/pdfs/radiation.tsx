"use client";
import Contenu from "../contenu";
import { DonneesRadiation } from "@/types/donnesform";
import Entete from "../communs/entete";
import Enteteradiation from "../communs/enteteradiation";
import Tabradiation from "../communs/tabradiation";
import Signatureradiation from "../communs/signradiation";

export default function Radiation({
  mesdatas,
}: {
  mesdatas: DonneesRadiation;
}) {


  const content = () => {
    return (
      <>
        <Entete titre={mesdatas.titre} />
        <Enteteradiation mesdatas={mesdatas} />
        <Tabradiation mesdatas={mesdatas} />
        <Signatureradiation mesdatas={mesdatas} />
      </>
    );
  };

  return <Contenu>{content()}</Contenu>;
}
