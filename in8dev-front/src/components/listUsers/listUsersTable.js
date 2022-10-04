import React, { useEffect, useMemo, useState } from "react"
import Axios from "axios";
import Table from "../table/table";

export default function ListUsersTable(){
    const [ listUsers, setListUsers ] = useState();

    console.log(listUsers)
    useEffect(() => {
        Axios.get("http://localhost:3001/listUsers").then((response) => {
            setListUsers(response.data)
        })
    },[])


    {typeof listUsers !== "undefined" && listUsers.map((value) => {
        console.log(value)
    })}

    const columns = useMemo(
        () => [
          {
            Header: "LISTA DE CADASTRO",

            columns: [
              {
                Header: "",
                accessor: "id"
              },
              {
                Header: "NOME",
                accessor: "name"
              },
              {
                Header: "E-MAIL",
                accessor: "email"
              },
              {
                Header: "NASCIMENTO",
                accessor: "birthDate"
              },
              {
                Header: "TELEFONE",
                accessor: "phone"
              }
            ]
          }
        ],
        []
      );
        console.log(columns);
        
        <div className="table">
          <Table columns={columns} data={listUsers} />
        </div>
}

