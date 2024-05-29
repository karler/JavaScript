// Pedimos al usuario que ingrese su calificación
let calificacion = parseFloat(prompt("Ingrese su calificación en el examen (0-100):"));

// Validamos que la calificación esté dentro del rango válido
if (calificacion >= 0 && calificacion <= 100) {
  // Evaluamos si la calificación es aprobatoria
  if (calificacion >= 70) {
    alert("Aprobado");
  } else {
    alert("Reprobado");
  }
} else {
  alert("Calificación inválida. Ingrese un número entre 0 y 100.");
}