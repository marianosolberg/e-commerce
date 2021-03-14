import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useStyles from "../utils/stylesNavbar";
import "fontsource-roboto";
import Avatar from "@material-ui/core/Avatar";

export default function Home({ handleChange }) {
  const token = localStorage.getItem("token");
  const nombreUsuario = localStorage.getItem("user");
  const user = useSelector((store) => store.user);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
      console.log("estamos en logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
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
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

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
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              color="white"
            >
              e-Books
            </Typography>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
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
              onChange={handleChange}
            />
          </div>
          <div className={classes.grow} />
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
            >
              <Badge badgeContent={0} color="secondary"></Badge>
              <ShoppingCartIcon onClick={() => history.push("/shop")} />
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
                <Avatar alt="Remy Sharp" src="jesu.jpeg" />
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
