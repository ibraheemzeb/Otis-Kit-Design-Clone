import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import DesignCard from "./cards/DesignCard";
import Button from "@mui/material/Button";

const AccountPages = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/pattern.svg'), linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))`, // Multiple background images
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "auto",
        position: "relative",
        marginTop: "50vh",
        display: "row",
        placeItems: "center",
        overflow: "hidden",
        objectFit: "cover",
        marginLeft: "-5.9%",
        marginRight: "-5.9%",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          alignItems: "center",
          alignContent: "center",
          padding: "5% 10% 5% 10%",
        }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          sx={{
            display: "flex flex-column",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "'Roboto Slab', sans-serif",
              fontSize: "2.75rem",
              fontWeight: "700",
              position: "relative",
              padding: "2%",
              display: { xs: "inline-block" },
            }}
          >
            Account Pages for beautiful webapps
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontSize: "1.25rem",
              fontWeight: "200",
              opacity: 0.8,
              lineHeight: "2",
            }}
          >
            We created many examples for pages like Signup, Signin, Forgot
            Password, 2FA Authentification and so on. Just choose between a
            Basic Design, an illustration or a cover and you are good to go!
          </Typography>
          <Box spacing={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="https://material-ui.com/store/items/otis-kit-pro-material-kit-react/"
              target="_blank"
              rel="noreferrer"
              sx={{
                borderRadius: "0.5rem",
                fontWeight: "700",
                // height: "40px",
                // width: "120px",
                padding: "2% 5% 2% 5%",
                margin: "10px",
                background:
                  "linear-gradient(195deg, rgb(73,163, 241), rgb(26, 115, 232))",
                backgroundSize: "200% auto",
                transition: "background-position 0.5s",
                "&:hover": {
                  backgroundPosition: "right center",
                  boxShadow:
                    "rgba(26, 115, 232, 0.4) 0rem 0.875rem 1.625rem -0.75rem, rgba(26, 115, 232, 0.15) 0rem 0.25rem 1.4375rem 0rem, rgba(26, 115, 232, 0.2) 0rem 0.5rem 0.625rem",
                  transform:
                    "perspective(999px) rotateX(0deg) translate3d(0px, 0px, 0px)",
                  transformOrigin: "50% 10px",
                  willChange: "transform, boxShadow",
                  transition: "transform 200ms ease-out",
                },
              }}
            >
              View Pages
            </Button>
            <Button
              variant="text"
              color="primary"
              size="large"
              href="https://material-ui.com/store/items/otis-kit-pro-material-kit-react/"
              target="_blank"
              rel="noreferrer"
              sx={{
                borderRadius: "0.5rem",
                fontWeight: "700",
                // height: "40px",
                // width: "120px",
                padding: "2%",
                margin: "10px",
                color: "white",
                backgroundSize: "200% auto",
                transition: "background-position 0.5s",
                "&:hover": {
                  backgroundPosition: "right center",
                  boxShadow:
                    "rgba(255, 255, 255, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem, rgba(0, 0, 0, 0.05) 0rem 0.25rem 0.375rem -0.125rem",
                  transform:
                    "perspective(999px) rotateX(0deg) translate3d(0px, 0px, 0px)",
                  transformOrigin: "50% 10px",
                  willChange: "transform, boxShadow",
                  transition: "transform 200ms ease-out",
                },
              }}
            >
              View SignUp Pages
            </Button>
          </Box>
        </Grid>
        <Grid item lg={8} md={8} sm={12}>
          <Grid container spacing={4} sx={{ padding: "5%" }}>
            <Grid item lg={4} md={12} sm={12}>
              <DesignCard image={"sign-up-cover.jpg"} />
            </Grid>
            <Grid item lg={4} md={12} sm={12}>
              <DesignCard image={"reset-cover.jpg"} />
            </Grid>
            <Grid item lg={4} md={12} sm={12}>
              <DesignCard image={"signin-basic.jpg"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountPages;
