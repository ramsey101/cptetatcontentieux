'use client';
type ArgumentrecProps = {
    argumentrec: string
}

import React from 'react'

export default function Argumentrec({argumentrec}: ArgumentrecProps) {
    return (
         <table className="argrec">
        <thead className="arg">Argument de la réclamation</thead>
        <p>{argumentrec}</p>
      </table>
    )
}