"use client";
import Cartofc from "../communs/cartofc";
import Contenuh from "../contenuh";
import { DonneesCorrection } from "@/types/donneescorrection";
import Correctionidentitenew from "../communs/correctionidentitenew";
import Changementlv from "../communs/changementlv";
import Infocorrection from "../communs/infocorrection";
import Signaturebureaucel from "../communs/signaturebureaucel";
import Entete from "../communs/entete";

export default function Correction({
  mesdatas,
}: {
  mesdatas: DonneesCorrection;
}) {
  const content = () => {
    return (
      <>
      <Entete />
        <div className="entete">
          <p> CORRECTION DE MENTIONS PERSONNELLES SUR LA LISTE ELECTORALE</p>
          <p> FICHE INDIVIDUELLE</p>
        </div>
        <Cartofc
          date={mesdatas.date}
          cel={mesdatas.cel}
        />
        <Infocorrection ordre={""} nomlv={""} />
        <Changementlv />
        <Correctionidentitenew />
        <Signaturebureaucel />
      </>
    );
  };

  return <Contenuh>{content()}</Contenuh>;
}
