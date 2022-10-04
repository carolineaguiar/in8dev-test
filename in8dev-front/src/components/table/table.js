import React from "react";
import { useTable } from "react-table";

function Table({ columns, data }) {
  const {
    getTableProps, // propriedades da tabela
    getTableBodyProps, // propriedades do corpo da tabela
    headerGroups, // os valores de agrupamento de tabela, caso sua tabela use
    rows, // linhas da tabela baseado nos dados e colunas
    prepareRow // Prepara a linha (Essa função deve ser chamada para cada linha)
  } = useTable({
    columns,
    data
  });
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;