'use client'
import { Table } from "antd";
import { DonneesRadiation } from "@/types/donnesform";

export default function Tabradiation ({mesdatas} : {mesdatas : DonneesRadiation}){

    const columns = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Address",
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