import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";
import { makeStyles } from "@mui/material";

function createData(name, TrackingId, date, status) {
  return { name, TrackingId, date, status };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];


// const makeStyles=(status)=>{
  
// if(status === 'Approved'){
//     return(
//         color:"green",
//     )
// }
// else if(status === 'Pending')
//    return(
// color:'red',
//    )
//    else{
//     color:"white"
//    }

// }

export default function BasicTable() {
  return (
    <TableContainer component={Paper} className="TableContainer">
      <h2 style={{ fontWeight: "bold" }}> Recent products</h2>;
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>
              Name (100g serving)
            </TableCell>
            <TableCell align="left" style={{ fontWeight: "bold" }}>
              Tracking ID
            </TableCell>
            <TableCell align="left" style={{ fontWeight: "bold" }}>
              Status&nbsp;(g)
            </TableCell>
            <TableCell align="left" style={{ fontWeight: "bold" }}>
              date&nbsp;(g)
            </TableCell>
            <TableCell align="left" style={{ fontWeight: "bold" }}>
              details&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.TrackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                {row.st}
                {/* <span style={makeStyles(row.status)}></span> */}
              </TableCell>
              <TableCell align="left">{row.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
