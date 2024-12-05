'use client';

export type CartoProps = { 
    region?: string;
    departement?: string;
    cel?: string
};

export default function Carto({region , departement , cel} : CartoProps) {
    return (
            
            <div>
                <div className="l2">
                <div>REGION:{region}</div>
                <div>DEPARTEMENT:{departement}</div>
                </div>
                <div id="cel">COMMISSION ELECTORALE LOCALE : {cel}
                </div>
            </div>
);
}