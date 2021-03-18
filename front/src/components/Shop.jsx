import React, { useEffect, useState } from "react";
import { Grid, Paper, ButtonBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
/* import { setCarrito } from "../state/carrito"; */

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    maxWidth: 1000,
  },
  image: {
    width: 80,
    maxHeight: 100,
    paddingBottom: 20,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Shop({ changeMode, id }) {
  const classes = useStyles();
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    // dispatch(setBook(id));
    setCarrito(JSON.parse(localStorage.getItem("book")));
  }, []);

  return (
    <div className="color">
      <div style={{ marginTop: "50px" }}>
        <Paper className={classes.paper}>
          {carrito.map((libro) => (
            <Grid container key={libro._id}>
              <Grid container style={{ width: 500 }} justify="space-around">
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={libro.imagen}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h6">
                      {libro.titulo}
                    </Typography>
                    <Typography gutterBottom variant="h6">
                      $ {libro.precio}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Autor:{libro.autor}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Link to="/shop">
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                        Comprar
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Paper>
      </div>
    </div>
  );
}
