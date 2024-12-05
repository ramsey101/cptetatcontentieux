"use client";

import { DonneesReintegrationomis } from "@/types/donneesreintegrationomis";
import Contenu from "../contenu";
import Personnevisee from "../communs/personnevisee";
import Signrecep from "../communs/signrecep";
import Entetehoriz from "../communs/entetehoriz";

export default function ReintegrationOmis({
  mesdatas,
}: {
  mesdatas: DonneesReintegrationomis;
}) {
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
  };
  return <Contenu>{content()}</Contenu>;
}
