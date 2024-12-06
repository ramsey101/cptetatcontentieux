"use client";
import { DonneesReclamations } from "@/types/donneesreclamation";
import Tabreclamation from "../communs/tabreclamation";
import Contenu from "../contenu";




export default function Reclamationsrecuesday({ mesdatas }:{ mesdatas: DonneesReclamations;
}) {
  const content = () => {
    return (
      <>
         <div className="entete">
          <p> LISTE JOURNALIERE DES RECLAMATIONS RECUES</p>
          <br />
        </div>
        <Tabreclamation 
          objetrec={mesdatas.objetrec}
          nomprenomsrec={mesdatas.nomprenomsrec}
          datenaissrec={mesdatas.datenaissrec}
          lieunaissrec={mesdatas.lieunaissrec}
          nomprenomspv={mesdatas.nomprenomspv}
          datenaisspv={mesdatas.datenaisspv}
          lieunaisspv={mesdatas.lieunaisspv}
           />
      </>
    );
  };

  return <Contenu>{content()}</Contenu>;
}
