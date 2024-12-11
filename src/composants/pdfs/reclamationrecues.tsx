"use client";
import Carto from "../communs/carto";
import Tabreclamation from "../communs/tabreclamation";
import { DonneesReclamations } from "@/types/donneesreclamation";
import Contenuh from "../contenuh";
import Entete from "../communs/entete";

export default function Reclamationsrecues({
  mesdatas,
}: {
  mesdatas: DonneesReclamations;
}) {
  const content = () => {
    return (
      <>
       <Entete />
        <div className="entete">
          <p> LISTE RECAPITULATIVE DES RECLAMATIONS RECUES</p>
          <br />
        </div>
        <Carto
          region={mesdatas.region}
          departement={mesdatas.departement}
          cel={mesdatas.cel}
        />
        <Tabreclamation
          objetrec={mesdatas.objetrec}
          date={mesdatas.date}
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

  return <Contenuh>{content()}</Contenuh>;
}
