"use client";

import Radiation from "@/composants/pdfs/radiation";
import { DonneesRadiation } from "@/types/donneesradiation";

const mesdatas: DonneesRadiation = {
  titre: "RECEPISSE DE DEPOT DE RECLAMATION",
  region: "AGNEBY TIASSA",
  departement: "TIASSALE",
  cel: " CESP TIASSALE",
  ordre: "ORDRE 1",

  nbredossiers : "12", 
  nbrepages : "12",
  date : "12/12/2024",

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
