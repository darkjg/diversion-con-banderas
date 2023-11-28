const datos= document.getElementById("datos");
const cerrar= document.getElementById("cerrar");
function cargar(){
  let cargar= localStorage.getItem("datosPaguina");
    datos.innerHTML=cargar;
}
console.log(localStorage)
cargar();

cerrar.addEventListener("click",function(){
    window.close();
})