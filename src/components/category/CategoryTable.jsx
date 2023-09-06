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
import { Delete, Edit } from "@mui/icons-material";
import ModalCategory from "./ModalCategory";
import UpdateCategory from "./UpdateCategory";
import DeleteCategory from "./DeleteCategory";

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

export default function CategoryTable() {
  const [cetegoryData, setCategoryData] = useState([]);

  const [upDateData, setUpdateData] = useState([]);

  useEffect(() => {
    fetch("https://tamal.onrender.com/api/v1/categories", {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setCategoryData(data.data))
      .catch((e) => console.log(e));
  }, []);

  // Delete Category

  return (
    <Box sx={{ p: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">#</StyledTableCell>
              <StyledTableCell align="center">English</StyledTableCell>
              <StyledTableCell align="center">Russian</StyledTableCell>
              <StyledTableCell align="center">Uzbek</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cetegoryData.map((row, i) => (
              <StyledTableRow key={row.category_id}>
                <StyledTableCell align="center">
                  {row.category_id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.category_name_en}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.category_name_ru}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.category_name_uz}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box
                    sx={{ display: "flex", gap: "10px" }}
                    component={"div"}
                    onClick={() => setUpdateData(row)}
                  >
                    <UpdateCategory data={upDateData} />
                    <Box>
                      <DeleteCategory id={upDateData} />
                    </Box>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ModalCategory />
    </Box>
  );
}
