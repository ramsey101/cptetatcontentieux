"use client";
import React from "react";

export default function Signaturebureaucel() {
  return (
    <div>
      <div className="overflow-x-auto font-bold text-xs mt-9">
        <table className="table-auto border-collapse border border-black w-full text-center">
          <thead>
            <tr>
              <th
                colSpan="3"
                className="border-black  px-4 py-2  text-xs font-bold"
              >
                Visa membres bureau de la CESP ou CEC (Nom, Prenom, Signatures)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2">
                President:................
              </td>
              <td className="border border-black px-4 py-2">
                Vice-Président:......................
              </td>
              <td className="border border-black px-4 py-2">
                Sécretaire : .................
              </td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-6"></td>
              <td className="border border-black px-4 py-6"></td>
              <td className="border border-black px-4 py-6"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
