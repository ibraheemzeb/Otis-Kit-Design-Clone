import { Grid } from "@mui/material";
import React from "react";
import Card from "./GettingStartedCard";
import BlueCard from "./BlueCard";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";

const CardGridSection = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ alignContent: "canter", width: "100%", paddingTop: "1%" }}
    >
      <Grid item sm={12} md={4} lg={4}>
        <BlueCard
          icon={<FlagRoundedIcon fontSize="large" sx={{color:"white"}} />}
          heading={"Getting Started"}
          text={
            "Check the possible ways of working with our product and the necessary files for building your own project."
          }
          btext={"Let's Start"}
        />
      </Grid>
      <Grid item sm={12} md={4} lg={4}>
        <Card
          icon={
            <PrecisionManufacturingRoundedIcon
              fontSize="large"
              color="primary"
            />
          }
          heading={"Plugins"}
          text={
            "Get inspiration and have an overview about the plugins that we used to create the Material Kit."
          }
          btext={"Read More"}
        />
      </Grid>
      <Grid item sm={12} md={4} lg={4}>
        <Card
          icon={<AppsRoundedIcon fontSize="large" color="primary" />}
          heading={"Components"}
          text={
            "Otis Kit PRO is giving you a lot of pre-made components, that will help you to build UI's faster."
          }
          btext={"Read More"}
        />
      </Grid>
    </Grid>
  );
};

export default CardGridSection;
