//importo las funciones neceserias barra de navegacion, footer y el mapa dinamico
import { creaNav, creaFooter, mapa} from "export/script.js";
document.addEventListener('DOMContentLoaded', function(){
    creaNav();
    creaFooter();
    mapa();
});

