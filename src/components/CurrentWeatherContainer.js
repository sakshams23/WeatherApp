import React from "react";
import LocationContainer from "./LocationContainer";
import TempContainer from "./TempContainer";
import WeatherContainer from "./WeatherContainer";
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from "weather-icons-react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4), // Add margin top to create space below the navbar
  },
  info: {
    marginBottom: theme.spacing(1), // Add margin top to create space below the navbar
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Transparent background
    marginBottom: theme.spacing(2),
    width: "100%", // Increase card width
  },
  cardWarm: {
    backgroundColor: "rgba(255, 229, 180, 0.6)", // Transparent warm background
    marginBottom: theme.spacing(2),
    width: "100%", // Increase card width
  },
  cardCold: {
    backgroundColor: "rgba(179, 205, 224, 0.6)", // Transparent cold background
    marginBottom: theme.spacing(2),
    width: "100%", // Increase card width
  },
  weatherIcon: {
    marginBottom: theme.spacing(1),
  },
  date: {
    padding: theme.spacing(1),
  },
  temp: {
    marginBottom: theme.spacing(2),
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

function CurrentWeatherContainer({ weather }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LocationContainer
        country={weather.sys.country}
        location={weather.name}
      />
      <TempContainer 
       className={classes.info}
        variant='h3' 
        temp={weather.main} 
        feels_like={weather.main.feels_like} 
        humidity={weather.main.humidity} 
        pressure={weather.main.pressure} 
      />
      <WeatherContainer variant='h1' weather={getWeatherIcon(weather.weather[0].main, classes)} color="primary"/>
    </div>
  );
}

export default CurrentWeatherContainer;
