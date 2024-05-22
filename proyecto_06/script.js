let mes = prompt("Ingrese el mes");
let mensaje ="";

switch (mes) {
  case "enero":
  case "febrero":
  case "diciembre":
    mensaje = "Invierno";
    break;
  case "marzo":
  case "abril":
  case "mayo":
    mensaje = "Primavera";
    break;
  case "junio":
  case "julio":
  case "agosto":
    mensaje = "Verano";
    break;
  case "septiembre":
  case "octubre":
  case "noviembre":
    mensaje = "Otoño";
    break;
  default:
    mensaje = "Mes inválido";

}

if (mensaje=="Mes inválido"){
  alert("Mes inválido");
}else{
  alert(`${mes} es de la estación ${mensaje}`);
}
