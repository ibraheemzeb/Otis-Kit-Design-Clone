import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import BadgeOverlap from "./badge";
// import Header from "./Header";

const HeroSection = () => {
  return (
    <Grid container>
      <Grid item sm={12} xs={12} md={12}>
        <Box
        
          sx={{
            backgroundImage: `url('/HeroImg.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "75vh",
            position: "relative",
            top: 0,
            // display: "flex",
            display: "grid",
            // alignItems: "center",
            // justifyContent: "center",
            placeItems: "center",
            width: "100%",
        
          }}
        >
          {/* <Header/> */}
          <Container sx={{ textAlign: "center", width: "50%",  }}>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "'Roboto Slab', sans-serif",
                fontSize: "4rem",
                fontWeight: "700",
                position: "relative",
                padding: "2%",
                display: {xs: "inline-block"},
        
              }}
        
            >
              Otis Kit
              <BadgeOverlap />
            </Typography>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: "1.7rem",
                fontWeight: "300",
                lineHeight: "2"
              }}
            >
              Start the Development with a ReactJS & MUI Design System inspired by
              Material Design.
            </Typography>
          </Container>
        </Box>
            </Grid>
      </Grid>
  );
};

export default HeroSection;
