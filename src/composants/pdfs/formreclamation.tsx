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
        <Carto mesdatas={mesdatas} />
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
        <Personnevisee mesdatas={mesdatas} />
        <Argumentrec argumentrec={mesdatas.argument} />
        <Piecejointe piecesjointes={mesdatas.piecesjointes} />
        <Signrecep />
        <Decisioncel mesdatas={mesdatas} />
      </>
    );
  };

  return <Contenu>{content()}</Contenu>;
}
