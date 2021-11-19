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

const ManageAllOrder = () => {
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  useEffect(() => {
    fetch("https://blooming-cove-73809.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const remainingBooks = bookings.filter((items) => items._id !== id);

      fetch(`https://blooming-cove-73809.herokuapp.com/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Booking Cancle Successfully");
          }
          setBookings(remainingBooks);
        });
    }
  };

  return (
    <div>
      <h3>Manage All Orders</h3>
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
                    Customer Name
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      color: "#1976D2",
                      fontSize: "15px",
                    }}
                    align="right"
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
                    Email
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      color: "#1976D2",
                      fontSize: "15px",
                    }}
                    align="right"
                  >
                    Manage Booking
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.claintName}
                    </TableCell>
                    <TableCell align="right">{row.apartmentName}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>

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

export default ManageAllOrder;
