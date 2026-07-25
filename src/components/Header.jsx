import React, { useState } from "react";
import clsx from "clsx";

import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdConstruction } from "react-icons/md";
import { CiCircleInfo, CiPhone, CiImageOn } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import {
  Drawer,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ListItemButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "../assets/images/logo/logo.svg";
import MenuIcon from "../assets/images/icons/menu-icon.svg";

const useStyles = makeStyles(() => ({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const drawerList = (anchor) => (
    <div
      className={clsx(
        classes.list, 
        {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      }),
      "nav-mobile"}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="nav-cross-wrapper">
        <button
          type="button"
          className="nav-cross"
          onClick={toggleDrawer(anchor, false)}
          aria-label="Close menu"
        >
          <RxCross2 size="1.5rem" color="white"/>
        </button>
      </div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" className="text-center">
    <Link
      to="/"
      onClick={toggleDrawer(anchor, false)}
    >
      <img
        src={Logo}
        alt="NazConCorp Logo"
        className="img-fluid mobile-drawer-logo"
        width="260"
        height="75"
      />
    </Link>
  </ListSubheader>
        }
      >
        <Divider className="mt-4" />

        {[
          { text: "Home", path: "/", icon:<GoHome color="white" size={"1.5rem"}/> },
          { text: "Services", path: "/services", icon:<MdConstruction color="white" size={"1.5rem"}/> },
          { text: "Portfolio", path: "/portfolio", icon:<CiImageOn color="white" size={"1.5rem"}/> },
          { text: "About Us", path: "/about-us", icon:<CiCircleInfo color="white" size={"1.5rem"}/> },
          { text: "Contact Us", path: "/contact-us", icon:<CiPhone color="white" size={"1.5rem"}/> },
          { text: "Request a Quote", path: "/contact-us#quote", button: true },
        ].map(({ text, path, icon, button }) => (
          button ? (
    <Link
      key={text}
      to={path}
      className="btn mobile-quote-btn"
      onClick={toggleDrawer(anchor, false)}
    >
      {text}
    </Link>
  ) : (
    <Link key={text} to={path}>
      <ListItemButton onClick={toggleDrawer(anchor, false)}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </Link>
  )
        ))}
      </List>
    </div>
  );

  React.useEffect(() => {
  const logoImage = new Image();
  logoImage.src = Logo;
}, []);

  return (
    <header className="header sticky">
      <Container className="header-container">
        <Navbar expand="xl">
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="NazConCorp Logo" className="img-fluid mlogo" width="300"
    height="90"/>
          </Navbar.Brand>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
           <Nav>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link header-nav-link${isActive ? " active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-link header-nav-link${isActive ? " active" : ""}`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `nav-link header-nav-link${isActive ? " active" : ""}`
              }
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `nav-link header-nav-link${isActive ? " active" : ""}`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `nav-link header-nav-link${isActive ? " active" : ""}`
              }
            >
              Contact Us
            </NavLink>
          </Nav>
          </Navbar.Collapse>
          <Link
            to="/contact-us#quote"
            className="btn quote-btn desktop-quote-btn"
          >
            Request a Quote
          </Link>

          <div>
            <img
              src={MenuIcon}
              alt="Menu"
              className="d-block d-xl-none menu-icon"
              onClick={toggleDrawer("right", true)}
            />
            <Drawer
              anchor="right"
              open={drawerState.right}
              onClose={toggleDrawer("right", false)}
              ModalProps={{
                keepMounted: true,
              }}>
                {drawerList("right")}
            </Drawer>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
