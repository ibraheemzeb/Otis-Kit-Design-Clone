import { Grid } from "@mui/material";
import React from "react";
import DesignCard from "./DesignCard";

const CollectionGrid = () => {
  return (
    <Grid container spacing={4} sx={{ paddingLeft: "4%", paddingRight: "6%" }}>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"headers.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"features.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"pricing.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"headers.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"features.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"pricing.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"headers.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"features.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"pricing.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"headers.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"features.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"pricing.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"pricing.jpg"} heading={"Page Headers"} />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard image={"pricing.jpg"} heading={"Page Headers"} />
      </Grid>
    </Grid>
  );
};

export default CollectionGrid;
