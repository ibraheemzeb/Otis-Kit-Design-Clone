import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";

const shapeStyles = {
  bgcolor: "White",
  width: 80,
  height: 45,
  borderRadius: "12px",
  color: "#344767",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontSize: "0.95rem",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: { xs: "-300%", sm: "-200%" },
  right: { xs: "-300%", sm: "-400%" },
};

const rectangle = (
  <Box component="span" sx={shapeStyles}>
    PRO
  </Box>
);

export default function BadgeOverlap() {
  return <Badge badgeContent={rectangle}></Badge>;
}
