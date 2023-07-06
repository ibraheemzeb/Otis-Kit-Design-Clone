import React from "react";
// import CollectionCard from "../";
import { Grid, Typography, Box } from "@mui/material";
import BadgeOverlap from "./cards/PresBadge";
import PresentationGrid from "./cards/PresentationGrid";

const CollectionsSec = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ height: "auto", paddingTop: "5%" }}
    >
      <Grid item xs={12} md={6} lg={6} container justifyContent="center">
        <BadgeOverlap />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        container
        direction="column"
        alignItems="center"
      >
        <Typography
          align="center"
          sx={{
            color: "rgb(52, 71, 103)",
            fontFamily: "Roboto Slab, sans-serif",
            fontWeight: "700",
            fontSize: "2.95rem",
          }}
        >
          With our coded pages
        </Typography>
        <Typography
          align="center"
          sx={{
            color: "rgb(123, 128, 154)",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
            fontWeight: "400",
            fontSize: "1.5rem",
            width: { md: "40%", lg: "40" },
          }}
        >
          The easiest way to get started is to use one of our pre-built example
          pages.
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        // alignItems="center"
        justifyContent="center"
        style={{ height: "auto", paddingTop: "10%" }}
      >
        
        <Grid
          item
          xs={12}
          md={12}
          lg={9}
          container
          direction="column"
          alignItems="center"
          
        >
          <PresentationGrid />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          lg={3}
          container
          direction="column"

          // alignItems="center"
        >
          <Box sx={{ position: "sticky", top: 120 }}>
            <Typography
              // align="center"
              sx={{
                color: "rgb(52, 71, 103)",
                fontFamily: "Roboto Slab, sans-serif",
                fontWeight: "700",
                fontSize: "2.5rem",
              }}
            >
              Presentation Pages for Company, Landing Pages, Blogs and Support
            </Typography>
            <Typography
              // align="center"
              sx={{
                color: "rgb(123, 128, 154)",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
                fontWeight: "400",
                fontSize: "1.25rem",
                // width: { md: "40%", lg: "40%" },
              }}
            >
              These is just a small selection of the multiple possibitilies you
              have. Focus on the business, not on the design.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CollectionsSec;
