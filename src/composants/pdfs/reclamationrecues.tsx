"use client";
import Entete from "../communs/entete";
import Tabreclamation from "../communs/tabreclamation";
import Contenu from "../contenu";
import { DonneesReclamations } from "@/types/donnesform";

export default function Reclamationsrecues({
  mesdatas,
}: {
  mesdatas: DonneesReclamations;
}) {
  const content = () => {
    return (
      <>
      
          <Entete titre={mesdatas.titre} />
          <Tabreclamation mesdatas={mesdatas} />
       
      </>
    );
  };

  return <Contenu>{content()}</Contenu>;
}
