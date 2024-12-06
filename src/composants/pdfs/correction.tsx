"use client";
import Carto from "../communs/carto";
import Contenu from "../contenu";
import { DonneesCorrection } from "@/types/donneescorrection";
import Entete from "../communs/entete";
import Correctionidentitenew from "../communs/correctionidentitenew";
import Changementlv from "../communs/changementlv";
import Infocorrection from "../communs/infocorrection";
import Signaturebureaucel from "../communs/signaturebureaucel";

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
        <Infocorrection ordre={""} nomlv={""}         
        />
        <Changementlv 
        />
        <Correctionidentitenew 
         />
         <Signaturebureaucel />
      </>
    );
  };

  return <Contenu>{content()}</Contenu>;
}
