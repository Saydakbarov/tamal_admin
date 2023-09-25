import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BASE_URl from "../../Server";
import { Box, Button } from "@mui/material";
import DeleteOrder from "./DeleteOrder";

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

export default function OrderTable() {
  const [offset, setOffset] = useState(0);
  const [orderData, setOrderData] = useState([]);

  const [id, setId] = useState();

  useEffect(() => {
    fetch(`${BASE_URl}api/v1/orders?limit=10&offset=${offset}`, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setOrderData(data.data))
      .catch((e) => console.log(e));
  }, [offset]);

  console.log(orderData);

  return (
    <Box sx={{ p: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">#</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Delivery</StyledTableCell>
              <StyledTableCell align="center">Time</StyledTableCell>
              <StyledTableCell align="center">Payment</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orderData.map((row, i) => (
              <StyledTableRow key={row.order_id}>
                <StyledTableCell align="center">{row.order_id}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.order_name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.order_phone}
                </StyledTableCell>

                <StyledTableCell align="center">
                  {row.order_address}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.order_delivery === true ? "true" : "false"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.order_time}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.order_payment_type}
                </StyledTableCell>
                {/* <StyledTableCell align="center">
                  <Button onClick={() => setDescription(row)}>
                    <DescriptionProduct data={description} />
                  </Button>
                </StyledTableCell> */}
                <StyledTableCell align="center">
                  <Button onClick={() => setId(row.order_id)}>
                    <DeleteOrder id={id} />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="pagination__btnbox" style={{ marginTop: "30px" }}>
        <button
          className="prev_btn add__btn"
          onClick={() => setOffset(Number(offset) - 20)}
          disabled={offset === 0 ? true : false}
        >
          Prev
        </button>
        <button
          className="next_btn add__btn"
          onClick={() => setOffset(Number(offset) + 20)}
          disabled={orderData?.length >= 20 ? false : true}
        >
          Next
        </button>
      </div>
    </Box>
  );
}
