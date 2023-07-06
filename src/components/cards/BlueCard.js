import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function MultiActionAreaCard({ icon, heading, text, btext }) {
  return (
    <Box
      sx={{
        // maxWidth: 345,
        backgroundImage:
          "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
        color: "white",
        borderRadius: "0.75rem",
        padding: "8%",
      }}
    >
      {/* <CardActionArea sx={{background:"rgb(248, 249, 250)"}}> */}

      {/* <CardContent> */}
      {/* <Typography gutterBottom component="div" sx={{fontSize:"2rem" ,fontWeight: "700" }}>
        {icon}
        {heading}
      </Typography> */}
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
        
        sx={{ fontSize: "1.45em" }}
      >
        {text}
      </Typography>
      {/* </CardContent> */}
      {/* </CardActionArea> */}
      {/* <CardActions> */}
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
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
          //   sx={{ marginLeft: "0.5em" }}
        />
      </Typography>
      {/* </CardActions> */}
    </Box>
  );
}
