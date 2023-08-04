import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import { spacing } from '@mui/system';


const Footer = () => {
  return (
    <Box sx={{ position: "absolute", marginTop: "10%", width: "90%" }}>
      <footer>
        <Grid
          container
          sx={{ backgroundColor: "rgb(240, 242, 245)", padding: "2rem", color:"rgb(52, 71, 103)" }}
        >
          <Grid item xs={12} sm={4}>
            {/* First Column */}
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              alignContent="right"
              spacing={2}
            >
              <Grid item>
                <img src="logo.png" alt="Logo" style={{ width: "40px" }} />
              </Grid>
              <Grid item>
                <Typography variant="h6" fontWeight="bold">
                  Otis Kit Pro
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <FacebookIcon sx={{ margin: "0 0.4em" }} />
                  <TwitterIcon sx={{ margin: "0 0.4em" }} />
                  <GitHubIcon sx={{ margin: "0 0.4em" }} />
                  <YouTubeIcon sx={{ margin: "0 0.4em" }} />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
            {/* Second Column */}
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item>
                <Typography variant="h6" fontWeight="bold">
                  Company
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <List>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="About Us" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Freebies" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Premium" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Tools" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Blog" />
                    </ListItem>
                  </List>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
            {/* Third Column */}
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item>
                <Typography variant="h6" fontWeight="bold">
                  Resources
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                <List>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Illustrations" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Bits & Snippets" />
                    </ListItem >
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Affiliate" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Program" />
                    </ListItem>
                  </List>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
            {/* Fourth Column */}
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item>
                <Typography variant="h6" fontWeight="bold">
                  Help & Support
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                <List >
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Contact Us"  />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Knowledge" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Center" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Custom" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Development" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Sponsorships" />
                    </ListItem >
                  </List>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
            {/* Fifth Column */}
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item>
                <Typography variant="h6" fontWeight="bold">
                  Legal
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                <List>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Terms & Conditions" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Privacy Policy" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="Licenses" />
                    </ListItem>
                    <ListItem sx={{p: 0}}>
                      <ListItemText primary="(EULA)" />
                    </ListItem>
                  </List>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {/* Copyright */}
            <Typography variant="body2" align="center" mt={4}>
              All rights reserved. Copyright &copy; {new Date().getFullYear()}{" "}
              Otis Kit by Creative Tim.
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </Box>
  );
};

export default Footer;
