import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../state/books";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";
import useStyles from "../utils/stylesHome";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@material-ui/core";

export default function Home() {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const search = useSelector((state) => state.search);

  const [pageNumber, setPageNumber] = useState(0);

  const booksPerPage = 6;
  const pagesVisited = pageNumber * booksPerPage;

  const handleClick = (id) => {
    return history.push(`/SingleCard/${id}`);
  };

  useEffect(() => {
    dispatch(setBooks());
  }, []);

  let options = search.length > 0 ? search : books;

  const displayBooks = options
    .slice(pagesVisited, pagesVisited + booksPerPage)
    .map((card) => {
      return (
        <Grid item key={card._id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              style={{ padding: 20 }}
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
                Agregar al carrito
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });

  const pageCount = Math.ceil(books.length / booksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <React.Fragment>
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
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {displayBooks}
            <ReactPaginate
              previousLabel={"Previos"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
