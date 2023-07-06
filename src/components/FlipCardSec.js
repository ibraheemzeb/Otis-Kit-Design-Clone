import { Grid, Typography } from "@mui/material";
import React from "react";
import FlipCard from "./cards/FlipCard";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import DevicesIcon from "@mui/icons-material/Devices";

const FlipCardSec = () => {
  return (
    <Grid container sx={{ padding: "10% 0% 10% 9%" }}>
      <Grid item xs={12} md={4} >
        <FlipCard />
      </Grid>
      <Grid item xs={1} md={5} sx={{ paddingLeft: "0%" }}>
        {/* <Grid item xs={12} md={6}> */}
        <Grid
          container
          spacing={25}
          gutterBottom
          sx={{ margin: "1%", padding: "0% 10% 10% 10%" }}
        >
          <Grid Item xs={12} md={6} sx={{ padding: "0% 5% 0% 5%", maxWidth: "85%" }}>
            <ContentCopyRoundedIcon color="primary" fontSize="large" />
            <Typography
              variant="bold"
              sx={{
                fontWeight: "700",
                color: "rgb(52, 71, 103)",
                fontSize: "1.5rem",
                display: "block",
              }}
              gutterBottom
            >
              Full Documentation
            </Typography>
            <Typography
              sx={{
                fontWeight: "200",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                color: "rgb(123, 128, 154)",
                fontSize: "1.25rem",
                display: "block",
              }}
              gutterBottom
            >
              Built by developers for developers. Check the foundation and you
              will find everything inside our documentation.
            </Typography>
          </Grid>
          <Grid Item xs={12} md={6} sx={{ padding: "0% 5% 0% 5%", maxWidth: "85%" }}>
            <CopyAllIcon color="primary" fontSize="large" />
            <Typography
              variant="bold"
              sx={{
                fontWeight: "700",
                color: "rgb(52, 71, 103)",
                fontSize: "1.5rem",
                display: "block",
              }}
              gutterBottom
            >
              MUI Ready
            </Typography>
            <Typography
              sx={{
                fontWeight: "200",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                color: "rgb(123, 128, 154)",
                fontSize: "1.25rem",
                display: "block",
              }}
              gutterBottom
            >
              The world's most popular react components library for building
              user interfaces.
            </Typography>
          </Grid>
          <Grid Item xs={12} md={6} sx={{ padding: "0% 5% 0% 5%", maxWidth: "85%" }}>
            <PriceChangeIcon color="primary" fontSize="large" />
            <Typography
              variant="bold"
              sx={{
                fontWeight: "700",
                color: "rgb(52, 71, 103)",
                fontSize: "1.5rem",
                display: "block",
              }}
              gutterBottom
            >
              Save Time & Money
            </Typography>
            <Typography
              sx={{
                fontWeight: "200",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                color: "rgb(123, 128, 154)",
                fontSize: "1.25rem",
                display: "block",
              }}
              gutterBottom
            >
              Creating your design from scratch with dedicated designers can be
              very expensive. Start with our Design System.
            </Typography>
          </Grid>
          <Grid Item xs={12} md={6} sx={{ padding: "0% 0% 0% 5%", maxWidth: "85%" }}>
            <DevicesIcon color="primary" fontSize="large" />
            <Typography
              variant="bold"
              sx={{
                fontWeight: "700",
                color: "rgb(52, 71, 103)",
                fontSize: "1.5rem",
                display: "block",
              }}
              gutterBottom
            >
              Fully Responsive
            </Typography>
            <Typography
              sx={{
                fontWeight: "200",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                color: "rgb(123, 128, 154)",
                fontSize: "1.25rem",
                display: "block",
              }}
              gutterBottom
            >
              Regardless of the screen size, the website content will naturally
              fit the given resolution.
            </Typography>
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FlipCardSec;
