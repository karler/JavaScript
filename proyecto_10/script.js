// Pedimos al usuario que ingrese un número del 1 al 7
let dia = parseInt(prompt("Ingrese un número del 1 al 7 para representar el día de la semana (1-Lunes, 2-Martes, etc.):"));

// Usamos una estructura switch para evaluar el día de la semana
switch (dia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    alert("No es fin de semana");
    break;
  case 6:
  case 7:
    alert("Es fin de semana");
    break;
  default:
    alert("Número inválido. Ingrese un número del 1 al 7.");
}