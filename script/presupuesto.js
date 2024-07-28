//importo las funciones neceserias barra de navegacion, footer y las funciones para sumar el presupuesto y validacion del mismo
import { creaNav, creaFooter } from "./export/script.js";
document.addEventListener('DOMContentLoaded', function(){
    creaNav();
    creaFooter();
});

import { validar, sumar} from "./export/script.js";
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('formulario');
    validar(form);

document.getElementById('option').addEventListener('change', sumar);
document.querySelectorAll('.extra').forEach(extra=>{
    extra.addEventListener('change', sumar);
 });
 document.getElementById('plazo').addEventListener('input',sumar);
 document.getElementById('presupuestoE').addEventListener('click', sumar)
});



//jquery para que la tabla con los precios aparezca y desaparezca
$(document).ready(function () {
    $('.tabla-title').click(function () {
        let table = $('#precios');
        if (table.is(':visible')) {
            table.fadeOut();
        } else {
            table.fadeIn();
        }
    })

    $('.clicke').click(function () {
        let lista = $('.descLista');
        if (lista.is(':visible')) {
            lista.fadeOut();
        } else {
            lista.fadeIn()
        }
    })
})


    

