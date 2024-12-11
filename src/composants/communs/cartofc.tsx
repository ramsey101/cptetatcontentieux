"use client";

export type CartofcProps = {
  region?: string;
  departement?: string;
  cel?: string;
  date?: string;
};

export default function Cartofc({ cel, date }: CartofcProps) {
  return (
    <div>
      <div className="text-left font-bold text-xs -mt-1">
        <div>CEL: {cel}</div>
        <div>DATE: {date}</div>
      </div>
      {/* <div className="text-blue-300">
        <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      </div> */}
      <br />
    </div>
  );
}
