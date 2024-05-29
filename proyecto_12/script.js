// Definimos la variable precioProducto
let precioProducto = 120; // Puedes cambiar este valor para probar diferentes escenarios

// Solicitamos al usuario que indique si tiene descuento (si/no)
let tieneDescuentoUsuario = prompt("¿Tiene descuento? (si/no): ");

// Convertimos la respuesta del usuario a minúsculas para facilitar la comparación
tieneDescuentoUsuario = tieneDescuentoUsuario.toLowerCase();

// Evaluamos si el usuario tiene descuento y si el precio es mayor a 100
if (tieneDescuentoUsuario === "si" && precioProducto > 100) {
  alert("Puedes comprar el producto con descuento");
} else {
  alert("No puedes comprar el producto con descuento");
}