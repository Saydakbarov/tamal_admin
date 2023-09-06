import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddNew from "./AddNew";
import UpdateNews from "./UpdateNews";
import DeleteNews from "./DeleteNews";
import AllDescription from "./AllDescriptionNews";
import AllDescriptionNews from "./AllDescriptionNews";
// import { Delete, Edit } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function NewsTable() {
  const [newData, setNewData] = useState([]);

  const [updateNew, setUpdateNew] = useState([]);

  useEffect(() => {
    fetch("https://tamal.onrender.com/api/v1/news?limit=100&offset=0", {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setNewData(data.data))
      .catch((e) => console.log(e));
  }, []);

  console.log(newData);

  return (
    <Box sx={{ p: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">#</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Photo</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>

              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newData.map((row, i) => (
              <StyledTableRow key={row.new_id}>
                <StyledTableCell align="center">{row.new_id}</StyledTableCell>

                <StyledTableCell align="center">
                  {row.new_title_en}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <a href={row.new_img}>Image</a>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <AllDescriptionNews data={updateNew} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box
                    sx={{ display: "flex", gap: "10px" }}
                    component={"div"}
                    onClick={() => setUpdateNew(row)}
                  >
                    <UpdateNews data={updateNew} />
                    <Box>
                      <DeleteNews id={updateNew} />
                    </Box>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AddNew />
    </Box>
  );
}
