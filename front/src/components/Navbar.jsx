import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  IconButton,
  Avatar,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import useStyles from "../utils/stylesNavbar";
import MenuCategorias from "../components/MenuCategorias";

import Search from "./Search"; // importo el nuevo modulo.
import { Route } from "react-router-dom"; // importo Route para renderizar el modulo.

import AdminMenu from "./AdminMenu";

export default function Navbar({ changeMode }) {
  const token = localStorage.getItem("token");
  const nombreUsuario = localStorage.getItem("user");
  const isAdmin = localStorage.getItem("isAdmin");

  console.log(isAdmin);

  console.log(token);

  console.log(nombreUsuario);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [categorias, setCategorias] = useState([]);

  const history = useHistory();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    if (token) {
      history.push("/logout");
    }
    if (!nombreUsuario && !token) {
      history.push("/login");
    }
    if (nombreUsuario) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isAdmin");
      history.push("/");
    }
  };

  const handleRegister = () => {
    if (nombreUsuario) {
      history.push("/profile");
    } else {
      history.push("/register");
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogout}>{token ? "Logout" : "Login"}</MenuItem>
      <MenuItem onClick={handleRegister}>
        {nombreUsuario ? "Profile" : "Register"}
      </MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {nombreUsuario ? (
            <Avatar alt="Remy Sharp" src="cata.jpeg" />
          ) : (
            <AccountCircle />
          )}
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );

  useEffect(() => {
    axios
      .get("/api/categorias")
      .then((res) => res.data)
      .then((data) => setCategorias(data));
  }, []);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img src="logo.png" alt="logo" className={classes.logo} />
          </IconButton>

          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            color="initial"
          >
            <IconButton
              aria-label="go to home"
              color="inherit"
              style={{ padding: 20 }}
              onClick={() => history.push("/")}
            >
              e-Books
            </IconButton>
          </Typography>

          <div className={classes.search}>
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Busqueda"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              name="titulo"
            /> */}
            <Route render={({ history }) => <Search history={history} />} />
          </div>
          <MenuCategorias categorias={categorias} />
          <div className={classes.grow} />
          {isAdmin == "true" ? <AdminMenu /> : null}

          <div className={classes.sectionDesktop}>
            <Typography
              className={classes.title}
              variant="h4"
              noWrap
              style={{ padding: 10 }}
              color="inherit"
            >
              {nombreUsuario}
            </Typography>
            <IconButton
              aria-label="show  new notifications"
              color="inherit"
              style={{ padding: 20 }}
              onClick={changeMode}
            >
              <Badge badgeContent={0} color="secondary"></Badge>
              <Brightness4Icon />
            </IconButton>
            <IconButton
              aria-label="show  new notifications"
              color="inherit"
              style={{ padding: 20 }}
              onClick={() => history.push("/shop")}
            >
              <Badge badgeContent={0} color="secondary"></Badge>
              <ShoppingCartIcon />
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {nombreUsuario ? (
                <Avatar alt="Remy Sharp" src="cata.jpeg" />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
