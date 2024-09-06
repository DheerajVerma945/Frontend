const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiId = import.meta.env.VITE_API_ID;



async function getData(city) {
    const completeURL = baseURL + city + apiId;
    try {
        const response = await fetch(completeURL);
        if (response) {
            const data = await response.json();
            return data;
        }
        else {
            console.error("Error fetching weather data:", response.status);
            return null;
        }
    } catch (error) {
        console.log("Error in data fetching:", error);
        return null;
    }

}
export default getData  