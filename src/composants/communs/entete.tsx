"use client";
import Image from "next/image";

export type enteteProps = {
  titre: string;
};

export default function Entete() {
  return (
    <div className="flex justify-between">
      <div>
        <Image src="/logocei3.png" alt="ceilogo"  width={150} height={50} />
      </div>
      <div className="">
        <p>Republique de COTE D IVOIRE</p>
        <p>Union - Discipline - Travail</p>
      </div>
    </div>
  );
}
