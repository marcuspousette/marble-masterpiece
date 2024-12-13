import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import logo from "../assets/logo-full-white.png";
import { useNavigate, Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavHashLink } from "react-router-hash-link";

const drawerWidth = 240;
const navItems = [
  { text: "Om mig", path: "/#about" },
  { text: "Projekt", path: "/#projects" },
  { text: "Omdömen", path: "/#reviews" },
  { text: "Kontakt", path: "/#contact" },
];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src={logo}
        alt="Techover"
        width={"150px"}
        style={{ margin: "8px 0px" }}
      />
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={NavHashLink}
              to={item.path}
              smooth
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={2}>
        <Container>
          <Toolbar
            sx={{
              padding: "0px !important",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to="/">
              <img src={logo} alt="Techover" width={"150px"} />
            </Link>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "background.default",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
