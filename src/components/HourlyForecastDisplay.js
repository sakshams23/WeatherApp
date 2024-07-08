import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from "weather-icons-react";
import { makeStyles } from "@material-ui/core/styles"; // Import makeStyles
import { useStyles as appStyles } from "../styles/styles"; // Import styles with alias

const useStyles = makeStyles((theme) => ({
  temp:{
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  cardWarm: {
    backgroundColor: "rgba(255, 229, 180, 0.6)", // Transparent warm background
    marginBottom: theme.spacing(2),
    minWidth: "140px", // Increase card width
  },
  cardCold: {
    backgroundColor: "rgba(179, 205, 224, 0.6)", // Transparent cold background
    marginBottom: theme.spacing(2),
    minWidth: "140px", // Increase card width
  },
  weatherIcon: {
    fontSize: "3rem",
    marginBottom: theme.spacing(-1),
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

function HourlyForecastDisplay({ weather, hourData }) {
  const classes = useStyles();

  let hour = new Date(hourData.dt * 1000).getHours();
  return (
    <Card
      variant="outlined"
      className={weather.main.temp > 70 ? classes.cardWarm : classes.cardCold}
    >
      <CardContent>
        <Typography variant="h5" align="center" color="primary">
          {hour > 12 ? hour - 12 : hour} {hour < 12 ? "AM" : "PM"}
        </Typography>
        <Typography variant="h4" align="center" color="primary" className={classes.temp}>
          {Math.round(hourData.temp)}°C
        </Typography>
        <Typography variant="h3" align="center" color="secondary">
          {getWeatherIcon(hourData.weather[0].main, classes)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HourlyForecastDisplay;
