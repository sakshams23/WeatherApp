import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "@material-ui/core";
import CurrentWeatherContainer from "./components/CurrentWeatherContainer";
import ErrorMessageContainer from "./components/ErrorMessageContainer";
import ForecastContainer from "./components/ForecastContainer";
import { fetchWeatherData, fetchForecastData } from "./components/hooks/fetchWeather";
import { theme, useStyles } from "./styles/styles";
import Navbar from "./components/Navbar"; // Import the Navbar

function App() {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState(null);
    const [queryError, setQueryError] = useState("");
    const [dailyForecast, setDailyForecast] = useState([]);
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyActive, setDailyActive] = useState(true);

    const classes = useStyles();
    const isInitialMount = useRef(true);

    const search = async (e) => {
        if (e.key === "Enter" || e.type === "click") {
            if (!query) {
                setQueryError("Please enter a location!");
                return;
            }
            try {
                const data = await fetchWeatherData(query);
                setWeather(data);
                setQuery("");
                setQueryError("");
                setDailyActive(true);
            } catch (err) {
                setQueryError(err.message || "Failed to fetch weather data");
                setWeather(null);
            }
        }
    };

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else if (weather) {
            (async () => {
                try {
                    const data = await fetchForecastData(weather.coord.lat, weather.coord.lon);
                    setDailyForecast(data.daily);
                    setHourlyForecast(data.hourly);
                } catch (err) {
                    console.error("Error fetching forecast data:", err);
                }
            })();
        }
    }, [weather]);

    const toggleDaily = () => {
        setDailyActive(true);
    };

    const toggleHourly = () => {
        setDailyActive(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={weather ? (weather.main.temp > 80 ? "app" : weather.main.temp > 70 ? "app cloudy" : "app cold") : "app"}>
                <Navbar handleSearch={search} onChange={(e) => setQuery(e.target.value)} value={query} /> {/* Add the Navbar here */}
                <main>
                    {weather ? (
                        <>
                            <CurrentWeatherContainer weather={weather} />
                            <section className={classes.forecast}>
                                <ForecastContainer
                                    weather={weather}
                                    toggleDaily={toggleDaily}
                                    toggleHourly={toggleHourly}
                                    dailyActive={dailyActive}
                                    forecast={dailyActive ? dailyForecast.slice(1) : hourlyForecast.slice(1, 13)}
                                />
                            </section>
                        </>
                    ) : (
                        queryError && <ErrorMessageContainer queryError={queryError} />
                    )}
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;
