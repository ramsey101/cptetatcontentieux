"use client";
type InforeclamationProps = {
  ordre: string;
  date?: string;
  numelecteurpv?: string;

  nomlv: string;
  typerec?: string;
};

export default function Inforeclamation({
  ordre,
  date,
  nomlv,
  typerec,
}: InforeclamationProps) {
  return (
    <div className="text-xs">
      <div className="text-xs inforeclamation">
        <div>N° ordre: {ordre} </div>
        <div>Date: {date} </div>
        <div>Lieu de vote: {nomlv} </div>
      </div>
      <div className="text-xs l4">
        <div className="text-xs">(1)Type de réclamation: <p>{typerec}</p> </div>
      </div>
      <br />
    </div>
  );
}
