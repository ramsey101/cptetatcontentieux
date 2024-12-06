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

export default function Correctionidentitenew({}) {
  return (
    <div>
      <div>
        <span className="head">
          Correction sur l identite 
        </span>
      </div>
      <div className="info1">
        <div>Nom  : {} </div>
        <div>Prenom  : {} </div>
        <div>Nom de jeune fille  : {} </div>
        <div>Sexe: {}</div>
        <div>Date de naissance : {}</div>
        <div>Lieu de naissance : {}</div>
      </div>
      <div className="info1">
        <div>Profession: {}</div>
        <div>Nom du père : {}</div>
        <div>Prénom du père : {}</div>
        <div>Nom de la mère : {}</div>
        <div>Prénom de la mère : {}</div>
      </div>
      <br />
    </div>
  );
}
