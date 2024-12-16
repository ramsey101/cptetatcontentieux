'use client';

import { lelogo2 } from "@/helpers/fonction";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { Button } from "antd";
import pdfMake from "pdfmake/build/pdfmake";

import { useState } from "react";
import {
    PrinterOutlined
} from '@ant-design/icons';


// interface Props {
//     dataDonnees?: DataTypeRecensement[] | DataType[];dataDonnees
// }

export const Boutonpdfadmin  = ()  => {
    const { isOpen, onOpenChange } = useDisclosure();
    const [pdfUrl, setPdfUrl] = useState(null);

    const generatePDF = () => {
          // Réinitialiser l'URL précédente si elle existe
          if (pdfUrl) {
            URL.revokeObjectURL(pdfUrl); // Libérer l'objet URL précédent
            setPdfUrl(null); // Réinitialiser l'URL pour éviter les conflits
        }
        const docDefinition = {
            info: {
                title: 'COLLECTE DES STATISTIQUES',
                author: 'Service Etudes et Developpement Informatique',
                subject: 'Operation de Revision de la Liste Electorale 2024',
                keywords: 'Dtic, Sedi',
            },
            pageOrientation: 'landscape' ,
            content: [
                [
                    {

                        columns: [
                            [lelogo2],
                            [
                                { text: "Révision de la liste électorale", style: "campname1", margin: [0, 60, 0, 0] },
                                { text: "Octobre - Novembre 2024", style: "campname", margin: [50, 0, 0, 0] },
                                { text: "----------------------------", margin: [70, 0, 0, 0] },
                                { text: "STATISTIQUE DES REQUÉRANTS HOMMES / FEMMES", style: "appname", fontSize: 10 },
                            ],
                            [
                                { text: '', margin: [0, 0, 0, 0] },
                            ],
                        ],
                        widths: ['80%', '10%', '10%'],
                    },
                ],

                [
                    { text: "\n", style: "normal" },
                    { text: "\n", style: "normal" },
                ],
                // Ligne avec la période en orange
                [
                    '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                    {
                        text: "Periode 2024",
                        colSpan: 15,
                        color: 'orange', // Utilisation correcte de 'color'
                        alignment: 'right',
                        fontSize: 9,
                        margin: [0, 0, 0, 10]
                    }
                ],

                {
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                        // paddingLeft: function(i, node) {
                        //     return (i === 0 || i === node.table.widths.length) ? 5 : 5;
                        // } , paddingRight: function(i, node) {
                        //     return (i === 0 || i === node.table.widths.length) ? 5 : 5;
                        // } , paddingTop: function(i, node) {
                        //     return (i === 0 || i === node.table.widths.length) ? 5 : 5;
                        // } , paddingBottom: function(i, node) {
                        //     return (i === 0 || i === node.table.widths.length) ? 5 : 5;
                        // } ,
                    },
                    table: {
                        headerRows: 4,
                        widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                        body: [
                            [
                                { text: 'INDICATEURS NATIONAUX DE SUIVI DE LA REVISION DE LA LISTE ELECTORALE', colSpan: 15, bold: true, alignment: 'center', margin: [0, 10, 0, 10] }, '', '', '', '', '', '', '', '', '', '', '', '', '', ''
                            ],
                            [

                                { text: 'COMMISSIONS ELECTORALES', colSpan: 2, alignment: 'center', fonSize: 5 }, '',
                                { text: 'CENTRE DE RECENSEMENT', colSpan: 2, alignment: 'center', fonSize: 10 }, '',
                                { text: 'REQUERANTS',fonSize: 20, colSpan: 11, bold: true, alignment: 'center' }, '', '', '', '', '', '', '', '', ''
                            ],
                            [
                                { text: 'TRANSMIS', rowSpan: 2, bold: true, alignment: 'center',fontSize:9 },
                                { text: '%', rowSpan: 2, bold: true, alignment: 'center',fontSize:9 },
                                { text: 'TRANSMIS', rowSpan: 2, bold: true, alignment: 'center',fontSize:9 },
                                { text: '%', rowSpan: 2, bold: true, alignment: 'center',fontSize:9 },
                                { text: 'CATEGORIE 1', colSpan: 4, bold: true, alignment: 'center',fontSize:9 }, '', '', '',
                                { text: 'CATEGORIE 2', colSpan: 4, bold: true, alignment: 'center',fontSize:9 }, '', '', '',
                                { text: 'TOTAUX', colSpan: 3, bold: true, fillColor: 'lightgray', alignment: 'center',fontSize:9 }, '', ''
                            ],
                            [
                                {},
                                {},
                                {},
                                {},
                                { text: 'HOMMES', bold: true, alignment: 'center',fontSize:9 },
                                { text: 'FEMMES', bold: true, alignment: 'center',fontSize:9 },
                                { text: 'TOTAL', bold: true, fillColor: 'lightgray', alignment: 'center',fontSize:9 },
                                { text: '%', bold: true, fillColor: 'lightgray', alignment: 'center',fontSize:9 },
                                { text: 'HOMMES', bold: true, alignment: 'center',fontSize:9},
                                { text: 'FEMMES', bold: true, alignment: 'center' ,fontSize:9},
                                { text: 'TOTAL', bold: true, fillColor: 'lightgray', alignment: 'center',fontSize:9 },
                                { text: '%', bold: true, fillColor: 'lightgray', alignment: 'center',fontSize:9 },
                                { text: 'HOMMES', bold: true, fillColor: 'lightgray', alignment: 'center',fontSize:9 },
                                { text: 'FEMMES', bold: true, fillColor: 'lightgray', alignment: 'center',fontSize:9 },
                                { text: 'TOTAL', bold: true, fillColor: 'lightgray', alignment: 'center',fontSize:9 },
                            ],
                            [
                                { text:  "0", bold: true, alignment: 'center',fontSize: 9 },
                                { text:  "0", bold: true, alignment: 'center',fontSize: 9 },
                                { text:  "0", bold: true, alignment: 'center',fontSize: 9 },
                                { text:   "0", bold: true, alignment: 'center',fontSize: 9 },
                                { text:   "0", bold: true, alignment: 'center' ,fontSize: 9},
                                { text:  "0", bold: true, alignment: 'center',fontSize: 9 },
                                { text:    "0", bold: true, alignment: 'center', fillColor: 'lightgray',fontSize: 9 },
                                { text:   "0", bold: true, alignment: 'center', fillColor: 'lightgray',fontSize: 9 },
                                { text:  "0", bold: true, alignment: 'center' ,fontSize: 9},
                                { text:   "0", bold: true, alignment: 'center' ,fontSize: 9},
                                { text:  '0', bold: true, alignment: 'center', fillColor: 'lightgray',fontSize: 9 },
                                { text: "0", bold: true, alignment: 'center', fillColor: 'lightgray',fontSize: 9 },
                                { text:  "0", bold: true, alignment: 'center', fillColor: 'lightgray',fontSize: 9 },
                                { text:  "0", bold: true, alignment: 'center', fillColor: 'lightgray',fontSize: 9 },
                                { text:  '0', bold: true, alignment: 'center', fillColor: 'lightgray',fontSize: 9 },
                            ]
                            // ... Ici, vous pouvez ajouter les données dynamiques de 'dataDonnees' si nécessaire
                        ]
                    }

                },
                {
                    text: 'Date d\'édition : ' + new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' à ' + new Date().toLocaleTimeString('fr-FR'), alignment: 'right', fontSize: 9, margin: [0, 10, 0, 0]
                }

            ],
            footer: {
                columns: [
                    { text: 'Document produit par Statistiques-RLE 2024', alignment: 'left', fontSize: 8, margin: [45, 0, 0, 0] },
                ]
            },

            styles: {
                campname1: { fontSize: 18, bold: true, align: "center", color: 'orange', width: '60%' },
                campname: { fontSize: 11, bold: true, align: "left", color: 'orange', width: '60%', marginRight: 10 },
                appname: { fontSize: 12, bold: true, align: "center"},
                subheader: { fontSize: 14, bold: true },
                normal: { fontSize: 14, bold: false, margin: 5 },
                dix: { fontSize: 11, bold: false, margin: 2 },
                periode: { fontSize: 10, bold: true, align: "right", color: 'orange', colSpan: 15 },
                libc: { colSpan: 2, bold: true, alignment: 'center', fonSize: 10 }
            },
        };
        const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.getBlob((blob) => {
            const url = URL.createObjectURL(blob);
            setPdfUrl(url);
            window.open(url); // Ouvrir le PDF dans un nouvel onglet
        });
    };

    const afficherModal = () => {
        // generatePDF(dataDonnees);
        generatePDF();
        
    }

    return (
        <>
            <Button onClick={() => afficherModal()} icon={<PrinterOutlined />}>IMPRIMER</Button>
            <Modal
                size='full'
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={true}
                scrollBehavior="inside"
                backdrop="blur"
            >
                <ModalContent className="max-h-[500px] overflow-y-auto bg-white">
                    {() => (
                        <>
                            <ModalBody>
                                {(
                                    <iframe
                                        title="PDF"
                                        src={pdfUrl}
                                        style={{ width: "50%", height: "500px" }}
                                    />
                                )}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};