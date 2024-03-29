import { html, renderer } from "../lib.js";
import { result } from "./homeView.js";

const forecastTemp = (advice, date) => html`
<div id="advice">${advice()}</div>
<div id="forecast">
    <div class="container" id="current-day">
        <h2>Your location</h2>
        <p>${result.name} - ${result.sys.country}</p>
    </div>
    <div class="container" id="recipe">
        <h2>Current date</h2>
        <p>${date}</p>
    </div>
    <div class="container" id="ingredients">
        <h2>Weather</h2>
        <p>${(result.main.temp - 272.15).toFixed(2)} C</p>
        <p>${(result.wind.speed).toFixed(2)} m/s</p>
        <p>${result.weather[0].main} - ${result.weather[0].description}</p>
    </div>
</div>
`;

function advice() {
    switch (result.weather[0].main) {
        case "Clouds": return "Prepare for rain!";
        case "Rain": return "Take an umbrella!";
        case "Snow": return "Dress warmly!";
        case "Sun": return "Put on sunscreen!";
        default: return "Have fun!";
    }
}

export function showForecastView(ctx) {
    const rawDate = new Date();
    const date = rawDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    renderer(forecastTemp(advice, date));
}