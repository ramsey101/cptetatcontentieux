"use client";

import { DonneesReintegrationomis } from "@/types/donnesform";
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
    <Personnevisee mesdatas={mesdatas} />
    <Signrecep />
    </>
    );
  };
  return <Contenu>{content()}</Contenu>;
}
