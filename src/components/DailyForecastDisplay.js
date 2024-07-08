import React from "react";
import { Card, CardContent, Typography, Grid, makeStyles } from "@material-ui/core";
import dateBuilder from "../components/hooks/dateBuilder";
import WeatherContainer from "./WeatherContainer";
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from "weather-icons-react";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Transparent background
    marginBottom: theme.spacing(2),
    minWidth: "150px", // Increase card width
  },
  cardWarm: {
    backgroundColor: "rgba(255, 229, 180, 0.6)", // Transparent warm background
    marginBottom: theme.spacing(2),
    minWidth: "150px", // Increase card width
  },
  cardCold: {
    backgroundColor: "rgba(179, 205, 224, 0.6)", // Transparent cold background
    marginBottom: theme.spacing(2),
    minWidth: "150px", // Increase card width
  },
  weatherIcon: {
    fontSize: "3rem",
    marginBottom: theme.spacing(1),
  },
  date: {
    marginBottom: theme.spacing(1),
  },
  temp: {
    marginBottom: theme.spacing(0.5),
  },
}));

const getWeatherIcon = (weather, classes) => {
  switch (weather) {
    case "Sunny":
      return <WiDaySunny className={classes.weatherIcon} />;
    case "Cloudy":
      return <WiCloudy className={classes.weatherIcon} />;
    case "Rain":
      return <WiRain className={classes.weatherIcon} />;
    case "Snow":
      return <WiSnow className={classes.weatherIcon} />;
    case "Thunderstorm":
      return <WiThunderstorm className={classes.weatherIcon} />;
    default:
      return <WiDaySunny className={classes.weatherIcon} />;
  }
};

function DailyForecastDisplay({ weather, day }) {
  const classes = useStyles();
  let date = dateBuilder(new Date(day.dt * 1000));

  return (
    <Card
      variant="outlined"
      className={weather.main.temp > 70 ? classes.cardWarm : classes.cardCold}
    >
      <CardContent>
        <Grid container direction="column" alignItems="center">
          <Grid item className={classes.date}>
            <Typography variant="h6" color="primary">
              {date}
            </Typography>
          </Grid>
          <Typography color="secondary">
          <Grid item>{getWeatherIcon(day.weather[0].main, classes)}</Grid>
          </Typography>
          
          <Grid item className={classes.temp}>
            <Typography variant="h6" color="primary">
              High: {Math.round(day.temp.max)}°C
            </Typography>
          </Grid>
          <Grid item className={classes.temp}>
            <Typography variant="h6" color="primary">
              Low: {Math.round(day.temp.min)}°C
            </Typography>
          </Grid>
          
        </Grid>
      </CardContent>
    </Card>
  );
}

export default DailyForecastDisplay;
