"use client";
import Reclamant from "./reclamant";
import Carto from "./carto";
import Inforec from "./inforec";
import Personnevisee from "./personnevisee";
import Argumentrec from "./argumentrec";
import Piecejointe from "./piecejointe";
import Signrecep from "./signrecep";
import Decisioncel from "./decisioncel";
import Recepisse from "./recepisse";
import Contenu from "./contenu";
import { DonneesForm } from "@/types/donnesform";

type FormReclamationProps = {
  mesdatas: DonneesForm;
};

export default function FormReclamation({ mesdatas }: FormReclamationProps) {
  const content = () => {
    return (
      <>
        <div className="etat">
          <div className="entete">
            <p> {mesdatas.titre}</p>
          </div>
          <div>
            <Carto
              region={mesdatas.region}
              departement={mesdatas.departement}
              cel={mesdatas.cel}
            />
            <Inforec
              ordre={mesdatas.ordre}
              dateform={mesdatas.dateform}
              nomlv={mesdatas.nomlv}
              typerec={mesdatas.typerec}
            />
            <div>
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
                nomprenomsperepv={mesdatas.nomprenomsperepv}
                nomprenomsmerepv={mesdatas.nomprenomsmerepv}
                numelecteurpv={mesdatas.numelecteurpv}
                statupv={mesdatas.statutpv}
              />
              <Argumentrec argumentrec={mesdatas.argument} />
              <Piecejointe 
                piecesjointes={mesdatas.piecesjointes}
              />
              <Signrecep />
              <Decisioncel 
                decisioncel={mesdatas.decisioncel}
                argumentdec={mesdatas.argumentdec}
              />
              <Recepisse
                cel={mesdatas.cel}
                dateform={mesdatas.dateform}
                nomprenom={mesdatas.nomprenom}
                typerec={mesdatas.typerec}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return <Contenu>{content()}</Contenu>;
}
