import { DonneesReclamations } from "@/types/donneesreclamation";
import { TableColumnsType } from "antd";

export const columnsReclamations: TableColumnsType<DonneesReclamations> = [

   
    {
        title: (
            <div className="h-full bg-orange-500 text-black  text-center py-2 text-sm font-bold" style={{ fontSize: '0.8rem' }}>
               RECLAMATION
            </div>
        ),
        children: [
            {
                title: <div className="text-xs" style={{ fontSize: '0.8rem' }}>N° ORDRE</div>,   // Titre de la colonne 1
                dataIndex: 'cat1Homme', // Utilise la clé 'address' pour afficher les données
                key: 'cat1Homme',
                width: 100,          // Largeur de 100px pour cette colonne
                align: 'center',
                className: ''
            },
            {
                title: <div className="text-xs" style={{ fontSize: '0.8rem' }}>OBJET (1)</div>,
                dataIndex: 'cat1Femme',
                key: 'cat1Femme',
                width: 100,
                align: 'center',
                className: ''
            },
        ]
    },
    {
        title: (
            <div className="h-full bg-green-700 text-black  text-center py-2 text-sm font-bold">
               RECLAMANT
            </div>
        ),
        children: [
            {
                title: <div className="text-xs" style={{ fontSize: '0.8rem' }}>NOM ET PRENOM(S)</div>,   // Titre de la colonne 1
                dataIndex: 'cat2Homme', // Utilise la clé 'address' pour afficher les données
                key: 'cat2Homme',
                width: 100,          // Largeur de 100px pour cette colonne
                align: 'center'
            },
            {
                title: <div className="text-xs" style={{ fontSize: '0.8rem' }}>DATE ET LIEU DE NAISSANCE</div>,
                dataIndex: 'cat2Femme',
                key: 'cat2Femme',
                width: 100,
                align: 'center'
            },
        ]
    },
    {
        title: <div className="h-full  text-black  text-center py-2 text-sm font-bold" style={{ fontSize: '0.8rem' }}>
           PERSONNE MISE EN CAUSE
        </div>,
        children: [
            {
                title: <div className="text-xs" style={{ fontSize: '0.8rem' }}>NOM ET PRENOM(S)</div>,   // Titre de la colonne 1
                dataIndex: 'totalHomme', // Utilise la clé 'address' pour afficher les données
                key: '1',
                width: 100,
                align: 'center'      // Largeur de 100px pour cette colonne
            },
            {
                title: <div className="text-xs" style={{ fontSize: '0.8rem' }}>DATE ET LIEU DE NAISSANCE</div>,
                dataIndex: 'totalFemme',
                key: '2',
                width: 100,
                align: 'center'
            },
            {
                title: <div className="text-xs" style={{ fontSize: '0.8rem' }}>N° ELECTEUR</div>,
                dataIndex: 'total',
                key: '2',
                width: 100,
                align: 'center',
               
            },
        ]
    },

];