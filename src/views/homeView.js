import { apiGet } from "../data/api.js";
import { renderer, html, page } from "../lib.js";


const homeTemplate = (onSubmit, onRandom) => html`
<div class="container" id="current-day">
    <h1>Welcome, traveller!</h1>
</div>

<div class="container" id="current-day">
    <h4>Please select your destination</h4>
</div>

<div>
    <form @submit=${onSubmit}>
        <label for="name">Latitude:</label>
        <input type="text" id="latitude" name="latitude"><br><br>
        <label for="email">Longitude:</label>
        <input type="text" id="longitude" name="longitude"><br><br>
        <button type="submit">Submit</button>
        <button type="button" @click=${onRandom}>Random</button>
    </form><br>
</div>
`;

export function showHomeView(ctx) {
    ctx.data = "TEST"
    renderer(homeTemplate(onSubmit, onRandom));
}

export let result = {};
async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let { latitude, longitude } = Object.fromEntries(formData);

    if (latitude.trim() === '' || longitude.trim() === '') {
        alert('Please enter a value!');
        return;
    }

    latitude = Number(latitude);
    longitude = Number(longitude);

    if (isNaN(latitude) || isNaN(longitude)) {
        alert('Please enter valid numbers for latitude and longitude!');
        e.target.reset();
        return;
    }

    if (latitude > 90 || latitude < -90) {
        alert('latitude range is not valid. Please pick a value betwee -90 to 90!')
    }

    if (longitude > 180 || longitude < -180) {
        alert('Longitude range is not valid. Please pick a value betwee -180 to 180!')
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=df4100685cdbaac6b9eda4bd1ed8f22a`
    result = await apiGet(url);
    page.redirect('/forecast');
    e.target.reset();

}

async function onRandom(e) {
    const latitude = (Math.random() * 180 - 90).toFixed(2);
    const longitude = (Math.random() * 360 - 180).toFixed(2);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=df4100685cdbaac6b9eda4bd1ed8f22a`
    result = await apiGet(url);
    page.redirect('/forecast');
}