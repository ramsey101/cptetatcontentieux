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
          date={mesdatas.date}
          nomlv={mesdatas.nomlv}
          typerec={mesdatas.typerec}
        />
        <Reclamant
          nomprenom={mesdatas.nomprenomrec}
          datelieunaiss={mesdatas.datelieunaissrec}
          nomprenomspere={mesdatas.nomprenomspererec}
          nomprenomsmere={mesdatas.nomprenomsmererec}
          numelecteur={mesdatas.numelecteurrec}
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
        <Argumentrec argumentrec={mesdatas.argumentrec} />
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
