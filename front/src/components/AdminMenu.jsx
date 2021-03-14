import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import BuildIcon from "@material-ui/icons/Build";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function AdminMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="initial"
        onClick={handleClick}
      >
        Administador
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SupervisorAccountIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Administar Usuarios" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <BookmarksIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Agregar/quitar productos" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <BuildIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Modificar páginas" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
