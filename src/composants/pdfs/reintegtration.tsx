"use client";

import { DonneesReintegration } from "@/types/donneesreintegration";
import Contenu from "../contenu";
import Personnevisee from "../communs/personnevisee";
import Entetehoriz from "../communs/entetehoriz";
import Signrecep from "../communs/signrecep";
import Persreintegre from "../communs/persreintegre";
import Inforeintegration from "../communs/inforeintegration";


export default function Reintegration({mesdatas}:{mesdatas: DonneesReintegration} ) {
  const content = () => {
    return (
      <>
      <Entetehoriz titre={mesdatas.titre} />
      <Inforeintegration 
      />
      <Signrecep />
      </>
    );
  }
  

  return <Contenu>{content()}</Contenu>;
}
