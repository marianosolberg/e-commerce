import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";

import { Folder, GroupAddSharp, Delete } from "@material-ui/icons";

import axios from "axios";
import { setUsers } from "../state/users";
import { useStyles } from "../utils/stylesAdminUsers";

export default function AdminUsers({ users }) {
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleDelete = (id) => {
    axios.delete(`/api/admin/users/${id}`);
    dispatch(setUsers());
  };

  const handleAdmin = (id) => {
    return axios.put(`/api/admin/users/${id}`, { isAdmin: true });
  };

  return (
    <div>
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
                    <Folder />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={usuario.email} />
                <ListItemSecondaryAction
                  style={{ paddingRight: 65 }}
                  onClick={() => handleAdmin(usuario._id)}
                >
                  <IconButton edge="end" aria-label="add-admin">
                    <GroupAddSharp />
                  </IconButton>
                </ListItemSecondaryAction>
                <ListItemSecondaryAction
                  onClick={() => handleDelete(usuario._id)}
                >
                  <IconButton edge="end" aria-label="delete">
                    <Delete />
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
