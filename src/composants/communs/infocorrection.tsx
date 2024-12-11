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
  numelecteurpv,
}: InforeclamationProps) {
  return (
    <>
    <div className="text-center bg-slate-400">
        <p>DONNEES FIGURANT SUR LA LISTE PROVISOIRE AFFICHEE</p>
      </div>
    <div className="flex justify-between ">
      <div className="">
        <div>N° ordre: {ordre}</div>
        <div>N° electeur: {numelecteurpv}</div>
      </div>
      <div className="">
        <div>Nom : </div>
        <div>Prenom: </div>
      </div>
      <div className="">
        <div>Date de naissance: </div>
        <div>Lieu de naissance: </div>
      </div>
    </div><br />
    </>
  );
}
