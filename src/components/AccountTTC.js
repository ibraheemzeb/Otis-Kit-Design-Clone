import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AccountTTC = () => {
  return (
    <Box
      sx={{
        color: "black",
      }}
    >
      <Grid container md={12} lg={12} padding="5%">
        <Grid item md={4} lg={4}>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            spacing={2}
            padding="10%"
            paddingRight="2.5em"
          >
            {/* <Grid item>
              <Typography variant="h6" fontWeight="bold">
                Landing Pages
              </Typography>
            </Grid> */}
            <Grid item>
              <Typography variant="body1">
                <List>
                  <ListItem sx={{ p: "7px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    // display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="SignIn" />
                    <ArrowForwardIosIcon fontSize="small" sx={{ml: "7em"}}/>
                  </ListItem>
                  <ListItem sx={{ p: "4px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    // display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="SignUp" />
                    <ArrowForwardIosIcon fontSize="small" sx={{ml: "7em"}}/>
                  </ListItem>
                  <ListItem sx={{ p: "4px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    // display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="Reset Password" />
                    <ArrowForwardIosIcon fontSize="small" />
                  </ListItem>
                </List>
              </Typography>
            </Grid>
           
            
          </Grid>
        </Grid>
        
      </Grid>
    </Box>
  )
}

export default AccountTTC