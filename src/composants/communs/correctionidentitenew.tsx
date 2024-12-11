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
    <>
      <div>
        <div className="text-center bg-slate-400">
          Correction sur l identite 
        </div>
      </div>
      <div className="flex justify-between">
      <ul>
        <li>Nom  : {} </li>
        <li>Prenom  : {} </li>
        <li>Nom de jeune fille  : {} </li>
        <li>Sexe: {}</li>
        <li>Date de naissance : {}</li>
        <li>Lieu de naissance : {}</li>
      </ul>
      <ul>
        <li>Profession: {}</li>
        <li>Nom du père : {}</li>
        <li>Prénom du père : {}</li>
        <li>Nom de la mère : {}</li>
        <li>Prénom de la mère : {}</li>
      </ul>
      </div>
      <br />
    </>
  );
}
