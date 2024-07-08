import React from "react";
import { Typography, Box } from "@material-ui/core";

function TempContainer({ variant, temp, feels_like, humidity, pressure }) {
  return (
    <Box textAlign="center" marginBottom={3}>
      <Typography variant={variant} color="primary">
      {Math.round(((temp.temp-32)*5)/9)}° C
      </Typography>
      <Typography variant="h5" color="primary">
      Feels like {Math.round(((temp.feels_like-32)*5)/9)}° C
      </Typography>
      <Typography variant="h5" color="primary">
        Humidity: {humidity}%
      </Typography>
      <Typography variant="h5" color="primary">
        Pressure: {pressure} hPa
      </Typography>
    </Box>
  );
}

export default TempContainer;
