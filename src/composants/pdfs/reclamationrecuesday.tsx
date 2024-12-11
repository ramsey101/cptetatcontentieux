"use client";
import { DonneesReclamations } from "@/types/donneesreclamation";
import Tabreclamation from "../communs/tabreclamation";
import Contenuh from "../contenuh";
import Carto from "../communs/carto";
import Entete from "../communs/entete";




export default function Reclamationsrecuesday({ mesdatas }:{ mesdatas: DonneesReclamations;
}) {
  const content = () => {
    return (
      <>
       <Entete />
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
          date = {mesdatas.date}
          lieunaissrec={mesdatas.lieunaissrec}
          nomprenomspv={mesdatas.nomprenomspv}
          datenaisspv={mesdatas.datenaisspv}
          lieunaisspv={mesdatas.lieunaisspv}
          />
      </>
    );
  };

  return <Contenuh>{content()}</Contenuh>;
}
