import { Box, Typography } from "@mui/material";
import React from "react";

const DesignCard = ({ image, heading, text }) => {
  return (
    <Box>
      <Box
        sx={{
          borderRadius: "1.5rem",
          overflow: "hidden",
          background: "white",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem, rgba(0, 0, 0, 0.05) 0rem 0.25rem 0.375rem -0.125rem",
            transform:
              "perspective(999px) rotateX(0deg) translate3d(0px, 0px, 0px)",
              transformOrigin: "50% 10px",
              willChange: "transform, boxShadow",
              transition: "transform 200ms ease-out",
              backfaceVisibility: "hidden",
              opacity: "1",
            "&:hover":{
              transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)"
              }
        }}
      >
        <img src={image} alt="img" style={{ width: "100%" }} />
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: "700",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontSize: "1.25rem",
            color: "rgb(52, 71, 103)",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontWeight: "200",
            fontFamily:"Roboto, Helvetica, Arial, sans-serif",
            fontSize: "1rem",
            color: "rgb(123, 128, 154",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default DesignCard;
