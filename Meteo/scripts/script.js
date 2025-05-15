document.addEventListener("DOMContentLoaded", () => {
    form = document.getElementById("form");
    getLocation = document.getElementById("getLocation");

    const icons = {
        "0": "☀️", 
        "1": "🌤️", 
        "2": "⛅", 
        "3": "☁️", 
        "45": "🌫️",
        "48": "🌫️",
        "51": "🌦️",
        "53": "🌦️",
        "55": "🌦️",
        "56": "🌧️",
        "57": "🌧️",
        "61": "🌧️",
        "63": "🌧️",
        "65": "🌧️",
        "66": "🌧️",
        "67": "🌧️",
        "71": "🌨️",
        "73": "🌨️",
        "75": "🌨️",
        "77": "🌨️",
        "80": "🌦️",
        "81": "🌦️",
        "82": "🌦️",
        "85": "🌨️",
        "86": "🌨️",
        "95": "⛈️",
        "96": "⛈️",
        "99": "⛈️" 
    }

    if (form){
        form.addEventListener("submit", (e) =>{
            e.preventDefault();
            const lat = document.getElementById("lat").value;
            const lon = document.getElementById("lon").value;
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,wind_speed_10m,weather_code`;
            
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Errore nella richiesta");
                    }
                    return response.json();
                })
                .then(data => {
                    const meteo = data.current;
                    const meteoDiv = document.getElementById("meteo");
                    console.log(meteo);
                    meteoDiv.innerHTML = `
                        <h2>Meteo attuale</h2>
                        <div class="weather-info">
                            <div class="weather-main">
                                <span class="weather-icon" style="font-size: 5rem;">${icons[meteo.weather_code] || ""}</span>
                                <span class="temp">${meteo.temperature_2m}°C</span>
                            </div>
                            <div class="details">
                                <div class="detail-item">Umidità: ${meteo.relative_humidity_2m} %</div>
                                <div class="detail-item">Precipitazioni: ${meteo.precipitation} mm</div>
                                <div class="detail-item">Pioggia: ${meteo.rain} mm</div>
                                <div class="detail-item">Copertura nuvolosa: ${meteo.cloud_cover} %</div>
                                <div class="detail-item">Vento: ${meteo.wind_speed_10m} km/h</div>
                                <div class="detail-item">Codice meteo: ${meteo.weather_code}</div>
                            </div>
                        </div>
                    `;
                })
                .catch(error => {
                    console.error("Errore:", error);
                });
            });
            

    }
    
    if (getLocation){
        getLocation.addEventListener("click", (e) => {
            e.preventDefault();
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, error);
            } else {
                console.error("Geolocalizzazione non supportata");
            }
        });
    }


    function success(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById("lat").value = lat;
        document.getElementById("lon").value = lon;
    }

    function error() {
        console.error("Impossibile ottenere la posizione");
    }
});