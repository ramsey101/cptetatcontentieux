"use client";
import Carto from "./carto";
import Inforec from "./inforec";
import Contenu from "./contenu";
import { DonneesCorrection } from "@/types/donnesform";
import Correctionidentite from "./correctionidentite";

type FormcorrectionProps = {
  mesdatas: DonneesCorrection;
};

export default function Correction({ mesdatas }: FormcorrectionProps) {
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

              <Correctionidentite
                nomprenomspv={mesdatas.nomprenomspv}
                datelieunaisspv={mesdatas.datelieunaisspv}
                nomprenomsperepv={mesdatas.nomprenomsperepv}
                nomprenomsmerepv={mesdatas.nomprenomsmerepv}
                numelecteurpv={mesdatas.numelecteurpv}
                statupv={mesdatas.statutpv}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return <Contenu>{content()}</Contenu>;
}
