"use client";

export type PersreintegreProps = {
  nomprenomspv: string;
  datelieunaisspv: string;
  nomprenomsperepv: string;
  nomprenomsmerepv: string;
  numelecteurpv: string;
  statutpv: string;
};

export default function Persreintegre({
  nomprenomspv,
  datelieunaisspv,
  nomprenomsperepv,
  nomprenomsmerepv,
  numelecteurpv,
  statutpv,
}: PersreintegreProps) {
  return (
    <div>
      
      <div className="info1">
        <div>N° Ordre : {nomprenomspv} </div>
        <div>Code de 12 chiffres du LV: {datelieunaisspv} </div>
        <div>Libelle du LV: {datelieunaisspv} </div>
      </div>
      <div className="info1">
        <div>Nom : {nomprenomsperepv}</div>
        <div>Prénom: {nomprenomsmerepv}</div>
      </div>
      <div className="info1">
        <div>Date de naissance: {nomprenomsperepv}</div>
        <div>Sexe: {nomprenomsperepv}</div>
        <div>Motif de rejet : {nomprenomsmerepv}</div>
      </div>
    </div>
  );
}
