"use client";
import Contenu from "../contenu";
import { DonneesReclamations } from "@/types/donnesform";



export default function Reclamationsrecues({ mesdatas }:{ mesdatas: DonneesReclamations;
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
