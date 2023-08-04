import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// const bull = (
//   <Box
//     component="span"
//     sx={{
//       display: "inline-block",
//       mx: "2px",
//       transform: "scale(0.8)",
//       opacity: "0.8",
//     }}
//   >
//     •
//   </Box>
// );

export default function BasicCard({ Count, Title, Text1 }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        // maxWidth: "70%",
        background: "transparent",
        borderColor: "transparent",
        boxShadow:"none",
        margin:"0px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "4rem",
            fontFamily: "'Roboto Slab', sans-serif",
            color: "rgb(26, 115, 232)",
            fontWeight: "700",
            display:"flex",
            justifyContent:"center"
          }}
          gutterBottom
        >
          {Count}
        </Typography>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            // color: "rgb(52, 71, 103)",
            color: "linear-gradient(195deg, rgb(73,163,241), rgb(26,115,232))",
            fontWeight: "700",
            display:"flex",
            justifyContent:"center"
          }}
          gutterBottom
        >
          {Title}
        </Typography>
        <Typography
        align="center"
          sx={{
            fontSize: "1.2rem",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "rgb(123, 128, 154)",
            fontWeight: "300",
            display:"flex",
            justifyContent:"center"
          }}
        >
          {Text1}
        </Typography>
      </CardContent>
    </Card>
  );
}
