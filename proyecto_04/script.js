// Obtener el día actual de la semana como un número (0-6) donde 0 es Domingo y 6 es Sábado.
const day = new Date().getDay();
let nombreDia;

switch (day) {
  case 0:
    nombreDia = "Domingo";
    break;
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  case 4:
    nombreDia = "Jueves";
    break;
  case 5:
    nombreDia = "Viernes";
    break;
  case 6:
    nombreDia = "Sábado";
    break;
  default:
    nombreDia = "Desconocido";
}

alert(`Hoy es ${nombreDia}`);