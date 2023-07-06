import { Grid } from "@mui/material";
import React from "react";
import DesignCard from "./DesignCard";

const CollectionGrid = () => {
  return (
    <Grid container spacing={4}>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard
          image={"headers.jpg"}
          heading={"Navbars"}
          text={"4 Examples"}
        />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard
          image={"features.jpg"}
          heading={"Nav Tabs"}
          text={"2 Examples"}
        />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard
          image={"pricing.jpg"}
          heading={"Pagination"}
          text={"3 Examples"}
        />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard
          image={"pricing.jpg"}
          heading={"Pagination"}
          text={"3 Examples"}
        />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard
          image={"pricing.jpg"}
          heading={"Pagination"}
          text={"3 Examples"}
        />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard
          image={"pricing.jpg"}
          heading={"Pagination"}
          text={"3 Examples"}
        />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard
          image={"pricing.jpg"}
          heading={"Pagination"}
          text={"3 Examples"}
        />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard
          image={"pricing.jpg"}
          heading={"Pagination"}
          text={"3 Examples"}
        />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard
          image={"pricing.jpg"}
          heading={"Pagination"}
          text={"3 Examples"}
        />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <DesignCard
          image={"pricing.jpg"}
          heading={"Pagination"}
          text={"3 Examples"}
        />
      </Grid>
    </Grid>
  );
};

export default CollectionGrid;
