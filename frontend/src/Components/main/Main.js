import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Person2Icon from '@mui/icons-material/Person2';
import EngineeringIcon from '@mui/icons-material/Engineering';

import Head from "./MainHeader";
import backgroundImage from './green-field.jpg'; // Update the path to your image

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust the transparency here (0.5 is 50% opacity)
  },
  button: {
    margin: theme.spacing(2),
    minWidth: 200,
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head />
      <Grid container spacing={3} justify="center" style={{ marginTop: "2em" }}>
        <Grid item xs={2} sm={2} md={4}>
          <Paper elevation={5} className={classes.paper}>
            <Link to="/yevin" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<Person2Icon />}
              >
                Admin
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={2} sm={2} md={4}>
          <Paper elevation={3} className={classes.paper}>
            <Link to="/wHome" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<EngineeringIcon />}
              >
                Workers
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
