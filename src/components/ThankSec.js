import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const ThankSec = () => {
  return (
    <Box sx={{ marginTop: "10%" }}>
      <Grid container alignItems="center">
        <Grid item md={6} lg={6}>
          <Typography
            gutterBottom
            align="center"
            sx={{
              fontSize: "2rem",
              fontWeight: "700",
              // display: "flex",
              // alignItems: "center",
              color: "rgb(52, 71, 103)",
            }}
          >
            Thank you for your support!
          </Typography>
          <Typography
            color="rgb(123, 128, 154)"
            align="center"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "520",
            }}
          >
            We deliver the best web products.
          </Typography>
        </Grid>
        <Grid item md={6} lg={6}>
          <Box align="center">
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{
                background: "rgb(85, 172, 238)",
                margin: "0 0.2em",
                width: "7rem",
                height: "3rem",
                "&:hover": {
                  background: "rgb(62, 161, 236)",
                  boxShadow: "none",
                },
              }}
            >
              <FaTwitter />
              TWEET
            </Button>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{
                background: "rgb(59, 89, 152)",
                margin: "0 0.2em",
                width: "7rem",
                height: "3rem",
                "&:hover": {
                  background: "rgb(52, 78, 134)",
                  boxShadow: "none",
                },
              }}
            >
              <FaFacebookF />
              SHARE
            </Button>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{
                background: "rgb(204, 33, 39)",
                margin: "0 0.2em",
                width: "7rem",
                height: "3rem",
                "&:hover": {
                  background: "rgb(178, 29, 34)",
                  boxShadow: "none",
                },
              }}
            >
              <FaPinterestP />
              PIN IT
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThankSec;
