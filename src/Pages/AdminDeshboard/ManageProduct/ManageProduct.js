import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";

import React, { useEffect, useState } from "react";

const ManageProduct = () => {
  const [apartments, setapartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/apartments")
      .then((res) => res.json())
      .then((data) => setapartments(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const remainingBooks = apartments.filter((items) => items._id !== id);

      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Booking Cancle Successfully");
          }
          setapartments(remainingBooks);
        });
    }
  };
  return (
    <div>
      <h1>Manage All Product</h1>
      <div>
        <div className="">
          <TableContainer style={{ width: "75%" }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      color: "#1976D2",
                      fontSize: "15px",
                    }}
                  >
                    Apartment Name
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      color: "#1976D2",
                      fontSize: "15px",
                    }}
                    align="right"
                  >
                    Apartment Type
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      color: "#1976D2",
                      fontSize: "15px",
                    }}
                    align="right"
                  >
                    Location
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      color: "#1976D2",
                      fontSize: "15px",
                    }}
                    align="right"
                  >
                    Delete Apartment
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {apartments.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.appartmentName}
                    </TableCell>
                    <TableCell align="right">{row.appartmentType}</TableCell>
                    <TableCell align="right">{row.location}</TableCell>

                    <TableCell align="right">
                      <Button
                        onClick={() => handleDelete(row._id)}
                        variant="contained"
                        color="success"
                      >
                        Cancle Booking
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
