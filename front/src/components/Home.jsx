import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../state/books";
import { Link, useHistory } from "react-router-dom";
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
import Navbar from "./Navbar";
import { createMuiTheme } from "@material-ui/core/styles";
import { setBook } from "../state/book";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {/* <Link color="inherit" href="https://plataforma5.la/"> */}
      Your Website
      {/* </Link>{" "} */}
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
    width: "65%",
    marginTop: "15px",
    margin: "auto",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: tema.palette.primary,
    padding: tema.spacing(6),
  },
}));

export default function Home() {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleClick = (id) => {
    // dispatch(setBook(id));  604ac406ed088172721807d9
    return history.push(`/SingleCard/${id}`);
  };

  useEffect(() => {
    dispatch(setBooks());
  }, []);
  console.log(books);
  return (
    <React.Fragment>
      <Navbar />
      <CssBaseline />

      <main className="color">
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              BIENVENIDOS A E-BOOKS
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              NUESTRA MEJOR SELECCION DE LIBROS PARA VOS
            </Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to="/shop">
                    <Button variant="contained" color="primary">
                      Comprar
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/singlecard">
                    <Button variant="outlined" color="primary">
                      Mas Info
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {books.map((card) => (
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imagen}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.titulo}
                    </Typography>
                    <Typography>PRECIO: ${card.precio}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleClick(card._id)}
                    >
                      DETALLE
                    </Button>

                    <Button
                      size="small"
                      color="primary"
                      onClick={() => history.push("/shop")}
                    >
                      COMPRAR
                    </Button>

                    <Button
                      size="small"
                      color="primary"
                      onClick={() => history.push("/shop")}
                    >
                      Agregar al carrito
                    </Button>
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
