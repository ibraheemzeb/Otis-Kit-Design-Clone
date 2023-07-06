import React from "react";
// import CollectionCard from "../";
import { Grid, Typography, Box } from "@mui/material";
// import BadgeOverlap from "./cards/CollBadge";
import AttentionGrid from "./cards/AttentionGrid";

const CollectionsSec = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ height: "auto" }}
    >
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
                fontSize: "2.75rem",
              }}
            >
              Attention Catchers
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
              20+ Fully coded components that popup from different places of the
              screen
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={9}
          container
          direction="column"
          alignItems="center"
        >
          <AttentionGrid />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CollectionsSec;
