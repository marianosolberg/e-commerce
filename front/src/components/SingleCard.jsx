import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Navbar from "./Navbar";
import Link from "@material-ui/core/Link";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    maxWidth: 1000,
  },
  image: {
    width: 200,
    maxHeight: 400,
    paddingBottom: 20,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Home() {
  const classes = useStyles();
  const libro = useSelector((store) => store.book);

  return (
    <div className={classes.root} className="color">
      <Navbar />
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
                  <Link href="/shop">
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
