import {div} from "./app.js";

export function limpiarHTML(){
    while (div.firstChild){
        div.removeChild(div.firstChild);
    }

    setTimeout(()=>{div.remove();}, 5000);
}