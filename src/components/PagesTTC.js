import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const PagesTTC = () => {
  return (
    <Box
      sx={{
        color: "black",
      }}
    >
      <Grid container md={12} lg={12} padding="5%" sx={{ minWidth: "35vw" }}>
        <Grid item md={4} lg={4}>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            spacing={2}
            padding="10%"
            paddingRight="2.5em"
          >
            <Grid item>
              <Typography variant="h6" fontWeight="bold">
                Landing Pages
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ minWidth: "12em" }}>
                <List>
                  <ListItem sx={{ p: "7px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    display:"block",
                    transition: "all 300ms linear 0s"
                  }  }}>
                    <ListItemText primary="Coworking" />
                  </ListItem>
                  <ListItem sx={{ p: "4px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="Rental" />
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" fontWeight="bold" >
                Company
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ minWidth: "9em" }}>
                <List>
                  <ListItem sx={{ p: "4px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="About Us" />
                  </ListItem>
                  <ListItem sx={{ p: "4px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="Pricing" />
                  </ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} lg={4} display="flex">
          <Divider
            orientation="vertical"
            sx={{ p: "0px", m: "0px" }}
            flexItem
          />
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            spacing={2}
            padding="10%"
            paddingRight="2.5em"
          >
            <Grid item>
              <Typography variant="h6" fontWeight="bold">
                Support
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ minWidth: "9em" }}>
                <List>
                  <ListItem sx={{ p: "7px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="Help Center" />
                  </ListItem>
                  <ListItem sx={{ p: "4px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="Contact Us" />
                  </ListItem>
                  <ListItem sx={{ p: "4px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="FAQ" />
                  </ListItem>
                  <ListItem sx={{ p: "4px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="Privacy" />
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" fontWeight="bold">
                Apps
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ minWidth: "9em" }}>
                <List>
                  <ListItem sx={{ p: "4px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="Desktop App" />
                  </ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} lg={4} display="flex">
          <Divider
            orientation="vertical"
            sx={{ p: "0px", m: "0px" }}
            flexItem
          />
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            spacing={2}
            padding="10%"
            paddingRight="2.5em"
          >
            <Grid item>
              <Typography variant="h6" fontWeight="bold">
                Blogs
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ minWidth: "9em" }}>
                <List>
                  <ListItem sx={{ p: "7px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="Single article" />
                  </ListItem>
                  <ListItem sx={{ p: "4px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="Author" />
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" fontWeight="bold">
                Extra
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ minWidth: "9em" }} >
                <List>
                  <ListItem sx={{ p: "4px", "&:hover":{
                    borderRadius:"0.5em",
                    backgroundColor: "rgb(240, 242, 245)",
                    color:"rgb(52, 71, 103)",
                    display:"block",
                    transition: "all 300ms linear 0s"
                  } }}>
                    <ListItemText primary="Virtual reality" />
                  </ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PagesTTC;
