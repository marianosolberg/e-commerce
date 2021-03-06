import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBook } from "../state/book";
import { setCarrito } from "../state/carrito";
import {setCarritoLogin, setComprar} from "../state/comprar";

import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
 
} from "@material-ui/core";

import useStyles from "../utils/stylesSIngleCard";

export default function SingleCard({ id }) {
  console.log(id);
  const classes = useStyles();
  const dispatch = useDispatch();

  // const history = useHistory();

  const libro = useSelector((store) => store.book);
  const carrito = useSelector((store) => store.carrito);

  useEffect(() => {
    dispatch(setBook(id));
    localStorage.setItem("book", JSON.stringify(carrito));
  }, [carrito]);

  const handleClick = (libro) => {
    dispatch(setCarrito(libro));
    let carritoCompras = libro
     let userId= localStorage.getItem("userId")
      dispatch(setCarritoLogin({userId, carritoCompras}));
    };
    


  return (
    <div className={classes.root}>
      <div style={{ marginTop: "50px" }}>
        <Paper className={classes.paper}>
          <Typography gutterBottom variant="h3" align="center">
            {libro.titulo}
          </Typography>
          <Grid container>
            <Grid container style={{ width: 500 }} justify="space-around">
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={libro.imagen} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" gutterBottom>
                    {libro.reseqna}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Autor:{libro.autor}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    $ {libro.precio}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClick(libro)}
                  >
                    agregar a carrito
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
