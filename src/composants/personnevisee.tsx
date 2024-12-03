'use client';

type PersonneviseeProps = {
    nomprenomspv: string;
    datelieunaisspv: string;
    nomprenomsperepv: string;
    nomprenomsmerepv: string;
    numelecteurpv: string;
    statupv: string;
};

export default function Personnevisee({ nomprenomspv, datelieunaisspv, nomprenomsperepv, nomprenomsmerepv, numelecteurpv, statupv }: PersonneviseeProps) {
  return (
    <div>
                <div>
                  <span className="head">PERSONNE VISEE</span>
                </div>
                <div className="info1">
                  <div>Nom Prenoms(s) : {nomprenomspv} </div>
                  <div>
                    Date et lieu de naissance : {datelieunaisspv}{" "}
                  </div>
                </div>
                <div className="info1">
                  <div>Nom Prenoms(s) Père: {nomprenomsperepv}</div>
                  <div>Nom Prenoms(s) Mère : {nomprenomsmerepv}</div>
                </div>
                <div>
                  {" "}
                  N° électeur (identifiant unique): {numelecteurpv}
                </div>
                <div className="l5">
                  <div className="container">
                      <div className="text">Statut de la personne visee :</div>
                  </div>
                  <div className="container">
                   <p>{statupv}</p>
                  </div>
                </div>
              </div>
  )
};