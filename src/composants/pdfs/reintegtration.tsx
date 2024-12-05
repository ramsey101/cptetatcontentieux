"use client";

import { DonneesReintegration } from "@/types/donnesform";
import Contenu from "../contenu";
import Personnevisee from "../communs/personnevisee";
import Entetehoriz from "../communs/entetehoriz";
import Signrecep from "../communs/signrecep";


export default function Reintegration({mesdatas}:{mesdatas: DonneesReintegration} ) {
  const content = () => {
    return (
      <>
      <Entetehoriz titre={mesdatas.titre} />
      <Personnevisee mesdatas={mesdatas} />
      <Signrecep />
      </>
    );
  }
  

  return <Contenu>{content()}</Contenu>;
}
