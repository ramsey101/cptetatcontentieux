"use client";

export type CartoProps = {
  region?: string;
  departement?: string;
  cel?: string;
};

export default function Carto({ region, departement, cel }: CartoProps) {
  return (
    <div>
      <div className="carto">
        <div>REGION: {region}</div>
        <div>DEPARTEMENT: {departement}</div>
      </div>
      <div className="text-xs">COMMISSION ELECTORALE LOCALE : {cel}</div>
      <br />
    </div>
  );
}
