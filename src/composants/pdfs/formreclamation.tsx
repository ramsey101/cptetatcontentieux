"use client";
import Reclamant from "../communs/reclamant";
import Carto from "../communs/carto";
import Inforec from "../communs/inforec";
import Personnevisee from "../communs/personnevisee";
import Argumentrec from "../communs/argumentrec";
import Piecejointe from "../communs/piecejointe";
import Signrecep from "../communs/signrecep";
import Decisioncel from "../communs/decisioncel";
import Contenu from "../contenu";
import { DonneesForm } from "@/types/donnesform";
import Entete from "../communs/entete";

export default function FormReclamation({
  mesdatas,
}: {
  mesdatas: DonneesForm;
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
        <Decisioncel 
          decisioncel={mesdatas.decisioncel} 
          argumentdec={mesdatas.argumentdec} 
        />
      </>
    );
  };

  return <Contenu>{content()}</Contenu>;
}
