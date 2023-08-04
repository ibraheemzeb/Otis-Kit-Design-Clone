import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactsIcon from "@mui/icons-material/Contacts";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import ArticleIcon from "@mui/icons-material/Article";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PagesTTC from "./PagesTTC";
import AccountTTC from "./AccountTTC";
import SectionsTTC from "./SectionsTTC";
import DocsTTC from "./DocsTTC";
// import { withStyles } from "@mui/styles";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;
const navItems = [
  {
    name: "Pages",
    icon: <DashboardIcon color="action" />,
    icon1: <KeyboardArrowDownIcon color="action" />,
  },
  {
    name: "Account",
    icon: <ContactsIcon color="action" />,
    icon1: <KeyboardArrowDownIcon color="action" />,
  },
  {
    name: "Sections",
    icon: <ViewDayIcon color="action" />,
    icon1: <KeyboardArrowDownIcon color="action" />,
  },
  {
    name: "Docs",
    icon: <ArticleIcon color="action" />,
    icon1: <KeyboardArrowDownIcon color="action" />,
  },
];

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    padding: "1% !important",
    maxWidth: "none !important",
    backgroundColor: "white !important",
    borderRadius: "1em !important",
    top: "1em !important",
  },
  ".MuiTooltip-arrow": {
    backgroundColor: "white !important",
  },
}));

function Header(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.icon} />
              <ListItemText primary={item.name} />
              <ListItemText primary={item.icon1} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          background: "rgba(255, 255, 255, 0.99);",
          color: "rgb(52, 71, 103)",
          borderRadius: "0.95rem",
          display: "flex",
          justifyContent: "center",
          width: "83.61%",
          maxWidth: "1700px",
          left: "50%",
          top: "2.25%",
          transform: "translateX(-50%)",
          minHeight: "50px",
          height: "76px",
          maxHeight: "90px",
          opacity: 1,
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              fontWeight: "700",
              fontSize: "1.1rem",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              letterSpacing: "0",
              display: { xs: "block", sm: "block" },
            }}
          >
            Otis Kit PRO
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          >
            {navItems.map((item) => (
              <Tooltip
                arrow
                placement={item.name === "Docs" ? "bottom-end" : "bottom-start"}
                classes={{ tooltip: classes.customTooltip }}
                // classes={{ tooltip: `${classes.customTooltip} ${css-0}` }}
                key={item.name}
                title={
                  item.name === "Pages" ? (
                    <PagesTTC />
                  ) : item.name === "Account" ? (
                    <AccountTTC />
                  ) : item.name === "Sections" ? (
                    <SectionsTTC />
                  ) : item.name === "Docs" ? (
                    <DocsTTC />
                  ) : null
                }
              >
                <Button
                  key={item.name}
                  sx={{
                    background: "transparent",
                    color: "#344767",
                    margin: "0px 8px",
                    opacity: "0.6",
                    fontWeight: "400",
                    textTransform: "none",
                    fontSize: "5.575rem",
                    letterSpacing: "0",
                  }}
                >
                  <Box sx={{ margin: "0px 2px 0px 8px", fontSize: "16px" }}>
                    {item.icon}
                  </Box>
                  <Box sx={{ margin: "0px 2px 8px 8px", fontSize: "16px" }}>
                    {item.name}
                  </Box>
                  <Box sx={{ margin: "0px 2px 0px 0px", fontSize: "16px" }}>
                    {item.icon1}
                  </Box>
                </Button>
              </Tooltip>
            ))}
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="small"
            href="https://material-ui.com/store/items/otis-kit-pro-material-kit-react/"
            target="_blank"
            rel="noreferrer"
            sx={{
              borderRadius: "0.5rem",
              fontWeight: "700",
              height: "40px",
              width: "120px",
              background:
                "linear-gradient(195deg, rgb(73,163, 241), rgb(26, 115, 232))",
              backgroundSize: "200% auto",
              transition: "background-position 0.5s",
              "&:hover": {
                backgroundPosition: "right center",
              },
            }}
          >
            Buy Now
          </Button>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "none",
                marginLeft: "2px",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

Header.propTypes = {
  window: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default Header;
