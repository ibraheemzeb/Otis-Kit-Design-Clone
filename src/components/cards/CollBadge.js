import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";

const shapeStyles = {
  bgcolor: "rgb(174, 206, 247)",
  width: 220,
  height: 35,
  borderRadius: "0.75rem",
  color: "rgb(9, 91, 198)",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontSize: "0.95rem",
  fontWeight: "750",
  padding: "0.55em 0.9em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: 10,
  //   right: "150%",
  //   transform: "translateX(150%)",
  //   top: { xs: "-300%", sm: "-200%" },
  //   right: { xs: "-300%", sm: "-400%" },
};

const rectangle = (
  <Box component="span" sx={shapeStyles}>
    INFINITE COMBINATIONS
  </Box>
);

export default function BadgeOverlap() {
  return <Badge badgeContent={rectangle}></Badge>;
}
