"use client";
import { columnsReclamations } from "@/classes/colonnesreclamation";
import { Table } from "antd";

export type TabreclamationProps = {
  numord?: number;
  objetrec?: string;
  nomprenomsrec?: string;
  date: string;
  datenaissrec?: string;
  lieunaissrec?: string;
  nomprenomspv?: string;
  datenaisspv?: string;
  lieunaisspv?: string;
  numelec?: string;
};

export default function Tabreclamation({
  numord,
  objetrec,
  nomprenomsrec,
  datenaissrec,
  lieunaissrec,
  nomprenomspv,
  datenaisspv,
  date,
  lieunaisspv,
}: TabreclamationProps) {
  return (
    <>
      <div className="flex text-right">
        <div>Date d affichage : {date}</div>
        <div></div>
      </div>
      <Table 
        columns={columnsReclamations}
        // dataSource={dataFiltre}
        // scroll={{ x: 1500, y: 300 }}
        bordered
        size="small"
        // rowClassName={rowClassName}
      />
      <div className="flex text-right">
        <div>Signature et Cachet du Président de la CEL :</div>
        <div></div>
        <br />
        <br />
        <br />
      </div>
      <div className="text-xs mt-10">
        <p>
          (1)Objet indiqué par le requérant :
          <span className="font-bold">"inscription</span>
          (requerant dûment recensé mais{" "}
          <span className="font-bold">
            omis ou figurant, par erreur, sur une liste de rejet:
          </span>
        </p>
        à reintegrer à la LEP)" ou{" "}
        <span className="font-bold">
          "radiation pour déchéance de droits civiques, politiques"
        </span>
        ou <span className="font-bold">"radiation pour décès"</span> ou{" "}
        <span className="font-bold">défaut de nationalité ivoirienne </span>
        ou <span className="font-bold">"age-mineur" </span> ou{" "}
        <span className="font-bold">
          {" "}
          "rectification de données personnelles{" "}
        </span>
        ou <span className="font-bold">autres (à preciser)"</span>
      </div>
      <div className="text-center bg-red-950 text-xs">
        <span >***</span>
      </div>
    </>
  );
}
