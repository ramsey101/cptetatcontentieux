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
    <div>
      <div className="inforeclamation">
        <div>N° ordre: {ordre} </div>
        <div>Date: {date} </div>
        <div>Lieu de vote: {nomlv} </div>
      </div>
      <div className="l4">
        <div>(1)Type de réclamation: </div>
        <div>
          <p>{typerec}</p>
        </div>
      </div>
      <br />
    </div>
  );
}
