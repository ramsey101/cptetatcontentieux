'use client';
import { DonneesDecisioncel } from '@/types/donnesform';
import React from 'react';


export default function Decisioncel( {mesdatas}: {mesdatas: DonneesDecisioncel}) {
    return (
        <div>
                <table>
                    <th className="head">Proposition de DECISION de la CEL</th>
                </table>
                <div className="l4">
                    <div className="container">
                    <div className="text">Statut de la decision de la CEL</div>
                    </div>
                    <div className="container">
                        <p>{mesdatas.decisioncel}</p>
                    </div>
                </div>
                <table className="argrec">
                    <thead className="arg">Arguments fondant la décision</thead>
                  <p>{mesdatas.argumentdec}</p>
                </table>
                <br />
               
                <br />
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