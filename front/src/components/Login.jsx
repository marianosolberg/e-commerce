import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
/* import Alert from "@material-ui/lab/Alert"; */

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useStyles from "../utils/stylesLogin";
import { Link } from "react-router-dom";

/* function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://plataforma5.la/" target="_blank">
        Plataforma5
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
} */

export default function Login({ handleSubmit, handleChange }) {
  const history = useHistory();
  const classes = useStyles();
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Ingresar
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth
                name="password"
                label="contaseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
                label="Recordarme"
              />
              <GoogleLogin
                //aca copiamos el clientid que nos dio google
                clientId="756506785135-p53gv0akjfae7aec87u3ht6kh04uq1dd.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                onClick={() => history.push("/")}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Ingresar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Olvidaste tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    No tenes una cuenta, Registrate
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>{/*  <Copyright /> */}</Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
