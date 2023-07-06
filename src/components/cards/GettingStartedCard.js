import * as React from "react";

// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
// import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function MultiActionAreaCard({ icon, heading, text, btext }) {
  return (
    <Box
      sx={{
        
        background: "rgb(248, 249, 250)",
        color: "rgb(52, 71, 103)",
        borderRadius: "0.75rem",
        padding: "8%",
      }}
    >
      
      <Typography
        gutterBottom
        component="div"
        sx={{
          fontSize: "2rem",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginRight: "0.5rem" }}>{icon}</Box>
        {heading}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontSize: "1.45rem" }}
      >
        {text}
      </Typography>
     
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          color: "rgb(26, 115, 232)",
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          fontSize: "1.25rem",
          fontWeight: "200",
          opacity: 0.8,
          paddingTop: "5%",
          transition: "margin-left 0.2s",
          "&:hover": {
            "& > .icon": {
              marginLeft: "0.5em",
            },
          },
        }}
      >
        {btext}{" "}
        <ArrowForwardRoundedIcon
          sx={{ transition: "margin-left 0.2s" }}
          className="icon"
          
        />
      </Typography>
      
    </Box>
  );
}
