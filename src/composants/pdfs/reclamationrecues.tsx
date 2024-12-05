"use client";
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
