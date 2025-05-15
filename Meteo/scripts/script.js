document.addEventListener("DOMContentLoaded", () => {
    form = document.getElementById("form");

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
                    meteoDiv.innerHTML = `
                        <h2>Meteo attuale</h2>
                        <p>Temperatura: ${meteo.temperature} °C</p>
                        <p>Umidità: ${meteo.relative_humidity} %</p>
                        <p>Precipitazioni: ${meteo.precipitation} mm</p>
                        <p>Pioggia: ${meteo.rain} mm</p>
                        <p>Copertura nuvolosa: ${meteo.cloud_cover} %</p>
                        <p>Velocità vento: ${meteo.wind_speed_10m} km/h</p>
                        <p>Codice meteo: ${meteo.weather_code}</p>
                    `;
                })
                .catch(error => {
                    console.error("Errore:", error);
                });
            });
            

    }
});