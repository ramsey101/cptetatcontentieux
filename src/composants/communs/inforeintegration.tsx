"use client";

export type InforeintegrationProps = {
  nomprenomspv?: string;
  datelieunaisspv?: string;
  nomprenomsperepv?: string;
  nomprenomsmerepv?: string;
  numelecteurpv?: string;
  statutpv?: string;
};

export default function Inforeintegration({
  nomprenomspv,
  datelieunaisspv,
  nomprenomsperepv,
  nomprenomsmerepv,
  numelecteurpv,
  statutpv,
}: InforeintegrationProps) {
  return (
    <div>
      <div className="text-center bg-slate-400">
        <p>DONNEES FIGURANT SUR LA LISTE PROVISOIRE DES REQUERANTS REJETES</p>
      </div>
      <div>N° Ordre : {nomprenomspv} </div>
      <div>Categorie: {nomprenomspv} </div>
      <div className="flex justify-between">
        <div>
        <div>Code de 12 chiffres du LV: {datelieunaisspv} </div>
        <div>Nom : {nomprenomsperepv}</div>
        <div>Date de naissance: {nomprenomsperepv}</div>
        </div>
        <div >
        <div>Libelle du LV: {datelieunaisspv} </div>
        <div>Prénom: {nomprenomsmerepv}</div>
        <div>Sexe: {nomprenomsperepv}</div>
        </div>
      </div>
      <div>Motif de rejet : {nomprenomsmerepv}</div>
    </div>
  );
}
