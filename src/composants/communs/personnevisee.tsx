"use client";

export type PersonneviseeProps = {
  nomprenomspv: string;
  datelieunaisspv: string;
  nomprenomsperepv: string;
  nomprenomsmerepv: string;
  numelecteurpv: string;
  statutpv: string;
};

export default function Personnevisee({
  nomprenomspv,
  datelieunaisspv,
  nomprenomsperepv,
  nomprenomsmerepv,
  numelecteurpv,
  statutpv,
}: PersonneviseeProps) {
  return (
    <div className="text-xs">
      <div className="text-center bg-slate-400">
        <span >PERSONNE VISEE</span>
      </div>
      <div >
        <div className="l2">
          <div>Nom Prenoms(s) : {nomprenomspv} </div>
          <div>Date et lieu de naissance : {datelieunaisspv} </div>
        </div>
        <div className="l2">
          <div>Nom Prenoms(s) Père: {nomprenomsperepv}</div>
          <div>Nom Prenoms(s) Mère : {nomprenomsmerepv}</div>
        </div>
      <div> N° électeur (identifiant unique): {numelecteurpv}</div>
      <div className="l5">
        <div >
          <div className="text">Statut de la personne visee :</div>
        </div>
        <div >
          <p>{statutpv}</p>
        </div>
      </div>
      </div>
      <br />
    </div>
  );
}
