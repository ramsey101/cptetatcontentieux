'use client';

import { DonneesPersonnevisee } from "@/types/donnesform";



export default function Personnevisee({mesdatas}:{mesdatas: DonneesPersonnevisee}) {
  return (
    <div>
                <div>
                  <span className="head">PERSONNE VISEE</span>
                </div>
                <div className="info1">
                  <div>Nom Prenoms(s) : {mesdatas.nomprenomspv} </div>
                  <div>
                    Date et lieu de naissance : {mesdatas.datelieunaisspv}{" "}
                  </div>
                </div>
                <div className="info1">
                  <div>Nom Prenoms(s) Père: {mesdatas.nomprenomsperepv}</div>
                  <div>Nom Prenoms(s) Mère : {mesdatas.nomprenomsmerepv}</div>
                </div>
                <div>
                  {" "}
                  N° électeur (identifiant unique): {mesdatas.numelecteurpv}
                </div>
                <div className="l5">
                  <div className="container">
                      <div className="text">Statut de la personne visee :</div>
                  </div>
                  <div className="container">
                   <p>{mesdatas.statutpv}</p>
                  </div>
                </div>
              </div>
  )
};