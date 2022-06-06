
import { mostrarError } from './error.js';
import { resultado } from './app.js';

export function consultarAPI(ciudad, pais) {
    const apiKEY = 'b463dc96882da7c4efdc8dc95527b092'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKEY}`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod === '404') {
                mostrarError('No se pudo encontrar la ciudad.');
            } else{
                    const { temp, temp_max, temp_min, feels_like, humidity, pressure} = data.main;

                    resultado.innerHTML= `<div id="tiempo"> 
                    <h2> Tiempo para: ${data.name}</h2>
                    <p>Temperatura: ${(temp - 273.15).toFixed(2)} °C.</p>
                    <p>Temperatura Máx.: ${(temp_max -273.15).toFixed(2)} °C.</p>
                    <p>Temperatura Mín.: ${(temp_min -273.15).toFixed(2)} °C.</p>
                    <p>Sensación térmica: ${(feels_like -273.15).toFixed(2)} °C.</p>
                    <p>Humedad: ${humidity}%.</p>
                    <p>Presión: ${pressure} hPa.</p>
                </div>`
            }
        })
}