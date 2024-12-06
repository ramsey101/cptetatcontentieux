"use client";
import Carto from "../communs/carto";
import Entete from "../communs/entete";
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
      
          <Entete titre={mesdatas.titre} />
          <Carto region={mesdatas.region} departement={mesdatas.departement} cel={mesdatas.cel} />
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
