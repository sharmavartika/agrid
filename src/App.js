import React, { Fragment } from "react";
import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const columnDefs = [
    {
      headerName: "ID",
      field: "id"
    },
    {
      headerName: "First Name",
      field: "first_name",
      enableFilter: true,
      editable: true
    },
    {
      headerName: "Last Name",
      field: "last_name",
      editable: true
    },
    {
      headerName: "Email",
      field: "email",
      editable: true
    },
    {
      headerName: "Gender",
      field: "gender"
    },
    {
      headerName: "City",
      field: "city"
    }
  ];
  const rowData = [
    {
      id: 1,
      first_name: "Jeanette",
      last_name: "Penddreth",
      email: "jpenddreth0@census.gov",
      gender: "Female",
      city: "New York"
    },
    {
      id: 2,
      first_name: "Giavani",
      last_name: "Frediani",
      email: "gfrediani1@senate.gov",
      gender: "Male",
      city: "Ohio"
    },
    {
      id: 3,
      first_name: "Noell",
      last_name: "Bea",
      email: "nbea2@imageshack.us",
      gender: "Female",
      city: "New York"
    },
    {
      id: 4,
      first_name: "Willard",
      last_name: "Valek",
      email: "wvalek3@vk.com",
      gender: "Male",
      city: "Los Angeles"
    },
    {
      id: 5,
      first_name: "David",
      last_name: "Geller",
      email: "david@vk.com",
      gender: "Male",
      city: "New York"
    },
    {
      id: 6,
      first_name: "Rachel",
      last_name: "Green",
      email: "rachel@ra.com",
      gender: "Female",
      city: "New York"
    },
    {
      id: 7,
      first_name: "Willard",
      last_name: "Valek",
      email: "wvalek3@vk.com",
      gender: "Male",
      city: "Brooklyn"
    },
    {
      id: 8,
      first_name: "Chandler",
      last_name: "Bing",
      email: "bing@bing.com",
      gender: "Male",
      city: "Chicago",
      sortable: true
    },
    {
      id: 9,
      first_name: "Richard",
      last_name: "Valek",
      email: "richard@rich.com",
      gender: "Male",
      city: "Florida",
      resizable: true
    },
    {
      id: 10,
      first_name: "Monika",
      last_name: "Geller",
      email: "monika@vk.com",
      gender: "Female",
      city: "Ohio"
    }
  ];
  return (
    <Fragment>
      <div class="container">
        <h2 class="text-center p-3">Ag-Grid Table</h2>
    <div
      id="myGrid"
      style={{
        height: "100%",
        width: "100%",
        
      }}
      className="ag-theme-balham"
    >
      <AgGridReact
        containerStyle={{ height: "300px" }}
        enableFilter={true}
        columnDefs={columnDefs}
        rowData={rowData}
      ></AgGridReact>
    </div></div></Fragment>
  );
};

export default App;
