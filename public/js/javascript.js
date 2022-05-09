//jshint esversion:6

//Valido el formulario antes de enviarselo al servidor
var botonEnviar=document.querySelector(".botonEnviar");
botonEnviar.addEventListener("click",function(){
  let tipoCasa=formulario.tipoVivienda.value;
  let annos=formulario.annos.value;
  let interes=formulario.interes.value;

  if((tipoCasa=="...")||(annos=="...")||(interes=="...")){
    alert("El formulario esta incompleto");
    return false;
  }
  formulario.submit();//Envio el formulario porque esta completo
});//Fin de la funcion add EventListener

//Ponemos a escuchar los cambios que realice el usuario en la lista de tipo de vivienda para poder cambiar la foto
var tipoVivienda=formulario.tipoVivienda;
tipoVivienda.addEventListener("change",function(){
  //Cambiamos la foto de la vivienda
  var nuevaVivienda=formulario.tipoVivienda.value;
//Selecciono la foto
  var foto=document.querySelector(".fotoCasa");
  //Cambio la imagen depende la opcion elegida por el usuario
  switch(nuevaVivienda){
    case "piso":foto.src="../imagenes/piso.jpg";
    break;
    case "chalet":foto.src="../imagenes/chalets.jpg";
    break;
    case "duplex":foto.src="../imagenes/duplex.jpg";
    break;
}
});
