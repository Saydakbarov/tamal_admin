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
import AddNew from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import DescriptionProduct from "./DescriptionProduct";
import DeleteProduct from "./DeleteProduct";
import BASE_URl from "../../Server";
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

// https://tamal.onrender.com/api/v1/products?limit={limit}

export default function ProductTable() {
  const [productData, setProductData] = useState([]);
  const [updateNew, setUpdateNew] = useState([]);
  const [description, setDescription] = useState([]);
  const [id, setId] = useState();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(`${BASE_URl}api/v1/products?limit=5&offset=` + offset, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setProductData(data.data))
      .catch((e) => console.log(e));
  }, [offset]);

  console.log(productData);

  return (
    <Box sx={{ p: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">#</StyledTableCell>
              <StyledTableCell align="center">Category Title</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Model</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productData.map((row, i) => (
              <StyledTableRow key={row.product_id}>
                <StyledTableCell align="center">
                  {row.product_id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.product_id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.product_title_en}
                </StyledTableCell>

                <StyledTableCell align="center">
                  {row.product_model_en}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={() => setDescription(row)}>
                    <DescriptionProduct data={description} />
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                    component={"div"}
                    onClick={() => setUpdateNew(row)}
                  >
                    <UpdateProduct data={updateNew} />
                    <Button onClick={() => setId(row.product_id)}>
                      <DeleteProduct id={id} />
                    </Button>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="pagination__btnbox">
        <button
          className="prev_btn add__btn"
          onClick={() => setOffset(Number(offset) - 5)}
          disabled={offset === 0 ? true : false}
        >
          Prev
        </button>
        <button
          className="next_btn add__btn"
          onClick={() => setOffset(Number(offset) + 5)}
          disabled={productData.length >= 5 ? false : true}
        >
          Next
        </button>
      </div>

      <AddNew />
    </Box>
  );
}
