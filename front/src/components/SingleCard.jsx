import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setBook } from "../state/book";
import { Grid, Paper, Typography, ButtonBase } from "@material-ui/core";
import useStyles from "../utils/stylesSIngleCard";

export default function SingleCard({ id }) {
  console.log(id);
  const classes = useStyles();
  const dispatch = useDispatch();

  const libro = useSelector((store) => store.book);

  useEffect(() => {
    dispatch(setBook(id));
  }, []);

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
                  <Link to="/shop" style={{ color: "#0B73D4" }}>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Comprar
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
