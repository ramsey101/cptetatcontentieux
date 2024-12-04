"use client";

import Correction from "@/composants/correction";
import { DonneesCorrection } from "@/types/donnesform";

const mesdatascorrection: DonneesCorrection = {
  titre: "Fiche Individuelle De Correction de mention personnelles",
  region: "PORO",
  departement: "KORHOGO",
  cel: " CESP KORHOGO",
  ordre: "ORDRE 125NC2",
  dateform: "13/12/2024",
  nomlv: "Epp Binguebougou",
  typerec: "RECTIFICATION",
  datelieunaiss: "17/12/1989",
  nomprenom: "M. FABIO NANWOYA",
  nomprenomspere: "M. FABIO",
  nomprenomsmere: "M. FABIO",
  nomprenomspv: "M. FABIO",
  nomprenomsperepv: "M. FABIO",
  nomprenomsmerepv: "M. FABIO",
  statutpv: "OMIS SUR LA LEP ou RECENSE",
  numelecteur: "1",
  numelecteurpv: "10555eud",
  piecesjointes: [
    "Acte de naissance",
    "Certificat de nationalité",
    "Acte de mariage",
    "Acte de naissance de l'enfant",
  ],
  refrecep: "10554",
  argument: "M. FABIO",
  datelieunaisspv: "17/12/2022",
  decisioncel:
    "ACCEPTATION",
  argumentdec:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
};

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <Correction mesdatas={mesdatascorrection} />
      </div>
    </>
  );
}
