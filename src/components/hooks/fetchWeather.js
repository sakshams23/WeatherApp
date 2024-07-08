const api = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/",
    forecastBase: "https://api.openweathermap.org/data/2.5/onecall?",
};
export const fetchWeatherData = async (query) => {
    try {
        const response = await fetch(`${api.base}weather?q=${query}&units=imperial&APPID=7b26c92417fd3678d52eac12dc870222`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to fetch weather data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};
export const fetchForecastData = async (lat, lon) => {
    try {
        const response = await fetch(`${api.forecastBase}lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=7b26c92417fd3678d52eac12dc870222`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to fetch forecast data");
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching forecast data:", error);
        throw error;
    }
};
