"use client";

import React from "react";

export type DecisionProps = {
  decisioncel?: string;
  argumentdec?: string;
};

export default function Decisioncel({
  decisioncel,
  argumentdec,
}: DecisionProps) {
  return (
    <div className="text-xs">
      <div className="text-center bg-slate-400">
        Proposition de DECISION de la CEL
      </div>
      <div className="l4">
        <div >
          <div className="text-xs">Statut de la decision de la CEL : {decisioncel}</div>
        </div>
      </div>
      <div className="text-xs">
        <div className="font-bold">Arguments fondant la décision </div>
        <div>{argumentdec}</div>
      </div>
      <br />
      <div>
        <span className="head">Le Bureau de la CEL</span>
      </div>
      <table className="cazsign">
        <tr>
          <td className="tdbc">
            <div className="colbc">
              <div>
                Le Président <br />
                {"[Nom, Prénom(s) et signature]"}
              </div>
            </div>
          </td>
          <td className="tdbc">
            <div className="colbc">
              <div>
                Le Vice-Président <br />
                {"[Nom, Prénom(s) et signature]"}
              </div>
            </div>
          </td>
          <td className="tdbc">
            <div className="colbc">
              <div>
                Le Sécretaire <br />
                {"[Nom, Prénom(s) et signature]"}
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
