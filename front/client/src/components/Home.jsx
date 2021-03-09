import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Navbar from "./Navbar";
import { createMuiTheme } from "@material-ui/core/styles";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://plataforma5.la/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((tema) => ({
  icon: {
    marginRight: tema.spacing(2),
  },
  heroContent: {
    backgroundColor: tema.palette.primary,
  },
  heroButtons: {
    marginTop: tema.spacing(4),
  },
  cardGrid: {
    paddingTop: tema.spacing(8),
    paddingBottom: tema.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: tema.palette.primary,
    padding: tema.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <CardMedia
            className={classes.cardMedia}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrjd16koqLwTidVypEAMnsF9YVksJlSJUEg&usqp=CAU"
            title="Image title"
            height="30px"
          />
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Favorito del mes
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Este es nuestro libro mas valorado, Por eso te lo recomendamos.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link href="/shop">
                    <Button variant="contained" color="primary">
                      Comprar
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/singlecard">
                    <Button variant="outlined" color="primary">
                      Mas Info
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrjd16koqLwTidVypEAMnsF9YVksJlSJUEg&usqp=CAU"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      TITULO
                    </Typography>
                    <Typography>INFORMACION DEL LIBRO</Typography>
                  </CardContent>
                  <CardActions>
                    <Link href="/singlecard">
                      <Button size="small" color="primary">
                        DETALLE
                      </Button>
                    </Link>
                    <Link href="/shop">
                      <Button size="small" color="primary">
                        COMPRAR
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Gracias por visitar nuestra pagina
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
