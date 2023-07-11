import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';

const PricingCard = ({ heading, text, price }) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
        color: "White",
        borderRadius: "0.75rem",
        padding: "8%",
      }}
    >
      <Typography
        gutterBottom
        component="div"
        sx={{
          fontSize: "1.5rem",
          fontWeight: "750",
          display: "flex",
          alignItems: "center",
        }}
      >
        {heading}
      </Typography>
      <Typography
        gutterBottom
        component="div"
        // color="text.secondary"
        sx={{
          fontSize: "1.35rem",
          fontWeight: "520",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <Box sx={{ marginRight: "0.5rem" }}>
        <ScheduleRoundedIcon />
      </Box> */}
        {text}
      </Typography>
      {/* <Typography
      variant="body2"
      color="text.secondary"
      sx={{ fontSize: "1.45rem", paddingTop:"3%", paddingBottom:"3%" }}
    >
      {text}
    </Typography> */}
      <Typography
        gutterBottom
        component="div"
        sx={{
          fontSize: "2.25rem",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
        }}
      >
        {price}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="https://material-ui.com/store/items/otis-kit-pro-material-kit-react/"
        target="_blank"
        rel="noreferrer"
        sx={{
          borderRadius: "0.5rem",
          fontWeight: "700",
          // height: "40px",
          width: "95%",
          padding: "2% 5% 2% 5%",
          margin: "10px",
          color:"black",
          background:
            "white",
          backgroundSize: "200% auto",
          transition: "background-position 0.5s",
          "&:hover": {
            backgroundPosition: "right center",
            boxShadow:
              "rgba(52, 71, 103, 0.4) 0rem 0.875rem 1.625rem -0.75rem, rgba(52, 71, 103, 0.15) 0rem 0.25rem 1.4375rem 0rem, rgba(52, 71, 103, 0.2) 0rem 0.5rem 0.625rem -0.3125rem",
            transform:
              "perspective(999px) rotateX(0deg) translate3d(0px, 0px, 0px)",
            transformOrigin: "50% 10px",
            willChange: "transform, boxShadow",
            transition: "transform 200ms ease-out",
          },
        }}
      >
        BUY NOW
      </Button>
      <Divider sx={{ marginTop:"10%", color:"white"}}  />

      <div style={{ display: 'flex', padding:"1%" }}>
        <div style={{ flex: 1,  marginTop:"10%" }}>
          <Typography  variant="h6"><CheckIcon sx={{ marginRight: '0.8em' }}/>Complete Code</Typography>
          
        </div>
      </div>
      <div style={{ display: 'flex', marginTop:"10%" }}>
        <div style={{ flex: 1 }}>
          <Typography  variant="h6"><CheckIcon sx={{ marginRight: '0.8em' }}/>Full Documentation</Typography>
          
        </div>
      </div>
      <div style={{ display: 'flex', marginTop:"10%" }}>
        <div style={{ flex: 1 }}>
          <Typography  variant="h6"><CheckIcon sx={{ marginRight: '0.8em' }}/>Projects-1</Typography>
          
        </div>
      </div>
      <div style={{ display: 'flex', marginTop:"10%" }}>
        <div style={{ flex: 1 }}>
          <Typography  variant="h6"><CheckIcon sx={{ marginRight: '0.8em' }}/>Team Size-1</Typography>
          
        </div>
      </div>
      <div style={{ display: 'flex', marginTop:"10%" }}>
        <div style={{ flex: 1 }}>
          <Typography  variant="h6"><CheckIcon sx={{ marginRight: '0.8em' }}/>Support</Typography>
          
        </div>
      </div>
      <div style={{ display: 'flex', marginTop:"10%" }}>
        <div style={{ flex: 1 }}>
          <Typography  variant="h6"><CheckIcon sx={{ marginRight: '0.8em' }}/>Free Updates- 6months</Typography>
          
        </div>
      </div>


    </Box>
  );
};

export default PricingCard;
