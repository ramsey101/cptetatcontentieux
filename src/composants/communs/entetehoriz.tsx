"use client";

export type entetehorizProps = {
  titre: string;
};

export default function Entetehoriz({ titre }: entetehorizProps) {
  return (
    <div className="entete">
      <p> {titre}</p>
    </div>
  );
}
