import React, { useState } from "react";
import CardFlip from "react-card-flip";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { Button, Typography } from "@mui/material";
import { Scale } from "@mui/icons-material";
import "./FlipCard.css"

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      infinite={false}
      flipSpeedBackToFront={0.6}
      flipSpeedFrontToBack={0.6}
    >
      {/* Front of the card */}
      <div
        onMouseEnter={handleFlip}
        className="front"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              " linear-gradient(195deg, rgba(73, 163, 241, 0.85), rgba(73, 163, 241, 0.85))",
            zIndex: 1,
            borderRadius: "1rem",
          }}
        />
        <div
          style={{
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            padding: "27% 11% 50% 11%",
          }}
        >
          <TouchAppIcon sx={{ fontSize: 50, marginBottom: "10%" }} />
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: "700", fontFamily: "'Roboto SLab', sans-serif" }}
            gutterBottom
          >
            Feel the Material Kit
          </Typography>
          <Typography
            align="center"
            sx={{
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontSize: "1.25rem",
              opacity: "0.8",
              fontWeight: "300",
            }}
          >
            All the MUI components that you need in a development have been
            re-designed with the new look.
          </Typography>
        </div>
      </div>

      {/* Back of the card */}
      <div
        onMouseLeave={handleFlip}
        // style={{
        //   position: "relative",
        //   padding: "20px",
        //   color: "white",
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   backgroundImage: `url(${process.env.PUBLIC_URL}/rotating-card-bg-back.jpeg)`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   borderRadius: "1rem",
        //   MinHeight: "61vh",
        //   // maxHeight: "61vh",
        //   height: "auto",
        //   MaxWidth: "85%",
        // }}
        className="back"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              " linear-gradient(195deg, rgba(73, 163, 241, 0.85), rgba(73, 163, 241, 0.85))",
            zIndex: 1,
            borderRadius: "1rem",
          }}
        />
        <div
          style={{
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            padding: "40% 11% 50% 11%",
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: "700", fontFamily: "'Roboto SLab', sans-serif" }}
            gutterBottom
          >
            Discover More
          </Typography>
          <Typography
            align="center"
            sx={{
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontSize: "1.25rem",
              opacity: "0.8",
              fontWeight: "300",
            }}
            gutterBottom
          >
            You will save a lot of time going from prototyping to
            full-functional code because all the elements are implemented.
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "white",
              color: "black",
              fontWeight: "bold",
              borderRadius: "0.5rem",
              marginTop: "5%",
            }}
          >
            Start With Header
          </Button>
        </div>
      </div>
    </CardFlip>
  );
};

export default FlipCard;
