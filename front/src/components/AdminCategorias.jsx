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
  Button,
  TextField,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategorias } from "../state/categorias";

import { Folder, GroupAddSharp, Delete } from "@material-ui/icons";

import { useStyles } from "../utils/stylesAdminUsers";

export const AdminCategorias = ({ categorias }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  /*   const categoria = useSelector((state) => state.categorias); */

  const classes = useStyles();

  useEffect(() => {
    dispatch(setCategorias());
  }, []);

  const handleDelete = (id) => {};

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/admin/categorias", { name: input });
    dispatch(setCategorias());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
          label="ingrese nombre"
          name="categoria"
          autoFocus
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Agreagar
        </Button>
      </form>

      <div>
        <Grid item xs={12} md={6} style={{ paddingLeft: 20 }}>
          <Typography variant="h6" className={classes.title}>
            Users
          </Typography>
          <div className={classes.demo}>
            <List>
              {categorias &&
                categorias.map((categoria, i) => (
                  <ListItem key={i}>
                    <ListItemAvatar>
                      <Avatar>
                        <Folder />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={categoria.name} />
                    <ListItemSecondaryAction
                      style={{ paddingRight: 65 }}
                      /*    onClick={() => handleAdmin(categoria._id)} */
                    >
                      <IconButton edge="end" aria-label="add-admin">
                        <GroupAddSharp />
                      </IconButton>
                    </ListItemSecondaryAction>
                    <ListItemSecondaryAction
                    /*  onClick={() => handleDelete(categoria._id)} */
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
    </>
  );
};
