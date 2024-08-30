import React from "react";
import { useTable, useSortBy } from "react-table";
import "../styles/Table.css";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  return (
    <table
      {...getTableProps()}
    //   style={{ border: "solid 1px blue", width: "100%" }}
      className="table"
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                // style={{
                //   borderBottom: "solid 3px red",
                //   background: "aliceblue",
                //   color: "black",
                //   fontWeight: "bold",
                //   cursor: "pointer",
                // }}
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    // style={{
                    //   padding: "10px",
                    //   border: "solid 1px gray",
                    //   background: "papayawhip",
                    // }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
