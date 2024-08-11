/*importo las funciones neceserias barra de navegacion, footer y las funciones para cargar las noticias y crear los
div para alojar las noticias*/
import { creaNav, creaFooter } from "./export/script.js";
document.addEventListener('DOMContentLoaded', function(){
    creaNav();
    creaFooter();
});

import {creaNews, cargarNot} from "./export/script.js";
document.addEventListener('DOMContentLoaded', function(){
    creaNews();
    cargarNot();
});
//instruccion jquery para que el carrouser funcione
$(document).ready(function() {
    const sliderInner = $('.slider-inner');
    const sliderItem = $('.slider-item');
    const totalItem = sliderItem.length;
    let index = 0;
      function show(i){
        sliderInner.css('transform',`translateX(-${i * 100}%)`)
      }
      function next(){
        index = (index + 1 )% totalItem;
        show(index);
      }
      function prev(){
        index = (index - 1)% totalItem;
        show(index)
      }
      $('#next').on('click', next);
      $('#prev').on('click', prev);
      setInterval(next, 4000);
});
