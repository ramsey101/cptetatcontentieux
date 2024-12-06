"use client";

export type CorrectionidentiteProps = {
  numelecteurpv?: string;
  numformulaire?: string;
  nomcorrection?: string;
  prenomcorrection?: string;
  datenaisscorrection?: string;
  lieunaisscorrection?: string;
  typecorrection: string;
  codeactuelv?: string;
  codenouveaulv?: string;
  nomactuelv?: string;
  nomnouveaulv?: string;
  sexcorrection?: string;
  professioncorrection?: string;
  nomperecorrection?: string;
  prenomperecorrection?: string;
  nommerecorrection?: string;
  prenommerecorrection?: string;
};

export default function Changementlv({}) {
  return (
    <div>
      <div>
        <span className="head">
          Correction sur l identite de la personne visee
        </span>
      </div>
      <div className="info1">
        <div>Nom Prenoms(s) : {} </div>
        <div>Date et lieu de naissance : {}</div>
      </div>
      <div className="info1">
        <div>Nom Prenoms(s) Père: {}</div>
        <div>Nom Prenoms(s) Mère : {}</div>
      </div>
      <div> N° électeur (identifiant unique): {}</div>
      <div className="l5">
        <div className="container">
          <div className="text">Statut de la personne visee :</div>
        </div>
        <div className="container">
          <p>{}</p>
        </div>
      </div>
    </div>
  );
}
