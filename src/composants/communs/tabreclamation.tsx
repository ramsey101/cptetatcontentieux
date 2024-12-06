"use client";
import { columnsReclamations } from "@/classes/colonnesreclamation";
import { Table } from "antd";

export type TabreclamationProps = {
  numord?: number;
  objetrec?: string;
  nomprenomsrec?: string;
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
  lieunaisspv,
}: TabreclamationProps) {


 
  return (
    <>
      <Table
        columns={columnsReclamations}
        // dataSource={dataFiltre}
        // scroll={{ x: 1500, y: 300 }}
        bordered
        size="small"
        // rowClassName={rowClassName}
      />
    </>
  );
}
