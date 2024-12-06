"use client";
import { DonneesReclamations } from "@/types/donneesreclamation";
import Tabreclamation from "../communs/tabreclamation";
import Contenu from "../contenu";
import Carto from "../communs/carto";




export default function Reclamationsrecuesday({ mesdatas }:{ mesdatas: DonneesReclamations;
}) {
  const content = () => {
    return (
      <>
         <div className="entete">
          <p> LISTE JOURNALIERE DES RECLAMATIONS RECUES</p>
          <br />
        </div>
        <Carto 
          region={mesdatas.region}
          departement={mesdatas.departement}
          cel={mesdatas.cel}
          />
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
