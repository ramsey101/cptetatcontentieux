"use client";
import Carto from "../communs/carto";
import Inforec from "../communs/inforec";
import Contenu from "../contenu";
import { DonneesCorrection } from "@/types/donneescorrection";
import Correctionidentite from "../communs/correctionidentite";
import Entete from "../communs/entete";

export default function Correction({
  mesdatas,
}: {
  mesdatas: DonneesCorrection;
}) {
  const content = () => {
    return (
      <>
        <Entete titre={mesdatas.titre} />
        <Carto region={mesdatas.region} departement={mesdatas.departement} cel={mesdatas.cel} />
        <Inforec
          ordre={mesdatas.ordre}
          dateform={mesdatas.dateform}
          nomlv={mesdatas.nomlv}
          typerec={mesdatas.typerec}
        />
        <Correctionidentite mesdatas={mesdatas} />
      </>
    );
  };

  return <Contenu>{content()}</Contenu>;
}