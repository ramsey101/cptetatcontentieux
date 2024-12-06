"use client";
import React from "react";

export default function Signrecep() {
  return (
    <div>
      <div className="sign mb-2">
        <div>Signature du Réclamant</div>
        <div>Equipe CEL de réception (Nom - Prénoms)</div>
      </div>
      <div className="tabsign">
        <div></div>
        <div>
          <table className="cazsign">
            <tr>
              <td className="tdcs">
                <div className="colcs">
                  <div>1</div>
                  <div></div>
                </div>
              </td>
              <td className="tdcs">
                <div className="colcs">
                  <div>2</div>
                  <div></div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <br />
    </div>
  );
}
