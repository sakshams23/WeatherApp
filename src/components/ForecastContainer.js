import { Box, Button, ButtonGroup, Container } from "@material-ui/core";
import React from "react";
import DailyForecastDisplay from "./DailyForecastDisplay";
import { v4 as uuidv4 } from "uuid";
import HourlyForecastDisplay from "./HourlyForecastDisplay";

function ForecastContainer({ weather, toggleDaily, toggleHourly, dailyActive, forecast }) {
    return (
        <Container sx={{ marginBottom: 100 }}>
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
                {/* Button Container to toggle between daily and hourly forecast */}
                <ButtonGroup>
                    <Button variant={dailyActive ? "contained" : "outlined"} color={dailyActive ? "cold" : "primary"} onClick={toggleDaily}>
                        Daily
                    </Button>
                    <Button variant={dailyActive ? "outlined" : "contained"} color={dailyActive ? "primary" : "cold"} onClick={toggleHourly}>
                        Hourly
                    </Button>
                </ButtonGroup>
            </Box>

            {/* Create a flexbox container and hid overflow to make horizontal scroll - Makes this more mobile friendly w/ less vertical scroll */}
            <Box
                sx={{
                    display: "flex",
                    overflow: "hidden",
                    overflowX: "scroll",
                    maxWidth: "90%",
                    margin: "0 auto",
                    gap: 6,
                }}
            >
                {/* Either render hourly display or daily display depending on dailyActive state */}
                {dailyActive
                    ? forecast.map((dayData) => {
                          return <DailyForecastDisplay weather={weather} key={uuidv4()} day={dayData} />;
                      })
                    : forecast.map((hourData) => {
                          return <HourlyForecastDisplay weather={weather} key={uuidv4()} hourData={hourData} />;
                      })}
            </Box>
        </Container>
    );
}

export default ForecastContainer;