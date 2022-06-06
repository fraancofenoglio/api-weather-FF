import { container, div, alerta } from "./app.js"
import { limpiarHTML } from "./limpiarHTML.js"

export function mostrarError(message) {
    limpiarHTML();

    div.appendChild(alerta);
    div.style = 'display:flex;justify-content:center;align-items:center;'
    alerta.style = 'background:red;color:white;width:40%;text-align:center;border-radius:5px;';
    alerta.innerText = message;

    container.appendChild(div);
}