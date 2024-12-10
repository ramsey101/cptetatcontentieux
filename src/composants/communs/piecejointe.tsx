"use client";
import React from "react";
type PiecejointeProps = {
  piecesjointes: string[];
};
export default function Piecejointe({ piecesjointes }: PiecejointeProps) {
  return (
    <>
      <table className="text-xs tablepj">
        <thead>
          <tr>
            <th>Pièce Jointes</th>
          </tr>
        </thead>
        <tbody>
          {piecesjointes.map((element, index) =>
            index % 2 === 0 ? (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1} - {element}
                </td>
                {piecesjointes[index + 1] && (
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 2} - {piecesjointes[index + 1]}
                  </td>
                )}
              </tr>
            ) : null
          )}
        </tbody>
      </table>
      <br />
    </>
  );
}
