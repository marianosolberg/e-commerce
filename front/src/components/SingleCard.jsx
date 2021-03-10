import React from "react";
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
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 200,
    height: 400,
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

  return (
    <div className={classes.root}>
      <Navbar />
      <Paper className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://imagessl8.casadellibro.com/a/l/t7/48/9788479537548.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  El Secreto Para Jovenes
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Atrapante como pocos
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 520
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
            <Grid item>
              <Typography variant="subtitle1">$1500.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
