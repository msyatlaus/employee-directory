import React from "react";
import "../index.css";
import employees from "./employees.json";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

let order = 'desc';

class Results extends React.Component {

  handleBtnClick = () => {
    if (order === 'desc') {
      this.refs.table.handleSort('asc', 'name');
      order = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'name');
      order = 'desc';
    }
  }

  render() {
    return (
  <div>
    <BootstrapTable 
      ref='table' 
      data={ employees } 
      multiColumnSort={ 2 }
      search={ true }
    >
        <TableHeaderColumn 
          dataField='first_name' 
          isKey={ true } 
          dataSort={ true } >
          First Name
        </TableHeaderColumn>

        <TableHeaderColumn 
          dataField='last_name' 
          dataSort={ true }>
          Last Name
        </TableHeaderColumn>
       
        <TableHeaderColumn 
          dataField='job_title' 
          dataSort={ true }>
          Job Title
        </TableHeaderColumn>

        <TableHeaderColumn 
          dataField='email' 
          dataSort={ true }>
          Email
        </TableHeaderColumn>
    
    </BootstrapTable>
  </div>
  );
};
}

export default Results;

