import React, { useEffect } from "react";
import { Grid, Link, Paper, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setBook } from "../state/book";

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
}));

function getSteps() {
  return ["PASO 1", "PASO 2", "PASO 3"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Comprar ahora ..";
    case 1:
      return "Elegi medio de Pago";
    case 2:
      return "Donde te lo Enviamos";
    default:
      return "elegi una opcion valida";
  }
}

export default function Shop() {
  const libro = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  useEffect(() => {
    dispatch(setBook("6049144d5b62059f921a35b8"));
  }, []);

  return (
    <div className={classes.root}>
      <Navbar />
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography gutterBottom variant="subtitle1">
            {libro.titulo}
          </Typography>
          <Grid container>
            <Grid container style={{ width: 500 }}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={libro.imagen} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={4}>
                <Grid item xs>
                  <Typography variant="body2" gutterBottom>
                    {libro.reseqna}
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
                <Typography variant="subtitle1">{libro.precio}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
