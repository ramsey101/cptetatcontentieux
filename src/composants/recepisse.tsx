'use client';
import React from 'react';

type RecepisseProps = {
            cel: string;
            dateform: string;
            nomprenom: string;
            typerec: string
    };


export default function Recepisse({cel,dateform,nomprenom, typerec}: RecepisseProps) {
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
        <div>CEL : {cel}</div>
        <div>Date de dépot : {dateform}</div>
        <div className="l4">
          <div className="container">(1)Type de réclamation:</div>
          <div className="container">
            <p>{typerec}</p>
          </div>
        </div>
        <div className="info1">
          <div>
            Nom et Prénom(s) du réclamant : {nomprenom}{" "}
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