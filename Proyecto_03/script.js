let edad = parseInt(prompt("Ingresa tu edad:"));
let estaRegistrado = prompt("¿Estás registrado para votar? (sí/no)").toLowerCase();

if (edad >= 18) {
    if (estaRegistrado === "sí") {
        alert("Puedes votar.");
    } else {
        alert("No puedes votar porque no estás registrado.");
    }
} else {
    alert("No puedes votar porque eres menor de 18 años.");
}
