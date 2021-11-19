import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const MyBooking = () => {
  const { user } = useAuth();
  const [booking, setBooking] = useState([]);
  //   const [deleteBook, setDeleteBook] = useState([]);

  useEffect(() => {
    const url = `https://blooming-cove-73809.herokuapp.com/booking?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const remainingBooks = booking.filter((items) => items._id !== id);

      fetch(`https://blooming-cove-73809.herokuapp.com/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Booking Cancle Successfully");
          }
          setBooking(remainingBooks);
        });
    }
  };
  return (
    <div>
      <h3>There is My Booking</h3>

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
                  Manage Booking
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {booking.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.apartmentName}
                  </TableCell>
                  <TableCell align="right">{row.apartmentType}</TableCell>
                  <TableCell align="right">
                    {row.apartmentDetails.location}
                  </TableCell>

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
  );
};

export default MyBooking;
