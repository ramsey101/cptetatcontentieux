'use client';

import { DonneesRadiation } from "@/types/donneesradiation";
import React from "react";

export default function Enteteradiation ({mesdatas} : {mesdatas : DonneesRadiation}){
    return (
        <>
        <div>
            <ul>
                <li>CEL: {mesdatas.cel}</li>
                <li>Date: {mesdatas.daterad}</li>
                <li>Nombre de dossiers: {mesdatas.nbredossiers}</li>
                <li>Nombre de pages: {mesdatas.nbrepages}</li>
            </ul>
        </div>
        <br />
        </>
        
    )
}