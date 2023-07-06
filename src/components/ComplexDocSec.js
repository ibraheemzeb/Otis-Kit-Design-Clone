import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const ComplexDocSec = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(195deg, rgba(66, 66, 74, 0.8), rgba(25, 25, 25, 0.8)), url('/desktop.jpg')`,
        // backgroundImage: `url('/desktop.jpg')`,
        // background: `linear-gradient(195deg, rgba(66, 66, 74, 0.8), rgba(25, 25, 25, 0.8))`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "auto",

        // position: "relative",
        marginTop: "15vh",
        padding:"2%",
        display: "row",
        placeItems: "center",
        overflow: "hidden",
        borderRadius:"1em",
      }}
    >
      <Grid container>
        <Grid item md={6} lg={6} sx={{ display: "grid", padding: "3%" }}>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontSize: "2rem",
              fontWeight: "700",
              position: "relative",
              //   padding: "2%",
              display: { xs: "inline-block" },
            }}
          >
            Built by developers
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "'Roboto Slab', sans-serif",
              fontSize: "3.5rem",
              fontWeight: "700",
              position: "relative",
              //   padding: "2%",
              display: { xs: "inline-block" },
            }}
          >
            Complex Documentation
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontSize: "1.5rem",
              fontWeight: "200",
              opacity: 0.8,
              //   lineHeight: "2",
            }}
          >
            From colors, cards, typography to complex elements, you will find
            the full documentation. Play with the utility classes and you will
            create unlimited combinations for our components.
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#FFF",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontSize: "1.25rem",
              fontWeight: "200",
              opacity: 0.8,
              paddingTop: "1%",
              transition: "margin-left 0.2s",
              "&:hover": {
                "& > .icon": {
                  marginLeft: "0.5em",
                },
              },
            }}
          >
            Read More{" "}
            <ArrowForwardRoundedIcon
              sx={{ transition: "margin-left 0.2s" }}
              className="icon"
              //   sx={{ marginLeft: "0.5em" }}
            />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComplexDocSec;
