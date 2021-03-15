import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";

import GroupAddSharpIcon from "@material-ui/icons/GroupAddSharp";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import { setUsers } from "../state/users";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export default function AdminUsers({ changeMode }) {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsers());
  }, []);

  const classes = useStyles();

  const handleDelete = (id) => {
    axios.delete(`/api/admin/users/${id}`);
    dispatch(setUsers());
  };

  const handleAdmin = (id) => {
    axios.put(`/api/admin/users/${id}`, { isAdmin: true });

    // .then(user => user.data)
  };

  return (
    <div>
      <Navbar changeMode={changeMode} />
      <Grid item xs={12} md={6} style={{ paddingLeft: 20 }}>
        <Typography variant="h6" className={classes.title}>
          Users
        </Typography>
        <div className={classes.demo}>
          <List>
            {users.map((usuario, i) => (
              <ListItem key={i}>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={usuario.email} />
                <ListItemSecondaryAction
                  style={{ paddingRight: 65 }}
                  onClick={() => handleAdmin(usuario._id)}
                >
                  <IconButton edge="end" aria-label="add-admin">
                    <GroupAddSharpIcon />
                  </IconButton>
                </ListItemSecondaryAction>
                <ListItemSecondaryAction
                  onClick={() => handleDelete(usuario._id)}
                >
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    </div>
  );
}
