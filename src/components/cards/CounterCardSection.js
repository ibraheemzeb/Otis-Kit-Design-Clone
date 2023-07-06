import { Grid } from "@mui/material";
import React from "react";
import CounterCard from "./counterCard";

const CounterCardSection = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{ display: "flex", margin: "0px", width: "100%", padding:"0% 10%" }}
    >
      <Grid
        item
        xs={10}
        sm={10}
        md={4}
        lg={4}
        sx={{
          borderRight: {
            md: "2px solid rgba(0, 0, 0, 0.1)",
            lg: "2px solid rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <CounterCard
          Count={"300+"}
          Title={"Coded Elements"}
          Text1={
            "From buttons, to inputs, navbars, alerts or cards, you are covered"
          }
        />
      </Grid>
      <Grid
        item
        xs={10}
        sm={10}
        md={4}
        lg={4}
        sx={{
          borderRight: {
            md: "2px solid rgba(0, 0, 0, 0.1)",
            lg: "2px solid rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <CounterCard
          Count={"100+"}
          Title={"Design Blocks"}
          Text1={
            "Mix the sections, change the colors and unleash your creativity"
          }
        />
      </Grid>
      <Grid item xs={10} sm={10} md={4} lg={4}>
        <CounterCard
          Count={"41"}
          Title={"Pages"}
          Text1={
            "Save 3-4 weeks of work when you use our pre-made pages for your website"
          }
        />
      </Grid>
    </Grid>
  );
};

export default CounterCardSection;
