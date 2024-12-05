"use client";
import { DonneesRecepisse } from "@/types/donneesrecepisse";
import React from "react";
import Contenu from "../contenu";
import Carto from "../communs/carto";
import Argumentrec from "../communs/argumentrec";
import Inforec from "../communs/inforec";
import Personnevisee from "../communs/personnevisee";
import Piecejointe from "../communs/piecejointe";
import Reclamant from "../communs/reclamant";
import Signrecep from "../communs/signrecep";
import Entete from "../communs/entete";

export default function Recepisse({
  mesdatas,
}: {
  mesdatas: DonneesRecepisse;
}) {
  const content = () => {
    return (
      <>
        <Entete titre={mesdatas.titre} />
        <Carto region={mesdatas.region} departement={mesdatas.departement} cel={mesdatas.cel} />
        <Inforec
          ordre={mesdatas.ordre}
          dateform={mesdatas.dateform}
          nomlv={mesdatas.nomlv}
          typerec={mesdatas.typerec}
        />
        <Reclamant
          nomprenom={mesdatas.nomprenom}
          datelieunaiss={mesdatas.datelieunaiss}
          nomprenomspere={mesdatas.nomprenomspere}
          nomprenomsmere={mesdatas.nomprenomsmere}
          numelecteur={mesdatas.numelecteur}
          refrecep={mesdatas.refrecep}
        />
                <Personnevisee 
          nomprenomspv={mesdatas.nomprenomspv}
          datelieunaisspv={mesdatas.datelieunaisspv}
          numelecteurpv={mesdatas.numelecteurpv}
          statutpv={mesdatas.statutpv} 
          nomprenomsmerepv={mesdatas.nomprenomsmerepv}
          nomprenomsperepv={mesdatas.nomprenomsperepv}
           />
        <Argumentrec argumentrec={mesdatas.argument} />
        <Piecejointe piecesjointes={mesdatas.piecesjointes} />
        <Signrecep />
      </>
    );
  };
  return <Contenu>{content()}</Contenu>;
}
