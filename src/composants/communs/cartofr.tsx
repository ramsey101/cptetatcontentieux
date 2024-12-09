"use client";

export type CartofrProps = {
  region?: string;
  departement?: string;
  cel?: string;
};

export default function Cartofr({ region, departement, cel }: CartofrProps) {
  return (
    <div>
      <div className="cartofr text-xs -mt-1">
        <div>REGION: {region}</div>
        <div>DEPARTEMENT: {departement}</div>
      </div>
      <div className="cathofr text-xs -mt-1">COMMISSION ELECTORALE LOCALE : {cel}</div>
      <br />
    </div>
  );
}
