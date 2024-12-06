"use client";
type InforeclamationProps = {
  ordre: string;
  date?: string;
  numelecteurpv?: string;
  nomlv: string;
  typerec?: string;
};

export default function Infocorrection({
  ordre,
  date,
  numelecteurpv,
}: InforeclamationProps) {
  return (
    <div>
      <div className="l3">
        <div>N° ordre: {ordre}</div>
        <div>N° electeur: {numelecteurpv}</div>
        <div>Date: {date}</div>
        <div>Nom : </div>
        <div>Prenom: </div>
        <div>Date de naissance: </div>
        <div>Lieu de naissance: </div>
      </div>
      <br />
    </div>
  );
}
