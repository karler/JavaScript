// Definimos las credenciales correctas
const usuarioCorrecto = "admin";
const contraseñaCorrecta = "12345";

// Pedimos al usuario que ingrese su nombre de usuario y contraseña
let usuarioIngresado = prompt("Ingrese su nombre de usuario:");
let contraseñaIngresada = prompt("Ingrese su contraseña:");

// Evaluamos las credenciales ingresadas
if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorrecta) {
  alert("Acceso concedido");
} else {
  alert("Acceso denegado");
}