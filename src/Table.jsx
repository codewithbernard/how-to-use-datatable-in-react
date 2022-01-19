import { useEffect, useRef } from "react";
import dataSet from "./dataSet";
import $ from "jquery";
import DataTables from "datatables.net";

// Import necessary styles
import "datatables.net-dt/css/jquery.dataTables.min.css";

// Initialize jquery and Datatable
const DataTable = DataTables(window, $);

const Table = () => {
  const tableRef = useRef();

  // When component loads, fill table with data
  useEffect(() => {
    new DataTable(tableRef.current, {
      data: dataSet,
      columns: [
        { title: "Name" },
        { title: "Occupation" },
        { title: "City" },
        { title: "ZIP" },
        { title: "Birthday" },
        { title: "Salary" },
      ],
    });
  }, []);

  // Create a reference for the table
  return <table ref={tableRef}></table>;
};

export default Table;
