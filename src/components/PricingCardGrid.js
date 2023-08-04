import React from "react";
import { Grid, Box, Typography,  } from "@mui/material";
// import Divider from "@mui/material/Divider";
import PricingCard from "./cards/PricingCard";
import PricingCardB from "./cards/PricingCardB";
import LockIcon from "@mui/icons-material/Lock";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";

const PricingCardGrid = () => {
  return (
    <Box
      sx={{
        width: "auto",
        // top: "18%",
        // marginBottom: "35%",
        // position: "relative",
        
      }}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} md={3} lg={3}>
          <PricingCard
            heading={"Freelancer"}
            text={"Good for a personal or client web/mobile app."}
            price={"$79"}
          />
        </Grid>
        <Grid item sm={12} md={3} lg={3}>
          <PricingCard
            heading={"Startup"}
            text={"Build your startup or client web/mobile app."}
            price={"$149"}
          />
        </Grid>
        <Grid item sm={12} md={3} lg={3}>
          <PricingCardB
            heading={"Company"}
            text={"Perfect for web/mobile apps or SaaS projects."}
            price={"$249"}
          />
        </Grid>
        <Grid item sm={12} md={3} lg={3}>
          <PricingCard
            heading={"Enterprise"}
            text={
              "Deploy large-scale projects which include redistribution rights."
            }
            price={"$599"}
          />
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingTop="5%"
      >
        <Grid item paddingTop="5%">
          <Typography
            color="rgb(123, 128, 154)"
            sx={{
              fontSize: "1.35rem",
              fontWeight: "520",
            }}
          >
            <LockIcon /> Secured Payment by{" "}
            <b style={{ margin: "0 0.25em" }}>2Checkout</b> with:{" "}
          </Typography>
        </Grid>
        <Grid item paddingTop="2%">
          <Box>
            <Typography color="rgb(123, 128, 154)" sx={{ fontSize: "3em" }}>
              <FaCcPaypal style={{ margin: "0 0.1em" }} />
              <FaCcVisa style={{ margin: "0 0.1em" }} />
              <FaCcMastercard style={{ margin: "0 0.1em" }} />
              <FaCcAmex style={{ margin: "0 0.1em" }} />
            </Typography>
          </Box>
        </Grid>
        <Grid item paddingTop="2%">
          <Typography
            color="rgb(123, 128, 154)"
            align="center"
            sx={{
              fontSize: "1.35rem",
              fontWeight: "520",
            }}
          >
            <b style={{ margin: "0 0.25em" }}>Info:</b> If you are a Registered
            Company inside the European Union you will
            <br /> be able to add your VAT ID after your Press "Buy Now"
          </Typography>
        </Grid>
      </Grid>
      {/* <Grid container alignItems="center">
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
        <Grid item md={6} lg={6} >
          <Box align="center" >
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{ background: "rgb(85, 172, 238)", margin: "0 0.1em" }}
            >
              <FaTwitter />
              TWEET
            </Button>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{ background: "rgb(59, 89, 152)", margin: "0 0.1em" }}
            >
              <FaFacebookF />
              SHARE
            </Button>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{ background: "rgb(204, 33, 39)", margin: "0 0.1em" }}
            >
              <FaPinterestP />
              PIN IT
            </Button>
          </Box>
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default PricingCardGrid;
