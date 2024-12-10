"use client";
type ArgumentrecProps = {
  argumentrec: string;
};

import React from "react";

export default function Argumentrec({ argumentrec }: ArgumentrecProps) {
  return (
    <div className="text-xs">
      <div className="font-bold">
        Argument de la réclamation : {argumentrec}
      </div>
    </div>
  );
}
