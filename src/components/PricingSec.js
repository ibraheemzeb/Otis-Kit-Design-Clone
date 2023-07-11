import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import BadgeOverlap from "./cards/PriceBadge";
import PricingCardGrid from "./PricingCardGrid";
const PricingSec = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundImage: `url('/pattern.svg'), linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))`, // Multiple background images
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "auto",
          position: "relative",
          marginTop: "50vh",
          paddingBottom: "10%",
          // display: "column",
          placeItems: "center",
          overflow: "hidden",
          objectFit: "cover",
          marginLeft: "-5.9%",
          marginRight: "-5.9%",
          zIndex:"-1",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            height: "100%",
            direction: "column",
            alignItems: "center",
            alignContent: "center",
            padding: "5% 10% 5% 10%",
          }}
        >
          {/* <Grid item xs={12} md={6} lg={6} container justifyContent="center">
            <BadgeOverlap />
          </Grid> */}
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            container
            direction="column"
            alignItems="center"
          >
            <BadgeOverlap />
            <Typography
              align="center"
              sx={{
                color: "White",
                fontFamily: "Roboto Slab, sans-serif",
                fontWeight: "700",
                fontSize: "2.95rem",
              }}
            >
              Ready to get Material Kit?
            </Typography>
            <Typography
              align="center"
              sx={{
                color: "white",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
                //   fontWeight: "400",
                fontSize: "1.25rem",
                width: { md: "40%", lg: "40" },
              }}
            >
              Based on the license you get, you will have direct access to our
              team of developers who built the product.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          // position: "absolute",
          // top:"-2.1%",
          // bottom: "-2.1%",
          marginTop:"-10%",
          width: "90%",
          height: "auto",
          zIndex:"1",
          // left: "50%",
          // transform: "translateX(-50%)",
        }}
      >
        <PricingCardGrid />
      </Box>
    </Box>
  );
};

export default PricingSec;
