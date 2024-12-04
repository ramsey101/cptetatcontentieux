'use client';
import { DonneesRecepisse } from '@/types/donnesform';
import React from 'react';
import Contenu from '../contenu';




export default function Recepisse({mesdatas}:{mesdatas: DonneesRecepisse}) {
   const content = () => {
    return (
      <div>
      <div>
        -----------------------------------------------------------------------------------------------------------
      </div>
      <div>
        <span className="head">
          RECEPISSE DE DEPOT DE RECLAMATION
        </span>
      </div>
      <div>CEL : {mesdatas.cel}</div>
      <div>Date de dépot : {mesdatas.dateform}</div>
      <div className="l4">
        <div className="container">(1)Type de réclamation:</div>
        <div className="container">
          <p>{mesdatas.typerec}</p>
        </div>
      </div>
      <div className="info1">
        <div>
          Nom et Prénom(s) du réclamant : {mesdatas.nomprenom}{" "}
        </div>
        <div>
          Nbre d epièce jointes à la reclamation.........à gerer.........{" "}
        </div>
      </div>
      <div className="sign1">
        <div>
          Equipe CEL de réception [Nom,Prénom(s) et signature]
        </div>
        <div>Reclamant [Nom,Prénom(s) et signature]</div>
      </div>
      <div className="tabsign1">
        <div>
          <table className="cazsign">
            <tr>
              <td className="tdcs">
                <div className="colcs">
                  <div>1</div>
                  <div></div>
                </div>
              </td>
              <td className="tdcs">
                <div className="colcs">
                  <div>2</div>
                  <div></div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  )
   }
  return <Contenu>{content()}</Contenu>;
}