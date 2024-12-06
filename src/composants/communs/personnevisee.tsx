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
    <div>
      <div>
        <span className="head">PERSONNE VISEE</span>
      </div>
      <div >
        <div>Nom Prenoms(s) : {nomprenomspv} </div>
        <div>Date et lieu de naissance : {datelieunaisspv} </div>
        <div>Nom Prenoms(s) Père: {nomprenomsperepv}</div>
        <div>Nom Prenoms(s) Mère : {nomprenomsmerepv}</div>
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
