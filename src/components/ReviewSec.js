import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import ReviewCard from "./cards/ReviewCard";
import ReviewCardB from "./cards/ReviewCardB";
import Divider from "@mui/material/Divider";

function ReviewSec() {
  return (
    <Box sx={{justifyContent:"center"}}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ height: "auto", marginTop: "10%" }}
      >
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
            Trusted by over
          </Typography>
          <Typography
            align="center"
            sx={{
              // color:"linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
              color: "rgb(26, 115, 232)",
              // backgroundImage:
              //   "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
              fontFamily: "Roboto Slab, sans-serif",
              fontWeight: "700",
              fontSize: "2.95rem",
            }}
          >
            1,679,477+ web developers
          </Typography>
          <Typography
            align="center"
            sx={{
              color: "rgb(123, 128, 154)",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
              fontWeight: "400",
              fontSize: "1.5rem",
              width: { md: "50%", lg: "50" },
            }}
          >
            Many Fortune 500 companies, startups, universities and governmental
            institutions love Creative Tim's products.
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            // alignContent: "center",
            width: "100%",
            marginTop: "8%",
            paddingBottom: "10%",
          }}
        >
          <Grid item sm={12} md={4} lg={4}>
            <ReviewCard
              heading={"Nick Willever"}
              time={"1 day ago"}
              text={
                "This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
              }
            />
          </Grid>
          <Grid item sm={12} md={4} lg={4}>
            <ReviewCardB
              heading={"Shailesh Kushwaha"}
              time={"1 week ago"}
              text={
                "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              }
            />
          </Grid>
          <Grid item sm={12} md={4} lg={4}>
            <ReviewCard
              heading={"Samuel Kamuli"}
              time={"3 weeks ago"}
              text={
                "Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              }
            />
          </Grid>
        </Grid>
        <Divider style={{ width: "100%" }} />
        {/* <Grid container sx={{ paddingTop: "3%", width:"80%" }}>
          
            <Grid item sm={6} md={4} lg={1.92} sx={{opacity:"0.6"}}>
              <img src="apple.svg" alt="apple" />
            </Grid>
            <Grid item sm={6} md={4} lg={1.92} sx={{opacity:"0.6"}}>
              <img src="fb.svg" alt="facebook" />
            </Grid>
            <Grid item sm={6} md={4} lg={1.92} sx={{opacity:"0.6"}}>
              <img src="nasa.svg" alt="nasa" />
            </Grid>
            <Grid item sm={6} md={4} lg={1.92} sx={{opacity:"0.6"}}>
              <img src="vodafone.svg" alt="vodafone" />
            </Grid>
            <Grid item sm={6} md={4} lg={1.92} sx={{opacity:"0.6"}}>
              <img src="digitalocean.svg" alt="digiocean" />
            </Grid>
          
        </Grid> */}
        <Grid container sx={{ paddingTop: "3%", width: "80%" }}>
          <Grid
            item
            sm={6}
            md={4}
            lg={2.4}
            sx={{ opacity: "0.6", width: "100%", height: "auto" }}
          >
            <img
              src="apple.svg"
              alt="apple"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Grid>
          <Grid
            item
            sm={6}
            md={4}
            lg={2.4}
            sx={{ opacity: "0.6", width: "100%", height: "auto" }}
          >
            <img
              src="fb.svg"
              alt="facebook"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Grid>
          <Grid
            item
            sm={6}
            md={4}
            lg={2.4}
            sx={{ opacity: "0.6", width: "100%", height: "auto" }}
          >
            <img
              src="nasa.svg"
              alt="nasa"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Grid>
          <Grid
            item
            sm={6}
            md={4}
            lg={2.4}
            sx={{ opacity: "0.6", width: "100%", height: "auto" }}
          >
            <img
              src="vodafone.svg"
              alt="vodafone"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Grid>
          <Grid
            item
            sm={6}
            md={4}
            lg={2.4}
            sx={{ opacity: "0.6", width: "100%", height: "auto" }}
          >
            <img
              src="digitalocean.svg"
              alt="digiocean"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReviewSec;
