'use client';

import { DonneesCarto } from "@/types/donnesform";

export default function Carto({mesdatas}:{mesdatas: DonneesCarto}) {
    return (
            
            <div>
                <div className="l2">
                <div>REGION:{mesdatas.region}</div>
                <div>DEPARTEMENT:{mesdatas.departement}</div>
                </div>
                <div id="cel">COMMISSION ELECTORALE LOCALE : {mesdatas.cel}
                </div>
            </div>
);
}