"use client";

import { DonneesReintegration } from "@/types/donnesform";


export default function Reintegration({mesdatas}:{mesdatas: DonneesReintegration} ) {
  return (
    <div>
      <div>
        <span className="head">
        fiche individuelle inscription réintégration d électeur rejeté par erreur de la lep (motif de rejet avéré erroné)
        </span>
      </div>
      <div className="info1">
        <div>Nom Prenoms(s) : {mesdatas.nomprenomspv} </div>
        <div>Date et lieu de naissance : {mesdatas.datelieunaisspv} </div>
      </div>
      <div className="info1">
        <div>Nom Prenoms(s) Père: {mesdatas.nomprenomsperepv}</div>
        <div>Nom Prenoms(s) Mère : {mesdatas.nomprenomsmerepv}</div>
      </div>
      <div> N° électeur (identifiant unique): {mesdatas.numelecteurpv}</div>
      <div className="l5">
        <div className="container">
          <div className="text">Statut de la personne visee :</div>
        </div>
        <div className="container">
          <p>{mesdatas.statupv}</p>
        </div>
      </div>
    </div>
  );
}
