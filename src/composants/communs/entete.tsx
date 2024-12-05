"use client";


export type enteteProps = {
  titre: string;
};

export default function Entete({ titre }: enteteProps) {
  return (
    <div className="entete">
      <p> {titre}</p>
    </div>
  );
}
