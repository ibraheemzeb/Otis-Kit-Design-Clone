import React from 'react'

const PricingCard = () => {
  return (
    <Box
    sx={{
      // background: "rgb(248, 249, 250)",
      color: "rgb(52, 71, 103)",
      borderRadius: "0.75rem",
      padding: "8%",
    }}
  >
    <Typography
      gutterBottom
      component="div"
      sx={{
        fontSize: "1.5rem",
        fontWeight: "700",
        display: "flex",
        alignItems: "center",
      }}
    >
      {heading}
    </Typography>
    <Typography
      gutterBottom
      component="div"
      color="text.secondary"
      sx={{
        fontSize: "1.35rem",
        fontWeight: "520",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ marginRight: "0.5rem" }}>
        <ScheduleRoundedIcon />
      </Box>
      {time}
    </Typography>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ fontSize: "1.45rem", paddingTop:"3%", paddingBottom:"3%" }}
    >
      {text}
    </Typography>
    <Typography letterSpacing={"-0.99062em"}>
      <Star/> <Star/> <Star/> <Star/> <Star/>
    </Typography>
  </Box>
  )
}

export default PricingCard