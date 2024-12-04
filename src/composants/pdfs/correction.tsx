"use client";
import Carto from "../communs/carto";
import Inforec from "../communs/inforec";
import Contenu from "../contenu";
import { DonneesCorrection } from "@/types/donnesform";
import Correctionidentite from "../communs/correctionidentite";



export default function Correction({ mesdatas }:{ mesdatas: DonneesCorrection;
}) {
  const content = () => {
    return (
      <>
        <div className="etat">
          <div className="entete">
            <p> {mesdatas.titre}</p>
          </div>
          <div>
            <Carto
              mesdatas={mesdatas}
            />
            <Inforec
              ordre={mesdatas.ordre}
              dateform={mesdatas.dateform}
              nomlv={mesdatas.nomlv}
              typerec={mesdatas.typerec}
            />
            <div>

              <Correctionidentite
                mesdatas={mesdatas}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return <Contenu>{content()}</Contenu>;
}
