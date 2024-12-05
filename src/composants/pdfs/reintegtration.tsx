"use client";

import { DonneesReintegration } from "@/types/donneesreintegration";
import Contenu from "../contenu";
import Personnevisee from "../communs/personnevisee";
import Entetehoriz from "../communs/entetehoriz";
import Signrecep from "../communs/signrecep";


export default function Reintegration({mesdatas}:{mesdatas: DonneesReintegration} ) {
  const content = () => {
    return (
      <>
      <Entetehoriz titre={mesdatas.titre} />
      <Personnevisee 
          nomprenomspv={mesdatas.nomprenomspv}
          datelieunaisspv={mesdatas.datelieunaisspv}
          numelecteurpv={mesdatas.numelecteurpv}
          statutpv={mesdatas.statutpv} 
          nomprenomsmerepv={mesdatas.nomprenomsmerepv}
          nomprenomsperepv={mesdatas.nomprenomsperepv}
           />
      <Signrecep />
      </>
    );
  }
  

  return <Contenu>{content()}</Contenu>;
}
