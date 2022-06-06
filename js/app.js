import { consultarAPI } from "./consultaAPI.js";
import { mostrarError } from "./error.js";

export const resultado = document.querySelector('#resultado');
export const formulario = document.querySelector('#formulario');
export const container = document.querySelector('.container');
export const div = document.createElement('div');
export const alerta = document.createElement('p');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e) {
    e.preventDefault()
    console.log('Buscando Clima');
    const ciudad = document.querySelector('#ciudad').value
    const pais = document.querySelector('#pais').value

    if (!ciudad || !pais){
        mostrarError("Ingrese ciudad y/o país para realizar la búsqueda")
    } else {
        consultarAPI(ciudad, pais)
        // console.log(data);
    }
}

/* 
Validacion para que no envien input vacios 
Mostrar valores en el DOM 
temp: 283.15
temp_max: 283.15
temp_min: 283.15
Para mostrar en Grados Celcius restar 273.15
Mostrar un cartel de error que dure aprox 5 segundos
*/

