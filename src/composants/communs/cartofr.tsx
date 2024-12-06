"use client";

export type CartofrProps = {
  region?: string;
  departement?: string;
  cel?: string;
};

export default function Cartofr({ region, departement, cel }: CartofrProps) {
  return (
    <div>
      <div className="cartofr">
        <div>REGION: {region}</div>
        <div>DEPARTEMENT: {departement}</div>
      </div>
      <div className="">COMMISSION ELECTORALE LOCALE : {cel}</div>
      <br />
    </div>
  );
}
