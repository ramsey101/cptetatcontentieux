"use client";

type ReclamantProps = {
  nomprenom: string;
  datelieunaiss: string;
  nomprenomspere: string;
  nomprenomsmere: string;
  numelecteur: string;
  refrecep: string;
};

export default function Reclamant({
  nomprenom,
  datelieunaiss,
  nomprenomspere,
  nomprenomsmere,
  numelecteur,
  refrecep,
}: ReclamantProps) {
  return (
    <div>
      <div>
        <span className="head">RECLAMANT</span>
      </div>
      <div>
        <div className="info1">
          <div>Nom Prenoms(s) : {nomprenom}</div>
          <div>Date et lieu de naissance : {datelieunaiss}</div>
        </div>
        <div className="info1">
          <div> Nom Prenoms(s) Père : {nomprenomspere}</div>
          <div> Nom Prenoms(s) Mère: {nomprenomsmere}</div>
        </div>
        <div>N° électeur (identifiant unique): {numelecteur}</div>
        <div>
          {" "}
          Réf. Récépissé de recensement (date de recensement; code et libellé du
          centre de recensement)* : {refrecep}{" "}
        </div>
      </div>
    </div>
  );
}
