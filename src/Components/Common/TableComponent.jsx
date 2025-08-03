import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { URLStatsAPI } from "../../Services/URLServices/URLStatsAPI";
import { URLRedirectAPI } from "../../Services/URLServices/URLRedirectAPI";

const TableComponent = ({ urlData }) => {

  // navigate hook
  const navigate = useNavigate();

  // handle click for button
  const handleClick = async (code) => {
    const res = await URLStatsAPI(code);
    console.log("res", res);
    if (res.success) {
      // Navigate to Stats page with state data
      navigate("/stats", { state: res.URLObject });
    }
  };

  // handle click for when clicking url
  const handleShortUrlClick = async (e, code) => {
    e.preventDefault();
    const res = await URLRedirectAPI(code); // Axios GET call
    if (res.success) {
      window.open(res.URLObject.originalURL, "_blank");
    } else {
      console.log("Something went wrong while redirecting.");
    }
  };

  return (
    <Box sx={{ mt: 4, px: { xs: 2, sm: 4 } }}>
      {/* Table heading */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 4, color: "black" }}
      >
        🔗 Your Shortened URLs
      </Typography>

      <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 3 }}>
        <Table>
          {/* Table Header */}
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                Short URL
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "16px" }}
                align="center"
              >
                Stats
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {urlData && urlData.length > 0 ? (
              urlData.map((row, index) => (
                <TableRow
                  key={index}
                  hover
                  sx={{
                    transition: "0.2s ease-in-out",
                    "&:hover": { backgroundColor: "#f9f9f9" },
                  }}
                >
                  {/*  Short URL cell */}
                  <TableCell>
                    <a
                      href="#"
                      onClick={(e) => handleShortUrlClick(e, row.code)}
                      style={{
                        color: "#1976d2",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      {row.shortURL}
                    </a>
                  </TableCell>

                  {/*  Stats Button */}
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={() => handleClick(row.code)}
                      sx={{ textTransform: "none", fontWeight: "bold" }}
                    >
                      View Stats
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  <Typography variant="body1" color="text.secondary">
                    No URLs shortened yet.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComponent;
