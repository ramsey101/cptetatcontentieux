'use client'
import { Table } from "antd";
export type TabradiationProps = {
  numordre? : number;
  numelec? : string;
  daterad? : string;
  nomrad? : string;
  prenomrad? : string;
  datenaissrad? : string;
  motifrad? : string;
}

export default function Tabradiation ({ numordre, numelec, daterad, nomrad, prenomrad, datenaissrad, motifrad } : TabradiationProps) {

    const columns = [
        {
          title: "Numero d'ordre",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Numero d'electeur",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Nom",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Prenoms",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Date de naissance",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Motif de radiation",
          dataIndex: "address",
          key: "address",
        },
      ];
    
      const data = [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sydney No. 1 Lake Park",
        },
      ];
    return (

        <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }} // Optionnel : pagination
      />
        
    )
}