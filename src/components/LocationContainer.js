import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import dateBuilder from "../components/hooks/dateBuilder";
import { useStyles as useAppStyles } from '../styles/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    padding:theme.spacing(3),
    marginBottom:theme.spacing(-4),

  }
}));

function LocationContainer({ location, country }) {
  const classes = useStyles(); 

  return (
    <Box marginBottom={3}>
      <Container className='location-container'>
        <Typography variant='h2' align='center' color='primary'>
          {location}, {country}
        </Typography>
        <Typography className={classes.root} variant='h4' align='center' color='secondary'>
          {dateBuilder(new Date())}
        </Typography>
      </Container>
    </Box>
  );
}

export default LocationContainer;
