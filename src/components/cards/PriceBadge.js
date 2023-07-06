import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";

const shapeStyles = {
  background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
  width: "fitContent",
  height: 35,
  borderRadius: "0.75rem",
  color: "white",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontSize: "0.95rem",
  fontWeight: "750",
  padding: "0.55em 0.9em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: 10,
};

const rectangle = (
  <Box component="span" sx={shapeStyles}>
    PRICING
  </Box>
);

export default function BadgeOverlap() {
  return <Badge badgeContent={rectangle}></Badge>;
}
