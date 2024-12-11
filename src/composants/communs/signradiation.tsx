'use client';

import React from 'react';


export default function Signatureradiation() {
    return (
        <>
        <div className='html2pdf__page-break'></div>
        <div className='text-xs'>
            <p>Signataire</p>

            <div>
                <span className="head">Le Bureau de la CEL</span>
            </div>
            <table className="cazsign">
                <tr>
                    <td className="tdbc">
                        <div className="colbc">
                            <div>
                                Le Président <br />
                                {"[Nom, Prénom(s) et signature]"}
                            </div>
                        </div>
                    </td>
                    <td className="tdbc">
                        <div className="colbc">
                            <div>
                                Le Vice-Président <br />
                                {"[Nom, Prénom(s) et signature]"}
                            </div>
                        </div>
                    </td>
                    <td className="tdbc">
                        <div className="colbc">
                            <div>
                                Le Sécretaire <br />
                                {"[Nom, Prénom(s) et signature]"}
                            </div>
                        </div>
                    </td>
                </tr>
            </table>


            <table className="cazsign">
                <span className="head">Nom , Prenom et Signatures membres Bureau de la CED ou CER (de rattachement de la CEL)</span>
                <tr>
                    <td className="tdbc">
                        <div className="colbc">
                            <div>
                                Le Président <br />
                                {"[Nom, Prénom(s) et signature]"}
                            </div>
                        </div>
                    </td>
                    <td className="tdbc">
                        <div className="colbc">
                            <div>
                                Le Vice-Président <br />
                                {"[Nom, Prénom(s) et signature]"}
                            </div>
                        </div>
                    </td>
                    <td className="tdbc">
                        <div className="colbc">
                            <div>
                                Le Sécretaire <br />
                                {"[Nom, Prénom(s) et signature]"}
                            </div>
                        </div>
                    </td>
                </tr>
            </table>


            <table className="cazsign">
                <span className="head">Le Commissaire Superviseur</span>
                <tr>
                    <td className="tdbc">
                        <div className="colbc">
                            <div>
                                Le Président <br />
                                {"[Nom, Prénom(s) et signature]"}
                            </div>
                        </div>
                    </td>
                    <td className="tdbc">
                        <div className="colbc">
                            <div>
                                Le Vice-Président <br />
                                {"[Nom, Prénom(s) et signature]"}
                            </div>
                        </div>
                    </td>
                    <td className="tdbc">
                        <div className="colbc">
                            <div>
                                Le Sécretaire <br />
                                {"[Nom, Prénom(s) et signature]"}
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        </>
    );
}