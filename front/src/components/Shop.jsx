import React, { useEffect, useState } from "react";
import { Grid, Paper, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Delete, LocalSee } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { setCarritoLogin } from "../state/comprar";
import { setCarrito } from "../state/carrito";
import axios from "axios";

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
    marginTop: "10px",
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
  h6: {
    fontSize: "14px",
  },
}));

export default function Shop({ changeMode, id }) {
  const carrito = useSelector((store) => store.carrito);
  
  const dispatch = useDispatch();
  const classes = useStyles();
  const [libros, setLibros] = useState([]);

  const handleClick = () => {
    let userId = localStorage.getItem("userId");
    let productos = carrito.map((book) => {
      return book._id;
    });
   
    dispatch(setCarritoLogin({ userId, productos }));
  };

  useEffect(() => {
    let userId = localStorage.getItem("userId");
    let carritoCompras = JSON.parse(localStorage.getItem("book"));
    if (userId) {
      console.log("estoy en el primer if")
      axios.get(`/api/carrito/${userId}`).then((res) => {
        const libros = res.data.productos.map((e)=> e.producto)
        dispatch(setCarrito(libros));
      });
    }
    if (!userId && carritoCompras) {
      console.log("estoy en el segundo")
      dispatch(setCarrito(carritoCompras));
    }

    setLibros(carrito);
  }, []);

  /*  useEffect(() => {
    dispatch(setCarrito(libros));
  }, []); */
  console.log(carrito);
  return (
    <div className="color">
      <div style={{ marginTop: "50px" }}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid container style={{ width: 500 }}>
              <Grid className={classes.image}></Grid>
              <Grid item xs></Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography className={classes.h6}>Precio</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography className={classes.h6}>Unidades</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography className={classes.h6}>Total</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography className={classes.h6}>Eliminar</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        {/*  vista de los productos del carrito */}

        <Paper className={classes.paper}>
          {carrito && carrito.map((libro) => {
                  return (
                    <Grid container key={libro._id}>
                      <Grid container style={{ width: 500 }}>
                        <Grid className={classes.image}>
                          <img
                            className={classes.img}
                            alt="complex"
                            src={libro.imagen}
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography className={classes.h6}>
                            {libro.titulo}
                          </Typography>
                          <Typography className={classes.h6}>
                            {libro.autor}
                          </Typography>
                          <Typography className={classes.h6}>
                            Disponible: {libro.stock} unidades
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography className={classes.h6}>
                              $ {libro.precio}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid
                            item
                            xs
                            container
                            direction="column"
                            spacing={2}
                          >
                            <Grid item xs>
                              <input
                                type="number"
                                name=""
                                id=""
                                min="1"
                                max={libro.stock}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid
                            item
                            xs
                            container
                            direction="column"
                            spacing={2}
                          >
                            <Grid item xs>
                              <Typography className={classes.h6}>
                                ${libro.stock * libro.precio}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid
                            item
                            xs
                            container
                            direction="column"
                            spacing={2}
                          >
                            <Grid item xs>
                              <IconButton
                                edge="end"
                                aria-label="delete"
                                className={classes.h6}
                              >
                                <Delete />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                }
              )}
        </Paper>

        {/*  vista del resultado final del carrito */}

        <Paper className={classes.paper}>
          <Grid container>
            <Grid container style={{ width: 500 }}>
              <Grid className={classes.image}></Grid>
              <Grid item xs></Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    variant="body2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClick()}
                  >
                    Comprar
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography className={classes.h6}>Total</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={8}>
                <Grid item xs>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    className={classes.h6}
                  >
                    <Delete />
                    Vaciar Carrito
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
