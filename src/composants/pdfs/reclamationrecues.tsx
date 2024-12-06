"use client";
import Carto from "../communs/carto";
import Tabreclamation from "../communs/tabreclamation";
import Contenu from "../contenu";
import { DonneesReclamations } from "@/types/donneesreclamation";

export default function Reclamationsrecues({
  mesdatas,
}: {
  mesdatas: DonneesReclamations;
}) {
  const content = () => {
    return (
      <>
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
