"use client";

import Radiation from "@/composants/pdfs/radiation";
import { DonneesRadiation } from "@/types/donneesradiation";

const mesdatas: DonneesRadiation = {
  titre: "RECEPISSE DE DEPOT DE RECLAMATION",
  region: "AGNEBY TIASSA",
  departement: "TIASSALE",
  cel: " CESP TIASSALE",
  ordre: "ORDRE 1",
  dateform: "17/12/2022",
  nomlv: "M. FABIO",
  typerec: "INSCRIPTION OU RECTIFICATION OU RADIATION",
  datelieunaiss: "17/12/2022",
  nomprenom: "M. FABIO",
  nomprenomspere: "M. FABIO",
  nomprenomsmere: "M. FABIO",
  nomprenomspv: "M. FABIO",
  nomprenomsperepv: "M. FABIO",
  nomprenomsmerepv: "M. FABIO",
  statutpv: "OMIS SUR LA LEP ou RECENSE",
  numelecteur: "1",
  numelecteurpv: "10555eud",
  piecesjointes: ["Acte de naissance", "Certificat de nationalité", "Acte de mariage", "Acte de naissance de l'enfant"],
  refrecep: "10554",
  argument: "M. FABIO",
  datelieunaisspv: "17/12/2022",
  decisioncel: "Irrecevabilité ou Acceptation ou Rejet ou Mise en instance(sursis à statuer)",
  argumentdec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  numelec: "jfjf",
  nomrad: "M. FABIO",
  prenomrad: "kkfkf",
  datenaissrad: "17/12/2022",
  motifrad:"jfjfjf"
};

export default function Page() {
  return (<>
  <div className="flex items-center justify-center min-h-screen">
    <Radiation mesdatas={mesdatas} />
  </div>
 
  </>);
}