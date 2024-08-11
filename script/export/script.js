//Creo la funcion "creaNav" que creara una lista y los enlaces con sus direcciones, ademas de añadir stilos de css
export function creaNav(){
    //Creo una constante sera un array que contiene un objeto con el texto de los enlaces y la direccion 
    const navItems = [
      {text:"INICIO", url: "index.html", id:"inicio"},
      {text:"GALERIA", url: "../views/galeria.html", id:"galeria"},
      {text:"PRESUPUESTO", url:"../views/presupuesto.html",id:"presupuesto"},
      {text:"CONTACTO", url:"../views/contacto.html", id:"contacto"}
  ];
    const cabecera = document.querySelector(".cabecera");
    const lista = document.createElement('ul');
    lista.className = "enlaces";
    navItems.forEach(item => {
      const navItem = document.createElement("li");
      const link = document.createElement("a");
      link.textContent =item.text;
      link.href = item.url;
      navItem.appendChild(link);
      lista.appendChild(navItem);
      link.className = "enlaces";
      //compruebo que la url actual coincide con el enlace 
      if(window.location.pathname.includes(item.url)){
        link.classList.add("active")
      }
    });
    cabecera.appendChild(lista);
   //Creo un div que me separará la barra de navegacion y el main (solo estetico)
    const nav = document.createElement("div");
    nav.className = "nav";
    let texto = document.createTextNode("CONSULTENOS SIN COMPROMISO");
    nav.appendChild(texto);
    nav.className = "nav";
    cabecera.appendChild(nav);
   //establezco el id en funcion de la url
    const linkActive = window.location.pathname;
    navItems.forEach(item =>{
      if(linkActive === item.url){
        document.body.id = item.id;
      }
    })

  };
  //creo una funcion para crear el footer
  export function creaFooter(){
    const footer = document.getElementById('pie');
    //Creo un div donde las redes sociales, los enlaces redirigidos y lo pongo en el footer
    const divSocial = document.createElement("div");
    divSocial.className = 'footer-content';
    const h2Social  = document.createElement("h2");
    h2Social.textContent = "NUESTRAS REDES SOCIALES";
    h2Social.className = "h2Footer";
    divSocial.appendChild(h2Social);
    footer.appendChild(divSocial);
    //creo un div para meter los iconos 
    const divIcon = document.createElement('div');
    divIcon.className = "divIcon";
    const iconos = [
      {href: 'https://www.facebook.com', class:'fa-brands fa-facebook'},
      {href: 'https://www.youtube.com', class:'fa-brands fa-youtube'},
      {href: 'https://www.instagram.com', class: 'fa-brands fa-instagram'},
      {href: 'https://www.twitter.com', class: 'fa-brands fa-twitter'},
    ];
    //con el bucle forEach creo cada uno de los enlaces con sus iconos
    iconos.forEach(icon => {
      const a = document.createElement('a');
      a.href = icon.href;
      a.target = '_blank';
      a.className = 'link-redes';
      const i = document.createElement('i');
      i.className = icon.class;
      a.appendChild(i);
      divIcon.appendChild(a);
    });
    //creo un div donde meto el enlace de wuasap y el email y para el telefono y la direccion 
    divSocial.appendChild(divIcon);
    footer.appendChild(divSocial);
    const divContacto = document.createElement("div");
    divContacto.className = 'footer-content';
    const h2Contacto = document.createElement("h2");
    h2Contacto.textContent = "CONTACTENOS";
    h2Contacto.className = "h2Footer";
    divContacto.appendChild(h2Contacto);
    //creo un div para los iconos de contacto y los iconos 
    const divcont = document.createElement('div');
    divcont.className = 'divIcon';
    const contacts = [
      {href: 'https://web.whatsapp.com/', class:'fa-brands fa-whatsapp', title: 'WhatsApp'},
      {href: 'mailto:ejemplo@ejemplo.com', class:'fa-solid fa-envelope', title: 'Correo Electronico'},
    ];
    contacts.forEach(contact => {
      const a = document.createElement('a');
      a.href = contact.href;
      a.target = '_blank';
      a.title = contact.title;
      a.className = 'link-redes';
      const i = document.createElement('i');
      i.className = contact.class;
      a.appendChild(i);
      divcont.appendChild(a);    
    });
    divContacto.appendChild(divcont);
    footer.appendChild(divContacto);
    //Creo nuestra localizacion primero el telefono
    const divDetail = document.createElement('div');
    divDetail.className = ' divDetail';
    const phone = document.createElement('div');
    phone.className = 'link-redes';
    const phoneIcon= document.createElement('i');
    phoneIcon.className = "fa-solid fa-phone";
    const phoneText = document.createElement('span');
    phoneText.textContent= ': 123456789';
    phone.appendChild(phoneIcon);
    phone.appendChild(phoneText);
    divDetail.appendChild(phone);
    //creo la direccion
    const adress = document.createElement('div');
    adress.className = 'link-redes';
    const adresIcon = document.createElement('i');
    adresIcon.className = "fa-solid fa-location-dot";
    const adresText = document.createElement('span');
    adresText.innerHTML = ' C/ Hacho, N 8,<br>cp: 29200-Antequera<br>(Malaga)';
    adress.appendChild(adresIcon);
    adress.appendChild(adresText);
    divDetail.appendChild(adress);
    footer.appendChild(divDetail);

    //creo otro div en el que insertare el logo de la pagina
    const pie = document.getElementById('pie');
    const divImag = document.createElement('div');
    divImag.classList = 'divImg';
    const imag = document.createElement('img');
    imag.className = 'logo-pie';
    imag.src = './asset/images/letrasB.png';
    imag.alt = 'Logo camara';
    divImag.appendChild(imag);
    pie.appendChild(divImag);
    //creo un div con el aviso legal 
    
    const divLegal = document.createElement("div");
    divLegal.className = 'divLegal';
    const pLegal = document.createElement('p');
    pLegal.textContent = "@2024 Pedro T. Photographer.Todos los derechos reservados.";
    divLegal.appendChild(pLegal);
    pie.appendChild(divLegal); 
  };

  //Esta funcion crea los div donde encuandraremos las noticias y todo el inicio de la pagina
export {creaNews,cargarNot};
//primero creare los div donde metere las noticias 
function creaNews(){
    const notcias = document.getElementById('cajaNot');
    for(let i = 0; i < 4; i++){
        const box  = document.createElement('div');
        box.className = 'box';
        notcias.appendChild(box);
    };
};
//Con esta funcion cargaremos las noticias 
 function cargarNot(){
    let objhttp  = null;
    const rssResult = "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/tecnologia/portada";
    objhttp  = new XMLHttpRequest();
    objhttp.open('GET',rssResult, true);
    objhttp.onreadystatechange = function(){
     if(objhttp.readyState == 4 && objhttp.status == 200){
     let fichero  = objhttp.responseXML;
     let noticias = fichero.getElementsByTagName('item');
     let cadena = "";
     let numNot = Math.min(4, noticias.length);
     let cajas  = document.querySelectorAll('.cajaNot .box');
    //sacamos las noticias que queremos y las ponemos en los div creados anteriormente
     for(let i = 0; i < numNot; i++){
        const titulo = noticias[i].getElementsByTagName('title')[0].textContent;
        const description = noticias[i].getElementsByTagName('description')[0].textContent;
        const enlace = noticias[i].getElementsByTagName('link')[0].textContent;
        const mediaContent = noticias[i].getElementsByTagName('media:content');
        let imagen = "";
        if(mediaContent.length > 0){
             imagen = mediaContent[0].getAttribute('url');
                }else{
                  const enclosure = noticias[i].getElementsByTagName('enclosure');
                
                      if(enclosure.length >0){
             imagen  = enclosure[0].getAttribute('url'); 
        }
      }
     
        const noticiaHTML = `
                    <h3 class="noticias-titular">TITULAR:<br> ${titulo}</h3>
                    ${imagen ? `<img src="${imagen}" alt="Imagen de la noticia" class="noticias-img">`: ""}
                    <p>${description}</p>
                    <p><a href="${enlace}" target="_blank">Leer más</a></p>
                `;
           cajas[i].innerHTML = noticiaHTML;
     };
     
   };
 };
objhttp.send();
};
  //creo una funcion que exportare para la validacion del formulario
export function validar(){
  const form = document.getElementById("formulario");
  form.addEventListener('submit', function (event){
   let valido = true;
   const nombre = document.getElementById('nombre');
   const apellido = document.getElementById('apellido');
   const telefono = document.getElementById('telefono');
   const email = document.getElementById('email');
   const option = document.getElementById('option');
   const acept = document.getElementById('aceptaCond');
   const name_re = /^[a-zA-Z ]{2,15}$/;
   const apellido_re = /^[a-zA-Z ]{2,40}$/;
   const telefono_re = /^[0-9]{9}$/;
   const email_re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if(nombre.value === "" || nombre.value == null || !name_re.test(nombre.value)){
    valido = false;
    nombre.nextElementSibling.style.display = "inline";
    
   }else{
   nombre.nextElementSibling.style.display = "none"
   }
   if(apellido.value === "" || apellido.value == null || !apellido_re.test(apellido.value)){
    valido = false;
    apellido.nextElementSibling.style.display = "inline";
   }else{
    apellido.nextElementSibling.style.display = "none";
   }
   if(telefono.value === "" || telefono.value === null || !telefono_re.test(telefono.value)){
    valido = false;
    telefono.nextElementSibling.style.display = "inline";
   }else{
    telefono.nextElementSibling.style.display = "none";
   }
   if(email.value === "" || email.value === null || !email_re.test(email.value)){
    email.nextElementSibling.style.display = "inline";
    valido = false;
   }else{
    email.nextElementSibling.style.display = "none";
   }
   if(option.value == "0"){
    valido = false;
    option.nextElementSibling.style.display = "inline";
   }else{
    option.nextElementSibling.style.display = "none";
   }
   if(!acept.checked){
    valido = false;
    acept.nextElementSibling.style.display = "inline";
   }else{
    acept.nextElementSibling.style.display = "none";
   }
   //creo el preventdefault para que no se envie hasta que no este todo ok
   if(!valido){
    event.preventDefault();
   }
  });

};
//creo la funcion que nos dara el presupuesto segun lo seleccionado
export function sumar(){
  let option = document.getElementById('option');
  let optionSelect = parseInt(option.value) || 0;
  let extras = document.querySelectorAll('.extra');
  let extrasValor = 0;
  extras.forEach(function (extra){
  
    if(extra.checked){
      extrasValor += parseInt(extra.value) || 0;
    };
  });
  let subTotal = optionSelect + extrasValor;
  //Obtenemos el valor del input dee meses
  let meses = parseInt(document.getElementById('plazo').value || 0);
  let descuento = 0;
  if(meses >=1 && meses <= 2){
    descuento = 0.05; //hacemos un descuento del 5% 
  }else if(meses >= 3 && meses <= 6){
    descuento = 0.10; //hacemos un descuento del 10%
  }else if(meses > 6){
    descuento = 0.20; //hecemos un descuento del 20%
  }
  let total = subTotal * (1 - descuento);
  document.getElementById('presupuestoE').value = total.toFixed(2); 
}
//creo el mapa dinamico con Openstreetmap y leaflet
export function mapa(){
  let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximunAge: 0
  }; 

  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
          success,
          error,
          options
      )

  }else{
      alert("Los servicios de geolocalizacion no estan disponibles en este momento")
  } 
 
}
function success(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let map = L.map('mapa',{
      center: [latitude, longitude],
      zoom: 14
  })
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:"Aqui nos puede encontrar"}).addTo(map);

  //creamos los iconos de inicio medio y final de la ruta 
  let inicio = L.icon(
      {iconUrl: '../asset/images/leaf.png',
      shadowUrl: '../asset/images/sombra-leaf.png',
      iconSize: [38,95],
      shadowSize: [50,64],
      iconAnchor: [22,94],
      shadowAnchor: [4,62],
      popupAnchor : [-3,-100]
  });
  let medio = L.icon(
      {iconUrl: '../asset/images/leaf-orange.png',
      shadowUrl: '../asset/images/sombra-leaf.png',
      iconSize: [38,95],
      shadowSize: [50,64],
      iconAnchor: [22,94],
      shadowAnchor: [4,62],
      popupAnchor : [-3,-100]
  });
  let final = L.icon(
      {iconUrl: '../asset/images/leaf-green.png',
      shadowUrl: '../asset/images/sombra-leaf.png',
      iconSize: [38,95],
      shadowSize: [50,64],
      iconAnchor: [22,94],
      shadowAnchor: [4,62],
      popupAnchor : [-3,-100
      ]});
      
      //calcula ruta 

  let control = L.Routing.control({
      waypoints: [
          L.latLng(latitude, longitude),
          L.latLng(37.14641,-5.44920)
      ],
      language: 'es',
      createMarker: function(i, wp, nWps){
          switch(i){
              case 0: 
                  return L.marker(wp.latLng,{icon:inicio, draggable: true}).bindPopup("Esta aquí");
              case nWps-1:
                  return L.marker(wp.latLng,{icon:final, draggable: true}).bindPopup("Nosotros estamos aquí");  
              default:
                  return L.marker(wp.latLng,{icon:medio, draggable: true}).bindPopup("CAMBIAME");

          }
      }
  }).addTo(mapa);

  }


function error(){
  //añado el mapa
  let mapaErro = L.map('mapa').setView([37.14641,-5.44920],18);
// añado un titulo al mapa
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:"Aqui nos puede encontrar"}).addTo(mapaErro);
//añado una marca personalizada la cual cunado pincho me da la direccion de la empresa
  let iconRed = L.icon({
      iconUrl: '../asset/images/leaf.png',
      shadowUrl: '../asset/images/sombra-leaf.png',
      iconSize: [38,95],
      shadowSize: [50,64],
      iconAnchor: [22,94],
      shadowAnchor: [4,62],
      popupAnchor : [-3,-100]

  });
  let popup = L.popup().setLatLng([37.01427, -4.56302]).setContent('Nos puede encontrar en esta direccion:<br> Espalda calle Hacho,nº 8<br>cp:29200 - Antequera <br> Malaga');
  
  //aqui pongo el icono en el mapa 
  let marker = L.marker([37.01427,-4.56302],{icon: iconRed}).bindPopup(popup).openPopup().addTo(mapaErro);


}









  
  
   
  
