"use client";
import Image from "next/image";

export type enteteProps = {
  titre: string;
};

export default function Entete() {
  return (
    <div className="flex flex-row">
      <div>
        <Image src="/logocei.png" alt="ceilogo" className="mx-auto p-0 mb-5" width={200} height={100} />
      </div>
      <div>
        <p>Republique de COTE D IVOIRE</p>
        <p>Union - Discipline - Travail</p>
      </div>
    </div>
  );
}
