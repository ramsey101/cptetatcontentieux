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
    <>
      <div className="text-center bg-slate-400">
        <p>CHANGEMENT DU LIEU DE VOTE</p>
      </div>

      <div className="info1">
        <div>Code de 12 chiffres de l actuel LV: {} </div>
        <div>Code de 12 chiffres du nouveau LV: {}</div>
      </div>
      <div className="info1">
        <div>Libelle de l actuel LV: {}</div>
        <div>Libelle du nouveau LV: {}</div>
      </div>
      <br />
    </>
  );
}
