"use client";
import Image from "next/image";

export type enteteProps = {
  titre: string;
};

export default function Entete() {
  return (
    <div className="flex justify-between items-center px-4 mt-0  top-0 mtop">
      <div>
        <Image src="/logocei3.png" alt="ceilogo" width={100} height={40} />
      </div>
      <div className="text-right">
        <p className="font-bold">Republique de COTE D IVOIRE</p>
        <p className="italic -mt-1">Union - Discipline - Travail</p>
      </div>
    </div>
  );
}
