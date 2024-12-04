"use client";
import Contenu from "./contenu";
import { DonneesRadiation } from "@/types/donnesform";



export default function Radiation({ mesdatas }:{ mesdatas: DonneesRadiation;
}) {
  const content = () => {
    return (
      <>
        <div className="etat">
          <div className="entete">
            <p> {mesdatas.titre}</p>
          </div>
          <div>
 
       
            <div>

            </div>
          </div>
        </div>
      </>
    );
  };

  return <Contenu>{content()}</Contenu>;
}
