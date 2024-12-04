"use client";

import { DonneesReintegrationomis } from "@/types/donnesform";
import Contenu from "../contenu";


export default function ReintegrationOmis({mesdatas}:{mesdatas: DonneesReintegrationomis} ) {
  const content = () => {
    return (
      <div>
        <div>
          <span className="head">
          réintégration d electeur rejete par erreur de la lep (omis)</span>
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
            <p>{mesdatas.statutpv}</p>
          </div>
        </div>
      </div>
    );
  }
  return <Contenu>{content()}</Contenu>;
}
