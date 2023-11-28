const countrieslist = document.getElementById("countries-list");
const getBanderas = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3/all");
    if (!response) {
      throw new Error("Error");
    } else {
      const data = await response.json();

      data.sort(function (a, b) {
        return a["name"].common.localeCompare(b["name"].common, 'en', { numeric: true })
      });
      console.log(data)
      data.forEach(dato => {
        let templateBanderas = `<div id="${dato["name"].common}" class="bandera" >
                                            <img src="${dato.flags[1]}" alt="bandera de ${dato["name"].common}">
                                            <div class="texto"><b>${dato["name"].common}</b> </div></img> 
                                </div>`;
        //   console.log(dato["capital"][0])
        countrieslist.innerHTML += templateBanderas;

      });
      return data;
    }
  } catch (error) {
    console.log("Errror al obtener")
  }
}



getBanderas().then((data => agrregaclick(data)));


function agrregaclick(dato) {

  const banderas = document.getElementsByClassName("bandera");
  let arrBanderas = [].slice.call(banderas);
  ///console.log(dato);
  arrBanderas.forEach(element => {

    click(element, dato)
  })


}

function click(div, datos) {

  datos.forEach(dato => {
    if (dato["name"].common == div.id) {

      div.addEventListener("click", generarVentana);
      div.miparametro=dato;
    }
  });
}
function generarVentana(datos) {
  dato= datos.currentTarget.miparametro;
  console.log(dato);
  let templateBanderasExtenso = `<div id="banderaExtenso" class="banderaExtenso">
                                      <img src="${dato.flags[1]}" alt="bandera de ${dato["name"].common}"></img> 
                                      <div class="texto"><b>${dato["name"].common}</b> 
                                      <div class="texto">Capital :${dato["capital"][0]} </div>
                                      <div class="texto">Poblacion :${dato["population"]} </div>
                                      <div class="texto">Lado de la carretera:${dato["car"].side} </div>
                                      </div>
                                  </div>`;
  localStorage.setItem("datosPaguina",templateBanderasExtenso);
  window.open("/pagina2.html","Datos extra","width=570,height=270,scrollbars=NO")
  

}

