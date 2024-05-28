// Solicitamos al usuario que ingrese el nombre del país
let pais = prompt("Ingrese el nombre del país:");

// Convertimos el nombre del país a minúsculas para hacer la comparación insensible a mayúsculas
pais = pais.toLowerCase();

// Inicializamos el precio del envío en 0
let precioEnvio = 0;

// Utilizamos una estructura switch para determinar el precio del envío según el país
switch (pais) {
  case "españa":
    precioEnvio = 10;
    break;
  case "mexico":
    precioEnvio = 20;
    break;
  case "argentina":
    precioEnvio = 25;
    break;
  case "colombia":
    precioEnvio = 30;
    break;
  default:
    precioEnvio = 50;
}

// Mostramos el precio del envío
alert("El precio del envío a " + pais + " es de " + precioEnvio + " soles.");